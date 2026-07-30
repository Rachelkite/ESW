"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function NewTaskForm({ leads }: { leads: { id: string; name: string }[] }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [dueAt, setDueAt] = useState("");
  const [leadId, setLeadId] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setSubmitting(true);
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, dueAt: dueAt || undefined, leadId: leadId || undefined }),
    });
    setTitle("");
    setDueAt("");
    setLeadId("");
    setSubmitting(false);
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} className="mb-6 flex flex-wrap items-end gap-3 border border-ink/10 bg-white p-5">
      <div className="min-w-[220px] flex-1">
        <label className="mb-1.5 block text-[0.65rem] uppercase tracking-widest2 text-ink/45">Task</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Follow up with new peptide inquiry"
          className="w-full border-b border-ink/20 bg-transparent py-2 text-sm focus:border-royal focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-[0.65rem] uppercase tracking-widest2 text-ink/45">Due</label>
        <input
          type="date"
          value={dueAt}
          onChange={(e) => setDueAt(e.target.value)}
          className="border-b border-ink/20 bg-transparent py-2 text-sm focus:border-royal focus:outline-none"
        />
      </div>
      <div className="min-w-[160px]">
        <label className="mb-1.5 block text-[0.65rem] uppercase tracking-widest2 text-ink/45">Related Lead</label>
        <select
          value={leadId}
          onChange={(e) => setLeadId(e.target.value)}
          className="w-full border-b border-ink/20 bg-transparent py-2 text-sm focus:border-royal focus:outline-none"
        >
          <option value="">None</option>
          {leads.map((lead) => (
            <option key={lead.id} value={lead.id}>
              {lead.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="rounded-[2px] bg-royal px-5 py-2.5 text-xs font-medium uppercase tracking-widest2 text-paper transition-colors hover:bg-royal-deep disabled:opacity-60"
      >
        Add Task
      </button>
    </form>
  );
}
