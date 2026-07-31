import { NextResponse } from "next/server";
import { getAvailableSlots } from "@/lib/availability";
import { AESTHETIC_SERVICES } from "@/lib/service-catalog";

export async function GET(request: Request) {
  const service = new URL(request.url).searchParams.get("service");
  const isValid = AESTHETIC_SERVICES.some((s) => s.value === service);
  if (!service || !isValid) {
    return NextResponse.json({ error: "Invalid service." }, { status: 400 });
  }

  const slots = await getAvailableSlots(service);
  return NextResponse.json({
    slots: slots.map((s) => ({ startsAt: s.startsAt.toISOString(), durationMin: s.durationMin })),
  });
}
