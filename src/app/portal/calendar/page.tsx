import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/crm/page-header";

export const dynamic = "force-dynamic";

function formatDay(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default async function CalendarPage() {
  const tasks = await prisma.task.findMany({
    where: { done: false, dueAt: { not: null } },
    orderBy: { dueAt: "asc" },
    include: { lead: { select: { name: true } } },
  });

  const grouped = tasks.reduce<Record<string, typeof tasks>>((acc, task) => {
    const key = task.dueAt!.toDateString();
    acc[key] = acc[key] ? [...acc[key], task] : [task];
    return acc;
  }, {});

  const days = Object.keys(grouped);

  return (
    <>
      <PageHeader
        title="Calendar"
        description="Upcoming follow-ups and scheduled work, by day."
      />
      {days.length === 0 ? (
        <div className="border border-dashed border-ink/15 bg-white/50 py-16 text-center text-sm text-ink/45">
          Nothing scheduled. Add a due date to a task to see it here.
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {days.map((day) => (
            <div key={day}>
              <h2 className="mb-3 text-[0.7rem] font-semibold uppercase tracking-widest2 text-royal">
                {formatDay(new Date(day))}
              </h2>
              <ul className="divide-y divide-ink/5 border border-ink/10 bg-white">
                {grouped[day].map((task) => (
                  <li key={task.id} className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <span className="text-sm text-ink">{task.title}</span>
                    {task.lead && <span className="text-xs text-ink/40">{task.lead.name}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
