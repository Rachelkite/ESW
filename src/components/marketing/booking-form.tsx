"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingInput } from "@/lib/validation";
import { AESTHETIC_SERVICES } from "@/lib/service-catalog";
import { cx } from "@/lib/utils";

const inputClasses =
  "w-full border-b border-ink/20 bg-transparent py-3 text-[0.95rem] text-ink placeholder:text-ink/35 focus:border-royal focus:outline-none transition-colors";

type Slot = { startsAt: string; durationMin: number };

function groupSlotsByDay(slots: Slot[]) {
  const groups = new Map<string, Slot[]>();
  for (const slot of slots) {
    const day = new Date(slot.startsAt);
    const key = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    }).format(day);
    groups.set(key, [...(groups.get(key) ?? []), slot]);
  }
  return groups;
}

function formatTime(iso: string) {
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(
    new Date(iso)
  );
}

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "conflict">(
    "idle"
  );
  const [slots, setSlots] = useState<Slot[] | null>(null);
  const [slotsLoading, setSlotsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: AESTHETIC_SERVICES[0].value,
      startsAt: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      notes: "",
    },
  });

  const service = watch("service");
  const startsAt = watch("startsAt");

  useEffect(() => {
    let cancelled = false;
    setSlotsLoading(true);
    setSlots(null);
    setValue("startsAt", "");

    fetch(`/api/availability?service=${encodeURIComponent(service)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setSlots(data.slots ?? []);
      })
      .catch(() => {
        if (!cancelled) setSlots([]);
      })
      .finally(() => {
        if (!cancelled) setSlotsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [service, setValue]);

  const grouped = useMemo(() => groupSlotsByDay(slots ?? []), [slots]);

  const onSubmit = async (data: BookingInput) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 409) {
        setStatus("conflict");
        return;
      }
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-ink/10 bg-paper p-10 text-center">
        <p className="font-serif text-xl text-ink">Confirmed.</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          Your appointment is booked. A confirmation has been sent to your
          email, and your provider will come directly to you at the address
          you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7" noValidate>
      <div>
        <label htmlFor="service" className="mb-2 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
          Service
        </label>
        <select id="service" {...register("service")} className={cx(inputClasses, "appearance-none")}>
          {AESTHETIC_SERVICES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <span className="mb-3 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
          Appointment Time
        </span>
        {slotsLoading && <p className="text-sm text-ink/45">Loading available times…</p>}
        {!slotsLoading && grouped.size === 0 && (
          <p className="text-sm text-ink/45">
            No open times in the next two weeks — please reach out to your concierge directly.
          </p>
        )}
        <div className="flex max-h-72 flex-col gap-5 overflow-y-auto pr-1">
          {Array.from(grouped.entries()).map(([day, daySlots]) => (
            <div key={day}>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest2 text-ink/50">{day}</p>
              <div className="flex flex-wrap gap-2">
                {daySlots.map((slot) => (
                  <button
                    key={slot.startsAt}
                    type="button"
                    onClick={() => setValue("startsAt", slot.startsAt, { shouldValidate: true })}
                    className={cx(
                      "rounded-[2px] border px-3.5 py-2 text-sm transition-colors",
                      startsAt === slot.startsAt
                        ? "border-royal bg-royal text-paper"
                        : "border-ink/15 text-ink/70 hover:border-royal/60"
                    )}
                  >
                    {formatTime(slot.startsAt)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        {errors.startsAt && <p className="mt-1.5 text-xs text-red-700">{errors.startsAt.message}</p>}
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

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
            Phone
          </label>
          <input id="phone" {...register("phone")} className={inputClasses} placeholder="(555) 123-4567" />
          {errors.phone && <p className="mt-1.5 text-xs text-red-700">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="address" className="mb-2 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
            Address We&rsquo;ll Come To
          </label>
          <input id="address" {...register("address")} className={inputClasses} placeholder="Home, office, or hotel address" />
          {errors.address && <p className="mt-1.5 text-xs text-red-700">{errors.address.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-2 block text-[0.7rem] uppercase tracking-widest2 text-ink/45">
          Notes <span className="text-ink/30">(optional)</span>
        </label>
        <textarea
          id="notes"
          rows={3}
          {...register("notes")}
          className={cx(inputClasses, "resize-none")}
          placeholder="Anything your provider should know before arriving."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-[2px] bg-royal px-8 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-paper transition-all duration-300 ease-signature hover:bg-royal-deep disabled:opacity-60"
      >
        {status === "submitting" ? "Booking…" : "Confirm Appointment"}
      </button>

      {status === "conflict" && (
        <p className="text-sm text-red-700">
          That time was just booked by someone else — please choose another.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong. Please try again, or contact your concierge directly.
        </p>
      )}
    </form>
  );
}
