import Link from "next/link";
import { cx } from "@/lib/utils";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link
      href="/"
      className={cx(
        "group flex flex-col leading-none",
        tone === "light" ? "text-paper" : "text-ink",
        className
      )}
      aria-label="Élevé Skin & Wellness (ESW) — Home"
    >
      <span className="flex items-baseline gap-2">
        <span className="font-serif text-[1.3rem] tracking-[0.02em]">Élevé</span>
        <span
          className={cx(
            "text-[0.62rem] font-semibold tracking-[0.15em]",
            tone === "light" ? "text-royal/80" : "text-royal"
          )}
        >
          ESW
        </span>
      </span>
      <span
        className={cx(
          "mt-0.5 text-[0.58rem] font-medium uppercase tracking-widest2",
          tone === "light" ? "text-paper/55" : "text-ink/50"
        )}
      >
        Skin &amp; Wellness
      </span>
    </Link>
  );
}
