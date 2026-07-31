import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Élevé Skin & Wellness (ESW) website and services.",
};

export default function TermsPage() {
  return (
    <section className="frame relative pt-32">
      <Container className="relative z-10 max-w-prose pb-28">
        <Eyebrow tone="paper" className="mb-5">
          Terms of Service
        </Eyebrow>
        <h1 className="font-serif text-[2rem] font-medium text-paper md:text-[2.4rem]">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-paper/45">Last updated July 2026.</p>

        <div className="mt-10 flex flex-col gap-8 text-[0.95rem] leading-relaxed text-paper/70">
          <p>
            These terms govern your use of the Élevé Skin &amp; Wellness
            (&ldquo;ESW&rdquo;) website and the services booked or ordered
            through it. By submitting a form, booking an appointment, or
            placing an order, you agree to these terms.
          </p>

          <div>
            <h2 className="font-serif text-xl text-paper">Our Services</h2>
            <p className="mt-3">
              ESW provides mobile aesthetics appointments (Botox, dermal
              filler, B-12 shots, and lipotropic shots) delivered at a
              client-provided location, physician-directed peptide protocols
              ordered through a separate order and pharmacy-fulfillment
              platform, and introductions to membership with partner
              physician practices. ESW coordinates these services; clinical
              care is directed by licensed physicians.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">Medical Disclaimer</h2>
            <p className="mt-3">
              Nothing on this site is medical advice, and no client-provider
              relationship is formed by submitting a form. All aesthetics and
              peptide services are subject to physician evaluation and
              candidacy requirements. Individual results vary. This site is
              not for medical emergencies — call 911 or go to the nearest
              emergency room.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">Appointments</h2>
            <p className="mt-3">
              Appointment times shown on Book are based on current provider
              availability and are not confirmed until you receive a
              confirmation email. Cancellation and rescheduling terms will be
              communicated at the time of booking.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">Peptide Orders</h2>
            <p className="mt-3">
              Peptide orders are placed, paid for, and fulfilled through a
              separate third-party platform. That platform&rsquo;s own terms
              govern payment, shipping, and returns for those orders.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">Limitation of Liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, ESW is not liable for
              indirect, incidental, or consequential damages arising from use
              of this site or the services described on it.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">Governing Law</h2>
            <p className="mt-3">These terms are governed by the laws of the State of Texas.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">Contact</h2>
            <p className="mt-3">
              Élevé Skin &amp; Wellness (ESW) — Plano, TX
              <br />
              <a href="tel:+14692685250" className="underline decoration-royal/40 underline-offset-4 hover:text-paper">
                (469) 268-5250
              </a>
            </p>
          </div>

          <p className="border-t border-paper/10 pt-8 text-xs text-paper/40">
            These terms are a general starting point and have not been
            reviewed by an attorney. Have them reviewed by qualified counsel
            before launch, particularly given the medical-adjacent services
            described here.
          </p>
        </div>
      </Container>
    </section>
  );
}
