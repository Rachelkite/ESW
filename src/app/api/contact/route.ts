import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validation";
import { sendConciergeNotification, sendClientConfirmation } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const input = parsed.data;

  const lead = await prisma.lead.create({
    data: {
      type: input.type,
      name: input.name,
      email: input.email,
      phone: input.phone || null,
      company: input.company || null,
      message: input.message || null,
      source: "website",
    },
  });

  await Promise.allSettled([
    sendConciergeNotification(input),
    sendClientConfirmation(input),
  ]);

  await prisma.emailLogEntry.createMany({
    data: [
      {
        leadId: lead.id,
        subject: `New Inquiry — ${input.name}`,
        direction: "outbound",
        body: "Concierge notification sent to the Élevé team.",
      },
      {
        leadId: lead.id,
        subject: "Your inquiry has been received — Élevé Skin & Wellness",
        direction: "outbound",
        body: "Confirmation sent to the client.",
      },
    ],
  });

  return NextResponse.json({ id: lead.id }, { status: 201 });
}
