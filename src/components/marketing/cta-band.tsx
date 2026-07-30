import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaBand({
  eyebrow = "Begin",
  title,
  description,
  cta,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="frame py-28 md:py-36">
      <Container className="relative z-10 flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <span className="mb-5 text-[0.7rem] font-semibold uppercase tracking-widest2 text-royal">
            {eyebrow}
          </span>
          <h2 className="max-w-2xl text-balance font-serif text-[2.1rem] font-medium leading-[1.15] text-paper md:text-[2.75rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[1rem] leading-relaxed text-paper/65">
            {description}
          </p>
          <div className="mt-10">
            <Button href={cta.href} variant="solid">
              {cta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
