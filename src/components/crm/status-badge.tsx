import { cx } from "@/lib/utils";

const styles: Record<string, string> = {
  NEW: "bg-slate-100 text-slate-700",
  CONTACTED: "bg-amber-100 text-amber-800",
  QUALIFIED: "bg-teal-100 text-teal-800",
  SCHEDULED: "bg-royal-soft text-royal-deep",
  CLOSED_WON: "bg-emerald-100 text-emerald-800",
  CLOSED_LOST: "bg-stone-200 text-stone-600",
};

const labels: Record<string, string> = {
  NEW: "New",
  CONTACTED: "Contacted",
  QUALIFIED: "Qualified",
  SCHEDULED: "Scheduled",
  CLOSED_WON: "Closed — Won",
  CLOSED_LOST: "Closed — Lost",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[0.7rem] font-medium",
        styles[status] ?? "bg-slate-100 text-slate-700"
      )}
    >
      {labels[status] ?? status}
    </span>
  );
}
