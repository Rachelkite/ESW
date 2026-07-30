export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6">
      <div>
        <h1 className="font-serif text-2xl text-ink">{title}</h1>
        {description && <p className="mt-1.5 text-sm text-ink/55">{description}</p>}
      </div>
      {action}
    </div>
  );
}
