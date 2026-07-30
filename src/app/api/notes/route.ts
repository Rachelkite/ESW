import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { noteSchema } from "@/lib/crm-validation";

export async function POST(request: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = noteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const note = await prisma.note.create({
    data: {
      leadId: parsed.data.leadId,
      body: parsed.data.body,
      authorId: session.user?.id ?? null,
    },
  });

  return NextResponse.json(note, { status: 201 });
}
