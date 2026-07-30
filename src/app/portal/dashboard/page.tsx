import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/crm/page-header";
import { StatTile } from "@/components/crm/stat-tile";
import { BarBreakdown } from "@/components/crm/bar-breakdown";
import { StatusBadge } from "@/components/crm/status-badge";

export const dynamic = "force-dynamic";

const typeLabels: Record<string, string> = {
  CLIENT: "Client",
  PEPTIDE: "Peptide",
  CORPORATE: "Corporate",
  RETREAT: "Retreat",
  PHYSICIAN: "Physician",
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date);
}

export default async function DashboardPage() {
  const [totalLeads, openTasks, byType, recentLeads] = await Promise.all([
    prisma.lead.count(),
    prisma.task.count({ where: { done: false } }),
    prisma.lead.groupBy({ by: ["type"], _count: { _all: true } }),
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 8 }),
  ]);

  const newThisWeek = await prisma.lead.count({
    where: { createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
  });

  const breakdown = Object.entries(typeLabels).map(([value, label]) => ({
    label,
    value: byType.find((t) => t.type === value)?._count._all ?? 0,
  }));

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="A live view of the Élevé concierge pipeline."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile label="Total Inquiries" value={totalLeads} />
        <StatTile label="New This Week" value={newThisWeek} />
        <StatTile label="Open Tasks" value={openTasks} />
        <StatTile label="Pipelines Tracked" value={5} meta="Physician, Corporate, Client, Peptide, Retreat" />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="border border-ink/10 bg-white p-6">
          <h2 className="mb-6 font-serif text-lg text-ink">Inquiries by Pipeline</h2>
          <BarBreakdown data={breakdown} />
        </div>

        <div className="border border-ink/10 bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-lg text-ink">Recent Inquiries</h2>
            <Link href="/portal/leads/client" className="text-xs uppercase tracking-widest2 text-royal">
              View All
            </Link>
          </div>
          {recentLeads.length === 0 ? (
            <p className="text-sm text-ink/45">No inquiries yet.</p>
          ) : (
            <ul className="divide-y divide-ink/5">
              {recentLeads.map((lead) => (
                <li key={lead.id} className="flex items-center justify-between gap-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-ink">{lead.name}</p>
                    <p className="text-xs text-ink/45">{typeLabels[lead.type]}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={lead.status} />
                    <span className="tabular-nums text-xs text-ink/40">
                      {formatDate(lead.createdAt)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
