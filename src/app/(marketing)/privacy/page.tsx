import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Élevé Skin & Wellness (ESW) collects, uses, and protects client information.",
};

export default function PrivacyPage() {
  return (
    <section className="frame relative pt-32">
      <Container className="relative z-10 max-w-prose pb-28">
        <Eyebrow tone="paper" className="mb-5">
          Privacy Policy
        </Eyebrow>
        <h1 className="font-serif text-[2rem] font-medium text-paper md:text-[2.4rem]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-paper/45">Last updated July 2026.</p>

        <div className="mt-10 flex flex-col gap-8 text-[0.95rem] leading-relaxed text-paper/70">
          <p>
            Élevé Skin &amp; Wellness (&ldquo;ESW,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us&rdquo;) is a mobile aesthetics, peptide, and physician
            membership business based in Plano, TX. This policy describes what
            information we collect through this website and how it is used.
          </p>

          <div>
            <h2 className="font-serif text-xl text-paper">Information We Collect</h2>
            <p className="mt-3">
              When you submit the Concierge Inquiry, Book an Appointment, or
              Membership Application forms, we collect the information you
              provide directly: your name, email, phone number, and — for
              appointment bookings — the service address where your provider
              will meet you, along with any notes you choose to share.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">How Information Is Used</h2>
            <p className="mt-3">
              Submissions are stored in our internal client system so our
              concierge team can respond, schedule, and follow up. We send
              transactional emails (confirmations and internal notifications)
              through our email provider, Resend. We do not sell client
              information, and we do not use third-party advertising trackers
              on this site.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">Peptide Orders</h2>
            <p className="mt-3">
              Peptide orders placed through Shop are processed on a separate,
              third-party order and pharmacy-fulfillment platform. Payment and
              shipping information you provide there is handled under that
              platform&rsquo;s own privacy policy, not this one.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">Data Retention &amp; Security</h2>
            <p className="mt-3">
              We retain client and inquiry records for as long as needed to
              provide services and maintain business records, and we take
              reasonable technical measures to protect stored information.
              No method of electronic storage is perfectly secure.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-paper">Your Choices</h2>
            <p className="mt-3">
              To access, correct, or request deletion of information you have
              submitted to us, contact us using the details below.
            </p>
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
            This policy is a general starting point and has not been reviewed
            by an attorney. If your services involve protected health
            information, have this reviewed by qualified counsel before
            launch to confirm it meets all applicable requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}
