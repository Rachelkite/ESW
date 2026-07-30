import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Hero } from "@/components/marketing/hero";
import { SectionIntro } from "@/components/marketing/section-intro";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Physician Partners",
  description:
    "An exclusive partnership for physicians — Élevé handles concierge coordination and patient experience; you handle the clinical care.",
};

const handles = [
  "Concierge coordination and scheduling for every referred client.",
  "A consistent, elevated patient experience from first inquiry onward.",
  "Brand presentation that reflects the caliber of your practice.",
];

const staysWithYou = [
  "All clinical decisions, diagnosis, and treatment.",
  "The physician-patient relationship, in full.",
  "Your existing practice, systems, and standards of care.",
];

export default function PhysicianPartnersPage() {
  return (
    <>
      <Hero
        eyebrow="Physician Partners"
        title="A partnership built to elevate, not dilute."
        description="Élevé works with a limited number of physicians in each market — extending a concierge experience to your patients while you remain focused entirely on clinical care."
        primaryCta={{ label: "Inquire About Partnership", href: "#inquire" }}
        photoCaption="Editorial — modern clinical interior"
      />

      <section className="bg-paper py-24 md:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionIntro
              eyebrow="Why Physicians Partner With Élevé"
              title="Your clinical expertise, our concierge standard."
              description="Élevé clients arrive already oriented, informed, and committed — the coordination, expectation-setting, and experience design happen before they reach you. What remains is the part only you can do: clinical care."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PhotoFrame
              caption="Editorial — physician portrait, confident"
              tone="royal"
              ratio="aspect-[4/5]"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <Container className="grid gap-10 md:grid-cols-2">
          <Reveal className="border-t border-paper/15 pt-8">
            <h3 className="font-serif text-xl text-paper">What Élevé Handles</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {handles.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
                  <span className="text-[0.95rem] leading-relaxed text-paper/65">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="border-t border-paper/15 pt-8">
            <h3 className="font-serif text-xl text-paper">What Stays With You</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {staysWithYou.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
                  <span className="text-[0.95rem] leading-relaxed text-paper/65">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section id="inquire" className="frame-light py-28 md:py-36">
        <Container className="flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center">
            <span className="mb-5 text-[0.7rem] font-semibold uppercase tracking-widest2 text-royal">
              Partnership
            </span>
            <h2 className="max-w-xl text-balance font-serif text-[2.1rem] font-medium leading-[1.15] text-ink md:text-[2.6rem]">
              We work with a select group of physicians per market.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[1rem] leading-relaxed text-ink/60">
              If that&rsquo;s a fit for your practice, we&rsquo;d welcome the
              conversation.
            </p>
            <div className="mt-10">
              <Button href="/contact?type=physician" variant="outline-dark">
                Inquire About Partnership
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
