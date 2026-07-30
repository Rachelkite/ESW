import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { cx } from "@/lib/utils";

export function SectionIntro({
  eyebrow,
  title,
  description,
  tone = "ink",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "ink" | "paper";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cx(align === "center" && "mx-auto text-center", className)}>
      <Eyebrow tone={tone === "ink" ? "royal" : "paper"} className="mb-4">
        {eyebrow}
      </Eyebrow>
      <h2
        className={cx(
          "max-w-2xl text-balance font-serif text-[2rem] font-medium leading-[1.15] md:text-[2.5rem]",
          tone === "ink" ? "text-ink" : "text-paper",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cx(
            "mt-5 max-w-xl text-[1rem] leading-relaxed",
            tone === "ink" ? "text-ink/60" : "text-paper/65",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
