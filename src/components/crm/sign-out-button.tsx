"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/portal/login" })}
      className="text-xs uppercase tracking-widest2 text-ink/45 transition-colors hover:text-ink"
    >
      Sign Out
    </button>
  );
}
