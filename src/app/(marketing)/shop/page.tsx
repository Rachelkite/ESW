import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Hero } from "@/components/marketing/hero";
import { SectionIntro } from "@/components/marketing/section-intro";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PEPTIDE_ORDER_URL } from "@/content/external-links";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Shop Peptides",
  description:
    "Order physician-directed peptide protocols from Élevé — secure payment and pharmacy fulfillment, shipped directly to you.",
};

export default function ShopPage() {
  return (
    <>
      <Hero
        eyebrow="The Élevé Peptide Shop"
        title="Precision protocols. Delivered to your door."
        description="Every protocol is reviewed by a licensed physician before it ships — ordered in minutes, fulfilled by the pharmacy, delivered to you."
        primaryCta={{ label: "Begin Your Order", href: PEPTIDE_ORDER_URL }}
        secondaryCta={{ label: "Talk to a Concierge First", href: "/contact?type=peptide" }}
        photoCaption="Editorial — peptide vials, still life"
      />

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionIntro
            eyebrow="The Catalog"
            title="Choose your protocol."
            description="Every order is reviewed by a licensed physician before it ships. Pricing and availability are confirmed at checkout."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2px] bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <Reveal
                key={product.name}
                delay={i * 0.05}
                className="flex flex-col justify-between bg-white p-7"
              >
                <div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-widest2 text-royal">
                    {product.category}
                  </span>
                  <h3 className="mt-3 font-serif text-xl text-ink">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{product.description}</p>
                </div>
                <a
                  href={PEPTIDE_ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-royal transition-colors hover:text-royal-deep"
                >
                  Order This Protocol <span aria-hidden>&rarr;</span>
                </a>
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
              Begin Your Order
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
