"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password.");
      return;
    }

    router.push("/portal/dashboard");
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="email" className="mb-2 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-b border-ink/20 bg-transparent py-3 text-[0.95rem] text-ink focus:border-royal focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-b border-ink/20 bg-transparent py-3 text-[0.95rem] text-ink focus:border-royal focus:outline-none"
        />
      </div>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="mt-2 inline-flex items-center justify-center rounded-[2px] bg-royal px-8 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-paper transition-all hover:bg-royal-deep disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}
