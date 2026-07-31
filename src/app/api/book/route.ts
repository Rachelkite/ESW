import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/validation";
import { isSlotStillAvailable } from "@/lib/availability";
import { serviceDurationMin } from "@/lib/service-catalog";
import { sendBookingNotification, sendBookingConfirmation } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = bookingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const input = parsed.data;
  const startsAt = new Date(input.startsAt);
  const durationMin = serviceDurationMin(input.service);

  if (Number.isNaN(startsAt.getTime()) || startsAt <= new Date()) {
    return NextResponse.json({ error: "Please choose a valid future time." }, { status: 400 });
  }

  const stillAvailable = await isSlotStillAvailable(startsAt, durationMin);
  if (!stillAvailable) {
    return NextResponse.json(
      { error: "That time was just booked. Please choose another." },
      { status: 409 }
    );
  }

  const lead = await prisma.lead.create({
    data: {
      type: "BOOKING",
      status: "SCHEDULED",
      name: input.name,
      email: input.email,
      phone: input.phone,
      message: input.notes || null,
      service: input.service,
      address: input.address,
      scheduledAt: startsAt,
      durationMin,
      source: "website",
    },
  });

  await Promise.allSettled([sendBookingNotification(input), sendBookingConfirmation(input)]);

  await prisma.emailLogEntry.createMany({
    data: [
      {
        leadId: lead.id,
        subject: `New Booking — ${input.name}`,
        direction: "outbound",
        body: "Booking notification sent to the Élevé team.",
      },
      {
        leadId: lead.id,
        subject: "Your appointment is confirmed — Élevé Skin & Wellness",
        direction: "outbound",
        body: "Confirmation sent to the client.",
      },
    ],
  });

  return NextResponse.json({ id: lead.id }, { status: 201 });
}
