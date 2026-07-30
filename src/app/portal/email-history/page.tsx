import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/crm/page-header";

export const dynamic = "force-dynamic";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export default async function EmailHistoryPage() {
  const entries = await prisma.emailLogEntry.findMany({
    orderBy: { createdAt: "desc" },
    include: { lead: { select: { name: true } } },
    take: 200,
  });

  return (
    <>
      <PageHeader
        title="Email History"
        description="Every concierge and confirmation email logged automatically as inquiries arrive."
      />
      {entries.length === 0 ? (
        <div className="border border-dashed border-ink/15 bg-white/50 py-16 text-center text-sm text-ink/45">
          No email activity yet.
        </div>
      ) : (
        <ul className="divide-y divide-ink/5 border border-ink/10 bg-white">
          {entries.map((entry) => (
            <li key={entry.id} className="flex items-center justify-between gap-4 px-5 py-4">
              <div>
                <p className="text-sm font-medium text-ink">{entry.subject}</p>
                <p className="text-xs text-ink/45">
                  {entry.lead.name} · {entry.direction}
                </p>
              </div>
              <span className="tabular-nums text-xs text-ink/40">{formatDate(entry.createdAt)}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
