export function StatTile({
  label,
  value,
  meta,
}: {
  label: string;
  value: string | number;
  meta?: string;
}) {
  return (
    <div className="border border-ink/10 bg-white p-6">
      <span className="text-[0.68rem] uppercase tracking-widest2 text-ink/45">{label}</span>
      <div className="mt-3 font-serif text-3xl tabular-nums text-ink">{value}</div>
      {meta && <p className="mt-1.5 text-xs text-ink/45">{meta}</p>}
    </div>
  );
}
