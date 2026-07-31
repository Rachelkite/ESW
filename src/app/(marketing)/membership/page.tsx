import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Hero } from "@/components/marketing/hero";
import { SectionIntro } from "@/components/marketing/section-intro";
import { MembershipForm } from "@/components/marketing/membership-form";
import { partnerPractices, partnerPracticeNames } from "@/content/partners";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Élevé membership gives clients direct access to a select network of partner longevity and wellness practices, including The Ultimate Longevity Center.",
};

export default function MembershipPage() {
  return (
    <>
      <Hero
        eyebrow="Membership"
        title="Direct access to the practices behind your protocol."
        description="Élevé membership connects clients with a select network of partner physician practices — coordinated by your concierge, delivered by specialists who lead their field."
        primaryCta={{ label: "Apply for Membership", href: "#apply" }}
        photoCaption="Editorial — longevity center exterior, architectural"
      />

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionIntro
            eyebrow="Partner Practices"
            title="Who membership connects you with."
            description="Each partner is selected for clinical depth, not volume. Membership is coordinated entirely through your Élevé concierge."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {partnerPractices.map((practice, i) => (
              <Reveal
                key={practice.name}
                delay={i * 0.08}
                className="border border-ink/10 bg-white p-8"
              >
                <span className="h-px w-8 bg-royal block" />
                <h3 className="mt-5 font-serif text-xl text-ink">{practice.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{practice.focus}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="apply" className="bg-ink py-24 md:py-32">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionIntro
              eyebrow="Apply"
              title="Membership, coordinated by your concierge."
              description="Share a few details and your concierge will walk you through membership options with the partner practice you're interested in."
              tone="paper"
            />
          </div>
          <div className="rounded-[2px] bg-paper p-8 md:p-12">
            <MembershipForm practices={partnerPracticeNames} />
          </div>
        </Container>
      </section>
    </>
  );
}
