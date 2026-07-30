export function BarBreakdown({
  data,
}: {
  data: { label: string; value: number }[];
}) {
  const max = Math.max(1, ...data.map((d) => d.value));

  return (
    <div className="flex flex-col gap-4">
      {data.map((d) => (
        <div key={d.label} className="flex items-center gap-4">
          <span className="w-36 shrink-0 text-sm text-ink/60">{d.label}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink/5">
            <div
              className="h-full rounded-full bg-royal"
              style={{ width: `${(d.value / max) * 100}%` }}
            />
          </div>
          <span className="w-8 shrink-0 text-right text-sm tabular-nums text-ink/70">{d.value}</span>
        </div>
      ))}
    </div>
  );
}
