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
      aria-label="Élevé Skin & Wellness — Home"
    >
      <span className="font-serif text-[1.3rem] tracking-[0.02em]">Élevé</span>
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
