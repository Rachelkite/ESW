import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/crm/page-header";
import { LeadTable } from "@/components/crm/lead-table";
import type { InquiryType } from "@prisma/client";

export async function LeadPipelinePage({
  type,
  title,
  description,
}: {
  type: InquiryType;
  title: string;
  description: string;
}) {
  const leads = await prisma.lead.findMany({
    where: { type },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <PageHeader
        title={title}
        description={description}
        action={
          <span className="text-sm tabular-nums text-ink/45">
            {leads.length} inquir{leads.length === 1 ? "y" : "ies"}
          </span>
        }
      />
      <LeadTable leads={leads} />
    </>
  );
}
