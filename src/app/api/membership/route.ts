import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { membershipSchema } from "@/lib/validation";
import { sendMembershipNotification, sendMembershipConfirmation } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = membershipSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const input = parsed.data;

  const lead = await prisma.lead.create({
    data: {
      type: "MEMBERSHIP",
      name: input.name,
      email: input.email,
      phone: input.phone || null,
      company: input.practice,
      message: input.message || null,
      source: "website",
    },
  });

  await Promise.allSettled([sendMembershipNotification(input), sendMembershipConfirmation(input)]);

  await prisma.emailLogEntry.createMany({
    data: [
      {
        leadId: lead.id,
        subject: `New Membership Inquiry — ${input.name}`,
        direction: "outbound",
        body: "Membership notification sent to the Élevé team.",
      },
      {
        leadId: lead.id,
        subject: "Your membership inquiry has been received — Élevé Skin & Wellness",
        direction: "outbound",
        body: "Confirmation sent to the client.",
      },
    ],
  });

  return NextResponse.json({ id: lead.id }, { status: 201 });
}
