import { Resend } from "resend";
import { inquiryTypes, type ContactInput } from "@/lib/validation";

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
