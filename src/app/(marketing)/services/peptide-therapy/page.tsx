import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionIntro } from "@/components/marketing/section-intro";
import { PointList } from "@/components/marketing/point-list";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Button } from "@/components/ui/button";
import { ServiceShell } from "@/components/marketing/service-shell";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Peptide Therapy",
  description:
    "Physician-directed peptide therapy for longevity, recovery, and performance — explained plainly, delivered through the Élevé concierge.",
};

const categories = [
  {
    title: "Longevity",
    body: "Protocols oriented around cellular health and long-term vitality.",
  },
  {
    title: "Recovery",
    body: "Supporting the body's repair processes after physical strain or injury.",
  },
  {
    title: "Performance",
    body: "Supporting energy, focus, and physical output for demanding lives.",
  },
  {
    title: "Weight Management",
    body: "Physician-guided approaches to sustainable metabolic health.",
  },
];

export default function PeptideTherapyPage() {
  return (
    <ServiceShell
      eyebrow="Services · Peptide Therapy"
      title="Peptide therapy, explained plainly."
      description="Peptides are one of the most misunderstood tools in modern wellness. At Élevé, they are offered the way they should be — through physician guidance, with clarity about what they are and aren't."
      heroCaption="Editorial — physician consultation, natural light"
      cta={{ label: "Shop Peptides", href: "/shop" }}
      ctaTitle="Ready to order your protocol?"
      ctaDescription="Order directly, or talk to a concierge first — either way, a licensed physician directs your protocol before it ships."
    >
      <section className="bg-paper py-24 md:py-32">
        <Container className="grid items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionIntro
              eyebrow="What Peptides Are"
              title="Precise biological signals, not a shortcut."
              description="Peptides are short chains of amino acids that occur naturally in the body, where they help regulate processes like tissue repair, metabolism, and inflammation. Therapeutic peptides are used to support and direct those same processes."
              className="mb-8"
            />
            <p className="max-w-prose text-[0.95rem] leading-relaxed text-ink/65">
              Élevé sells peptide protocols directly, with every order
              reviewed and directed by a licensed physician — never a
              one-size-fits-all program. Orders ship straight from the
              pharmacy to you.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <PhotoFrame
              caption="Editorial — peptide diagnostics, clinical minimal"
              tone="royal"
              ratio="aspect-[4/5]"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <Container>
          <SectionIntro
            eyebrow="Areas of Use"
            title="Where peptide therapy is applied."
            tone="paper"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2px] bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06} className="bg-ink p-8">
                <span className="h-px w-8 bg-royal block" />
                <h3 className="mt-5 font-serif text-lg text-paper">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/55">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionIntro
              eyebrow="How It Works"
              title="Guided from the first conversation."
            />
            <div className="mt-8">
              <PointList
                items={[
                  "Choose your protocol and complete secure checkout.",
                  "Physician evaluation to determine candidacy and the right protocol.",
                  "Your order ships directly from the pharmacy to you.",
                ]}
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/shop" variant="solid">
                Shop Peptides
              </Button>
              <Button href="/contact?type=peptide" variant="outline-dark">
                Talk to a Concierge First
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <PhotoFrame
              caption="Editorial — recovery suite, low light"
              tone="onyx"
              ratio="aspect-[4/5]"
            />
          </Reveal>
        </Container>
      </section>
    </ServiceShell>
  );
}
