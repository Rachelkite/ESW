import { cx } from "@/lib/utils";

const TONES = {
  onyx: "from-[#1b1c22] via-[#101115] to-[#0a0a0d]",
  royal: "from-[#26346f] via-[#171d3d] to-[#0a0a0d]",
  paper: "from-[#efeee8] via-[#e4e2d9] to-[#d8d5c8]",
} as const;

/**
 * Editorial placeholder for premium photography. Marks exactly what shot
 * belongs here so real photography can be dropped in before launch —
 * intentionally not a stock image.
 */
export function PhotoFrame({
  caption,
  tone = "onyx",
  ratio = "aspect-[4/5]",
  className,
}: {
  caption: string;
  tone?: keyof typeof TONES;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-[2px] bg-gradient-to-br",
        TONES[tone],
        ratio,
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
        <span
          className={cx(
            "text-[0.6rem] uppercase tracking-widest2",
            tone === "paper" ? "text-ink/40" : "text-paper/35"
          )}
        >
          {caption}
        </span>
        <span
          className={cx(
            "h-1.5 w-1.5 shrink-0 rounded-full",
            tone === "paper" ? "bg-ink/20" : "bg-paper/25"
          )}
        />
      </div>
    </div>
  );
}
