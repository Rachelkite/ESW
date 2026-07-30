import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { taskSchema } from "@/lib/crm-validation";

export async function POST(request: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = taskSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const { title, dueAt, leadId } = parsed.data;

  const task = await prisma.task.create({
    data: {
      title,
      dueAt: dueAt ? new Date(dueAt) : null,
      leadId: leadId || null,
      ownerId: session.user?.id ?? null,
    },
  });

  return NextResponse.json(task, { status: 201 });
}
