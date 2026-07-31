import { prisma } from "@/lib/prisma";
import { serviceDurationMin } from "@/lib/service-catalog";

const SLOT_GRANULARITY_MIN = 30;
const DAYS_AHEAD = 14;

export type Slot = { startsAt: Date; durationMin: number };

function startOfDayPlusMinutes(day: Date, minutesFromMidnight: number) {
  const result = new Date(day);
  result.setHours(Math.floor(minutesFromMidnight / 60), minutesFromMidnight % 60, 0, 0);
  return result;
}

/** Open appointment slots for a given service over the next two weeks. */
export async function getAvailableSlots(service: string): Promise<Slot[]> {
  const durationMin = serviceDurationMin(service);
  const windows = await prisma.availabilityWindow.findMany({ where: { active: true } });
  if (windows.length === 0) return [];

  const now = new Date();
  const rangeEnd = new Date(now);
  rangeEnd.setDate(rangeEnd.getDate() + DAYS_AHEAD);

  const existing = await prisma.lead.findMany({
    where: {
      type: "BOOKING",
      scheduledAt: { gte: now, lte: rangeEnd },
      status: { not: "CLOSED_LOST" },
    },
    select: { scheduledAt: true, durationMin: true },
  });

  const busy = existing
    .filter((b) => b.scheduledAt)
    .map((b) => {
      const start = b.scheduledAt as Date;
      return { start, end: new Date(start.getTime() + (b.durationMin ?? 30) * 60000) };
    });

  const slots: Slot[] = [];

  for (let dayOffset = 0; dayOffset < DAYS_AHEAD; dayOffset++) {
    const day = new Date(now);
    day.setDate(day.getDate() + dayOffset);
    const dayOfWeek = day.getDay();

    for (const window of windows.filter((w) => w.dayOfWeek === dayOfWeek)) {
      for (
        let minutes = window.startMin;
        minutes + durationMin <= window.endMin;
        minutes += SLOT_GRANULARITY_MIN
      ) {
        const startsAt = startOfDayPlusMinutes(day, minutes);
        if (startsAt <= now) continue;

        const endsAt = new Date(startsAt.getTime() + durationMin * 60000);
        const conflicts = busy.some((b) => startsAt < b.end && endsAt > b.start);
        if (!conflicts) slots.push({ startsAt, durationMin });
      }
    }
  }

  return slots;
}

/** Re-checks a specific requested slot is still free right before booking it. */
export async function isSlotStillAvailable(startsAt: Date, durationMin: number) {
  const endsAt = new Date(startsAt.getTime() + durationMin * 60000);
  const maxOtherDurationMin = 24 * 60;
  const nearby = await prisma.lead.findMany({
    where: {
      type: "BOOKING",
      status: { not: "CLOSED_LOST" },
      scheduledAt: {
        gte: new Date(startsAt.getTime() - maxOtherDurationMin * 60000),
        lt: endsAt,
      },
    },
    select: { scheduledAt: true, durationMin: true },
  });

  return !nearby.some((b) => {
    if (!b.scheduledAt) return false;
    const otherEnd = new Date(b.scheduledAt.getTime() + (b.durationMin ?? 30) * 60000);
    return startsAt < otherEnd && endsAt > b.scheduledAt;
  });
}
