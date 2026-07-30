import { z } from "zod";

export const INQUIRY_VALUES = [
  "CLIENT",
  "PEPTIDE",
  "CORPORATE",
  "RETREAT",
  "PHYSICIAN",
] as const;

export const inquiryTypes: { value: (typeof INQUIRY_VALUES)[number]; label: string }[] = [
  { value: "CLIENT", label: "Wellness Consultation" },
  { value: "PEPTIDE", label: "Peptide Therapy" },
  { value: "CORPORATE", label: "Executive Wellness" },
  { value: "RETREAT", label: "Retreats" },
  { value: "PHYSICIAN", label: "Physician Partnership" },
];

export const contactSchema = z.object({
  type: z.enum(INQUIRY_VALUES),
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional().or(z.literal("")),
  company: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
