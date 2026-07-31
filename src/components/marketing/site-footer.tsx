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
              Mobile aesthetics, peptide protocols, and physician membership
              access — delivered to you, based in Plano, TX.
            </p>
            <p className="mt-4 text-sm text-paper/55">
              <a href="tel:+14692685250" className="transition-colors hover:text-paper">
                (469) 268-5250
              </a>
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
          <span>&copy; {new Date().getFullYear()} Élevé Skin &amp; Wellness (ESW). All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-paper/60">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-paper/60">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
