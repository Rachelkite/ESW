"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function NewNoteForm({ leads }: { leads: { id: string; name: string }[] }) {
  const router = useRouter();
  const [leadId, setLeadId] = useState(leads[0]?.id ?? "");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim() || !leadId) return;
    setSubmitting(true);
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ leadId, body }),
    });
    setBody("");
    setSubmitting(false);
    router.refresh();
  };

  if (leads.length === 0) {
    return (
      <p className="mb-6 text-sm text-ink/45">
        Notes can be added once there is at least one inquiry in the pipeline.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mb-6 flex flex-col gap-3 border border-ink/10 bg-white p-5">
      <div className="flex flex-wrap items-end gap-3">
        <div className="min-w-[200px]">
          <label className="mb-1.5 block text-[0.65rem] uppercase tracking-widest2 text-ink/45">Lead</label>
          <select
            value={leadId}
            onChange={(e) => setLeadId(e.target.value)}
            className="w-full border-b border-ink/20 bg-transparent py-2 text-sm focus:border-royal focus:outline-none"
          >
            {leads.map((lead) => (
              <option key={lead.id} value={lead.id}>
                {lead.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={2}
        placeholder="Add a note about this inquiry…"
        className="w-full resize-none border-b border-ink/20 bg-transparent py-2 text-sm focus:border-royal focus:outline-none"
      />
      <button
        type="submit"
        disabled={submitting}
        className="self-start rounded-[2px] bg-royal px-5 py-2.5 text-xs font-medium uppercase tracking-widest2 text-paper transition-colors hover:bg-royal-deep disabled:opacity-60"
      >
        Add Note
      </button>
    </form>
  );
}
