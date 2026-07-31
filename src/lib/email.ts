import { Resend } from "resend";
import { inquiryTypes, type ContactInput, type BookingInput, type MembershipInput } from "@/lib/validation";
import { serviceLabel } from "@/lib/service-catalog";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function typeLabel(type: ContactInput["type"]) {
  return inquiryTypes.find((t) => t.value === type)?.label ?? type;
}

export async function sendConciergeNotification(input: ContactInput) {
  if (!resend) return;
  const notifyEmail = process.env.CONCIERGE_NOTIFY_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!notifyEmail || !fromEmail) return;

  await resend.emails.send({
    from: fromEmail,
    to: notifyEmail,
    subject: `New Inquiry — ${typeLabel(input.type)} — ${input.name}`,
    html: `
      <p><strong>Type:</strong> ${typeLabel(input.type)}</p>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ""}
      ${input.company ? `<p><strong>Company:</strong> ${input.company}</p>` : ""}
      ${input.message ? `<p><strong>Message:</strong><br/>${input.message}</p>` : ""}
    `,
  });
}

export async function sendClientConfirmation(input: ContactInput) {
  if (!resend) return;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!fromEmail) return;

  await resend.emails.send({
    from: fromEmail,
    to: input.email,
    subject: "Your inquiry has been received — Élevé Skin & Wellness",
    html: `
      <p>Dear ${input.name},</p>
      <p>Thank you for reaching out to Élevé Skin &amp; Wellness. Your concierge
      will be in touch shortly to arrange your private consultation.</p>
      <p>Your Health. Elevated.</p>
      <p>— Élevé Skin &amp; Wellness</p>
    `,
  });
}

function formatAppointmentTime(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}

export async function sendBookingNotification(input: BookingInput) {
  if (!resend) return;
  const notifyEmail = process.env.CONCIERGE_NOTIFY_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!notifyEmail || !fromEmail) return;

  await resend.emails.send({
    from: fromEmail,
    to: notifyEmail,
    subject: `New Booking — ${serviceLabel(input.service)} — ${input.name}`,
    html: `
      <p><strong>Service:</strong> ${serviceLabel(input.service)}</p>
      <p><strong>When:</strong> ${formatAppointmentTime(input.startsAt)}</p>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Phone:</strong> ${input.phone}</p>
      <p><strong>Address:</strong> ${input.address}</p>
      ${input.notes ? `<p><strong>Notes:</strong><br/>${input.notes}</p>` : ""}
    `,
  });
}

export async function sendBookingConfirmation(input: BookingInput) {
  if (!resend) return;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!fromEmail) return;

  await resend.emails.send({
    from: fromEmail,
    to: input.email,
    subject: "Your appointment is confirmed — Élevé Skin & Wellness",
    html: `
      <p>Dear ${input.name},</p>
      <p>Your ${serviceLabel(input.service)} appointment is confirmed for
      <strong>${formatAppointmentTime(input.startsAt)}</strong>. Your provider
      will come directly to you at:</p>
      <p>${input.address}</p>
      <p>Your Health. Elevated.</p>
      <p>— Élevé Skin &amp; Wellness</p>
    `,
  });
}

export async function sendMembershipNotification(input: MembershipInput) {
  if (!resend) return;
  const notifyEmail = process.env.CONCIERGE_NOTIFY_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!notifyEmail || !fromEmail) return;

  await resend.emails.send({
    from: fromEmail,
    to: notifyEmail,
    subject: `New Membership Inquiry — ${input.practice} — ${input.name}`,
    html: `
      <p><strong>Partner Practice:</strong> ${input.practice}</p>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ""}
      ${input.message ? `<p><strong>Message:</strong><br/>${input.message}</p>` : ""}
    `,
  });
}

export async function sendMembershipConfirmation(input: MembershipInput) {
  if (!resend) return;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!fromEmail) return;

  await resend.emails.send({
    from: fromEmail,
    to: input.email,
    subject: "Your membership inquiry has been received — Élevé Skin & Wellness",
    html: `
      <p>Dear ${input.name},</p>
      <p>Thank you for your interest in membership with ${input.practice}
      through Élevé. Your concierge will be in touch shortly with next steps.</p>
      <p>Your Health. Elevated.</p>
      <p>— Élevé Skin &amp; Wellness</p>
    `,
  });
}
