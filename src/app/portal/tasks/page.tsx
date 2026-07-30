import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/crm/page-header";
import { NewTaskForm } from "@/components/crm/new-task-form";
import { TaskList } from "@/components/crm/task-list";

export const dynamic = "force-dynamic";

export default async function TasksPage() {
  const [tasks, leads] = await Promise.all([
    prisma.task.findMany({
      orderBy: [{ done: "asc" }, { dueAt: "asc" }],
      include: { lead: { select: { name: true } } },
    }),
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true },
      take: 100,
    }),
  ]);

  const serialized = tasks.map((task) => ({
    ...task,
    dueAt: task.dueAt ? task.dueAt.toISOString() : null,
  }));

  return (
    <>
      <PageHeader
        title="Tasks & Follow-Ups"
        description="Concierge follow-ups across every pipeline, in one place."
      />
      <NewTaskForm leads={leads} />
      <TaskList tasks={serialized} />
    </>
  );
}
