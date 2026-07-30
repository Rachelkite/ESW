import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { cx } from "@/lib/utils";

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  photoCaption,
  size = "tall",
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  photoCaption: string;
  size?: "tall" | "regular";
}) {
  return (
    <section className={cx("frame relative flex items-end", size === "tall" ? "min-h-[92vh]" : "min-h-[64vh]")}>
      <div className="absolute inset-0">
        <PhotoFrame
          caption={photoCaption}
          tone="royal"
          ratio="h-full"
          className="h-full w-full opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
      </div>

      <Container className="relative z-10 pb-20 pt-40 md:pb-28">
        <Eyebrow tone="paper" className="mb-6">
          {eyebrow}
        </Eyebrow>
        <h1 className="max-w-3xl text-balance font-serif text-[2.6rem] font-medium leading-[1.05] text-paper md:text-[3.6rem]">
          {title}
        </h1>
        <p className="mt-7 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-paper/70">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <Button href={primaryCta.href} variant="solid">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="outline-light">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
