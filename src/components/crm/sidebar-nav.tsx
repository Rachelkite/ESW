"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { crmNav } from "@/content/crm-nav";
import { cx } from "@/lib/utils";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-0.5">
      {crmNav.map((item) => {
        const active = pathname === item.href || pathname?.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cx(
              "rounded-[2px] px-3 py-2.5 text-sm transition-colors",
              active
                ? "bg-royal-soft text-royal-deep font-medium"
                : "text-ink/60 hover:bg-ink/5 hover:text-ink"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
