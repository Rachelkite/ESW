"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { primaryNav } from "@/content/nav";
import { cx } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="flex h-24 items-center justify-between">
        <Logo tone="light" />

        <nav className="hidden items-center gap-9 lg:flex">
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-paper/85 transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4"
                    >
                      <div className="border border-paper/10 bg-ink/95 p-2 shadow-2xl backdrop-blur">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-[0.8rem] text-paper/75 transition-colors hover:bg-paper/5 hover:text-paper"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-paper/85 transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="outline-light">
            Begin Consultation
          </Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="block h-px w-6 bg-paper" />
          <span className="block h-px w-6 bg-paper" />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink"
          >
            <Container className="flex h-24 items-center justify-between">
              <Logo tone="light" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="relative h-10 w-10"
              >
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-paper" />
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-paper" />
              </button>
            </Container>
            <Container className="mt-4 flex flex-col gap-1">
              {primaryNav.map((item) => (
                <div key={item.href} className={cx("border-b border-paper/10 py-4")}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-2xl text-paper"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-3 flex flex-col gap-2 pl-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-paper/60"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-6">
                <Button href="/contact" variant="outline-light">
                  Begin Consultation
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
