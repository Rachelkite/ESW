import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Hero } from "@/components/marketing/hero";
import { SectionIntro } from "@/components/marketing/section-intro";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PEPTIDE_ORDER_URL } from "@/content/external-links";

export const metadata: Metadata = {
  title: "Shop Peptides",
  description:
    "Order physician-directed peptide protocols from Élevé — secure payment and pharmacy fulfillment, shipped directly to you.",
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

export default function ShopPage() {
  return (
    <>
      <Hero
        eyebrow="Shop Peptides"
        title="Order your protocol, shipped directly to you."
        description="Every peptide protocol at Élevé is physician-directed. Ordering, payment, and pharmacy fulfillment are handled through our secure order system — shipped straight from the pharmacy to your door."
        primaryCta={{ label: "Begin Your Peptide Order", href: PEPTIDE_ORDER_URL }}
        secondaryCta={{ label: "Talk to a Concierge First", href: "/contact?type=peptide" }}
        photoCaption="Editorial — peptide vials, still life"
      />

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionIntro
            eyebrow="Areas of Use"
            title="Where peptide therapy is applied."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2px] bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06} className="bg-white p-8">
                <span className="h-px w-8 bg-royal block" />
                <h3 className="mt-5 font-serif text-lg text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <Container className="flex flex-col items-center text-center">
          <SectionIntro
            eyebrow="How Ordering Works"
            title="Physician-directed, from order to delivery."
            tone="paper"
            align="center"
          />
          <ol className="mt-10 grid max-w-3xl gap-6 text-left sm:grid-cols-3">
            <li className="border-t border-paper/15 pt-5">
              <span className="text-xs font-semibold uppercase tracking-widest2 text-royal">01</span>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                Choose your protocol and complete secure checkout.
              </p>
            </li>
            <li className="border-t border-paper/15 pt-5">
              <span className="text-xs font-semibold uppercase tracking-widest2 text-royal">02</span>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                A licensed physician reviews and directs your protocol.
              </p>
            </li>
            <li className="border-t border-paper/15 pt-5">
              <span className="text-xs font-semibold uppercase tracking-widest2 text-royal">03</span>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                Your order ships directly from the pharmacy to you.
              </p>
            </li>
          </ol>
          <div className="mt-12">
            <Button href={PEPTIDE_ORDER_URL} variant="solid">
              Begin Your Peptide Order
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
