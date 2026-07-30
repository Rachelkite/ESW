import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().trim().min(2, "Please enter a task title."),
  dueAt: z.string().optional().or(z.literal("")),
  leadId: z.string().optional().or(z.literal("")),
});

export type TaskInput = z.infer<typeof taskSchema>;

export const noteSchema = z.object({
  leadId: z.string().min(1, "Please select a lead."),
  body: z.string().trim().min(2, "Please enter a note."),
});

export type NoteInput = z.infer<typeof noteSchema>;
