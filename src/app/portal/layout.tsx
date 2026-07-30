import type { Metadata } from "next";
import { Logo } from "@/components/ui/logo";
import { SidebarNav } from "@/components/crm/sidebar-nav";
import { SignOutButton } from "@/components/crm/sign-out-button";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    return <div className="min-h-screen bg-paper">{children}</div>;
  }

  return (
    <div className="flex min-h-screen bg-paper text-ink">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-ink/10 bg-white px-5 py-8 lg:flex">
        <Logo tone="dark" className="px-3" />
        <div className="mt-10 flex-1">
          <SidebarNav />
        </div>
        <div className="flex flex-col gap-2 border-t border-ink/10 px-3 pt-5">
          <span className="truncate text-xs text-ink/45" title={session.user?.email ?? ""}>
            {session.user?.email}
          </span>
          <SignOutButton />
        </div>
      </aside>
      <div className="flex-1">
        <main className="mx-auto max-w-6xl px-6 py-10 md:px-10">{children}</main>
      </div>
    </div>
  );
}
