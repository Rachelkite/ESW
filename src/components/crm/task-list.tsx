"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { cx } from "@/lib/utils";

type TaskItem = {
  id: string;
  title: string;
  dueAt: string | null;
  done: boolean;
  lead: { name: string } | null;
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(
    new Date(iso)
  );
}

export function TaskList({ tasks }: { tasks: TaskItem[] }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [pendingId, setPendingId] = useState<string | null>(null);

  const toggle = async (id: string, done: boolean) => {
    setPendingId(id);
    await fetch(`/api/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done }),
    });
    setPendingId(null);
    startTransition(() => router.refresh());
  };

  if (tasks.length === 0) {
    return (
      <div className="border border-dashed border-ink/15 bg-white/50 py-16 text-center text-sm text-ink/45">
        No tasks yet. Add one above.
      </div>
    );
  }

  return (
    <ul className="divide-y divide-ink/5 border border-ink/10 bg-white">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-4 px-5 py-4">
          <input
            type="checkbox"
            checked={task.done}
            disabled={pendingId === task.id || pending}
            onChange={(e) => toggle(task.id, e.target.checked)}
            className="h-4 w-4 accent-royal"
          />
          <div className="flex-1">
            <p className={cx("text-sm", task.done ? "text-ink/35 line-through" : "text-ink")}>
              {task.title}
            </p>
            {task.lead && <p className="text-xs text-ink/40">{task.lead.name}</p>}
          </div>
          {task.dueAt && (
            <span className="tabular-nums text-xs text-ink/45">{formatDate(task.dueAt)}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
