import { cx } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "royal",
  className,
}: {
  children: React.ReactNode;
  tone?: "royal" | "paper" | "ink";
  className?: string;
}) {
  const tones = {
    royal: "text-royal",
    paper: "text-paper/70",
    ink: "text-ink/60",
  };
  return (
    <span
      className={cx(
        "block text-[0.7rem] font-semibold uppercase tracking-widest2",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
