import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Hero } from "@/components/marketing/hero";
import { SectionIntro } from "@/components/marketing/section-intro";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { CtaBand } from "@/components/marketing/cta-band";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Peptide therapy, aesthetics, hormone and longevity optimization, and recovery — each delivered as a physician-guided, concierge experience.",
};

const services = [
  {
    title: "Peptide Therapy",
    line: "Physician-directed protocols for longevity, recovery, and performance.",
    href: "/services/peptide-therapy",
    caption: "Editorial — peptide vial and syringe, still life, natural light",
  },
  {
    title: "Aesthetics",
    line: "Botox, fillers, and skin rejuvenation as confidence, not vanity.",
    href: "/services/aesthetics",
    caption: "Editorial — Botox treatment at client's home, soft daylight",
  },
  {
    title: "Hormone & Longevity",
    line: "Optimization built around your biology, informed by real diagnostics.",
    href: "/services/longevity",
    caption: "Editorial — diagnostics kit, still life, clinical minimal",
  },
  {
    title: "Recovery & Performance",
    line: "Structured recovery protocols for sustained physical output.",
    href: "/services/recovery",
    caption: "Editorial — private recovery space, low light",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Four disciplines. One concierge standard."
        description="Every service at Élevé is directed by a licensed physician and delivered through a single point of contact — your concierge."
        primaryCta={{ label: "Begin Your Consultation", href: "/contact" }}
        photoCaption="Editorial — private residence interior, evening"
        size="regular"
      />

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionIntro
            eyebrow="Choose a Discipline"
            title="Each service, given its own careful attention."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={i * 0.06}>
                <Link href={s.href} className="group block">
                  <PhotoFrame caption={s.caption} tone="onyx" ratio="aspect-[4/3]" />
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink/55">
                        {s.line}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 text-royal transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not sure where to begin?"
        description="A single consultation is enough to map the right path across every discipline."
        cta={{ label: "Begin Your Consultation", href: "/contact" }}
      />
    </>
  );
}
