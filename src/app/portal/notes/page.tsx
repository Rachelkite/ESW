import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/crm/page-header";
import { NewNoteForm } from "@/components/crm/new-note-form";

export const dynamic = "force-dynamic";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export default async function NotesPage() {
  const [notes, leads] = await Promise.all([
    prisma.note.findMany({
      orderBy: { createdAt: "desc" },
      include: { lead: { select: { name: true, type: true } } },
      take: 100,
    }),
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true },
      take: 100,
    }),
  ]);

  return (
    <>
      <PageHeader
        title="Notes"
        description="Internal notes attached to client, physician, and retreat inquiries."
      />
      <NewNoteForm leads={leads} />
      {notes.length === 0 ? (
        <div className="border border-dashed border-ink/15 bg-white/50 py-16 text-center text-sm text-ink/45">
          No notes yet.
        </div>
      ) : (
        <ul className="divide-y divide-ink/5 border border-ink/10 bg-white">
          {notes.map((note) => (
            <li key={note.id} className="px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-ink">{note.lead.name}</span>
                <span className="tabular-nums text-xs text-ink/40">{formatDate(note.createdAt)}</span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{note.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
