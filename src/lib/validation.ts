import { z } from "zod";
import { AESTHETIC_SERVICES } from "@/lib/service-catalog";

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

const SERVICE_VALUES = AESTHETIC_SERVICES.map((s) => s.value) as [string, ...string[]];

export const bookingSchema = z.object({
  service: z.enum(SERVICE_VALUES),
  startsAt: z.string().min(1, "Please choose an appointment time."),
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a phone number."),
  address: z.string().trim().min(5, "Please enter the address we'll come to."),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export const membershipSchema = z.object({
  practice: z.string().trim().min(2, "Please select a partner practice."),
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type MembershipInput = z.infer<typeof membershipSchema>;
