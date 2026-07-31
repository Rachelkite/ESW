"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { membershipSchema, type MembershipInput } from "@/lib/validation";
import { cx } from "@/lib/utils";

const inputClasses =
  "w-full border-b border-ink/20 bg-transparent py-3 text-[0.95rem] text-ink placeholder:text-ink/35 focus:border-royal focus:outline-none transition-colors";

export function MembershipForm({
  practices,
  defaultPractice,
}: {
  practices: string[];
  defaultPractice?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MembershipInput>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      practice: defaultPractice ?? practices[0],
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: MembershipInput) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-ink/10 bg-paper p-10 text-center">
        <p className="font-serif text-xl text-ink">Thank you.</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          Your membership inquiry has been received. Your concierge will be
          in touch shortly with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7" noValidate>
      <div>
        <label htmlFor="practice" className="mb-2 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
          Partner Practice
        </label>
        <select id="practice" {...register("practice")} className={cx(inputClasses, "appearance-none")}>
          {practices.map((practice) => (
            <option key={practice} value={practice}>
              {practice}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
            Full Name
          </label>
          <input id="name" {...register("name")} className={inputClasses} placeholder="Jordan Blake" />
          {errors.name && <p className="mt-1.5 text-xs text-red-700">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
            Email
          </label>
          <input id="email" type="email" {...register("email")} className={inputClasses} placeholder="jordan@company.com" />
          {errors.email && <p className="mt-1.5 text-xs text-red-700">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
          Phone <span className="text-ink/30">(optional)</span>
        </label>
        <input id="phone" {...register("phone")} className={inputClasses} placeholder="(555) 123-4567" />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
          Message <span className="text-ink/30">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={cx(inputClasses, "resize-none")}
          placeholder="Share anything that will help your concierge prepare."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-[2px] bg-royal px-8 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-paper transition-all duration-300 ease-signature hover:bg-royal-deep disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Apply for Membership"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong. Please try again, or email us directly.
        </p>
      )}
    </form>
  );
}
