import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Hero } from "@/components/marketing/hero";
import { SectionIntro } from "@/components/marketing/section-intro";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { CtaBand } from "@/components/marketing/cta-band";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Élevé Skin & Wellness — what we believe about wellness, who we serve, and how the concierge model works.",
};

const beliefs = [
  {
    title: "We come to you",
    body: "Aesthetics shouldn't require a waiting room. Your provider brings the visit to your home, office, or hotel.",
  },
  {
    title: "Selective, by design",
    body: "We would rather serve fewer clients exceptionally than many adequately. That shapes every partnership we form.",
  },
  {
    title: "Physicians lead, always",
    body: "Every protocol, from aesthetics to peptide therapy, is directed by a licensed physician — never a sales team.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Élevé"
        title="A point of view on wellness, not a brochure."
        description="Élevé Skin & Wellness exists on a simple premise: advanced wellness should come to you. We deliver aesthetics at your location, ship peptide protocols directly, and connect clients with membership access to partner longevity practices."
        primaryCta={{ label: "Begin Your Consultation", href: "/contact" }}
        photoCaption="Editorial — luxury interior, architectural"
        size="regular"
      />

      <section className="bg-paper py-24 md:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionIntro
              eyebrow="Philosophy"
              title="Wellness is not a purchase. It's a relationship."
              description="Most people encounter advanced wellness — peptides, hormone optimization, aesthetics, executive recovery — as a series of disconnected purchases from disconnected providers. Élevé exists to make it one relationship instead: a single concierge, a network of vetted physicians, and a standard that doesn't waver by category."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PhotoFrame
              caption="Editorial — quiet interior, morning"
              tone="onyx"
              ratio="aspect-[4/5]"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <Container>
          <SectionIntro eyebrow="What We Believe" title="Principles that don't change." tone="paper" />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2px] bg-paper/10 md:grid-cols-3">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08} className="bg-ink p-8">
                <span className="h-px w-8 bg-royal block" />
                <h3 className="mt-5 font-serif text-lg text-paper">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/55">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container className="max-w-2xl">
          <Reveal>
            <SectionIntro eyebrow="Who We Serve" title="Clients who don't leave it to chance." />
            <p className="mt-6 max-w-prose text-[0.98rem] leading-relaxed text-ink/65">
              Some come to Élevé for peptide therapy or aesthetics. Others for
              executive wellness, or a retreat unlike anything on a
              conference calendar. What they share is a refusal to treat
              their health as an afterthought — and a preference for having
              someone capable manage the details.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="If this sounds like the way you think about your health, let's talk."
        description="A private consultation is the only step required to begin."
        cta={{ label: "Begin Your Consultation", href: "/contact" }}
      />
    </>
  );
}
