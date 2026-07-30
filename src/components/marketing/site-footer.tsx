import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { footerNav } from "@/content/nav";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="grid gap-16 py-20 md:grid-cols-[1.2fr_2fr]">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/55">
              A private concierge for advanced wellness — aesthetics, longevity,
              and executive performance, curated.
            </p>
          </div>
          <p className="font-serif text-lg italic text-paper/70">
            Your Health. Elevated.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[0.68rem] font-semibold uppercase tracking-widest2 text-paper/40">
                {col.heading}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="flex flex-col items-start justify-between gap-4 py-6 text-xs text-paper/35 sm:flex-row sm:items-center">
          <span>&copy; {new Date().getFullYear()} Élevé Skin &amp; Wellness. All rights reserved.</span>
          <span>Concierge inquiries handled with discretion.</span>
        </Container>
      </div>
    </footer>
  );
}
