import type { Lead } from "@prisma/client";
import { StatusBadge } from "@/components/crm/status-badge";
import { serviceLabel } from "@/lib/service-catalog";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function LeadTable({ leads }: { leads: Lead[] }) {
  if (leads.length === 0) {
    return (
      <div className="border border-dashed border-ink/15 bg-white/50 py-16 text-center text-sm text-ink/45">
        No inquiries yet in this pipeline.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-ink/10 bg-white">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-ink/10">
            <th className="px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-widest2 text-ink/45">Name</th>
            <th className="px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-widest2 text-ink/45">Contact</th>
            <th className="px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-widest2 text-ink/45">Company</th>
            <th className="px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-widest2 text-ink/45">Appointment</th>
            <th className="px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-widest2 text-ink/45">Status</th>
            <th className="px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-widest2 text-ink/45">Received</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b border-ink/5 last:border-0 hover:bg-paper/60">
              <td className="px-5 py-4 font-medium text-ink">{lead.name}</td>
              <td className="px-5 py-4 text-ink/60">
                <div>{lead.email}</div>
                {lead.phone && <div className="text-xs text-ink/40">{lead.phone}</div>}
              </td>
              <td className="px-5 py-4 text-ink/60">{lead.company ?? "—"}</td>
              <td className="px-5 py-4 text-ink/60">
                {lead.scheduledAt ? (
                  <>
                    <div>{formatDateTime(lead.scheduledAt)}</div>
                    {lead.service && (
                      <div className="text-xs text-ink/40">{serviceLabel(lead.service)}</div>
                    )}
                  </>
                ) : (
                  "—"
                )}
              </td>
              <td className="px-5 py-4">
                <StatusBadge status={lead.status} />
              </td>
              <td className="px-5 py-4 tabular-nums text-ink/50">{formatDate(lead.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
