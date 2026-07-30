import { cx } from "@/lib/utils";

export function PointList({
  items,
  tone = "ink",
}: {
  items: string[];
  tone?: "ink" | "paper";
}) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
          <span
            className={cx(
              "text-[0.95rem] leading-relaxed",
              tone === "ink" ? "text-ink/70" : "text-paper/70"
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
