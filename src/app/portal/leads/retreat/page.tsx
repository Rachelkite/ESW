import { LeadPipelinePage } from "@/components/crm/lead-pipeline-page";

export const dynamic = "force-dynamic";

export default function RetreatLeadsPage() {
  return (
    <LeadPipelinePage
      type="RETREAT"
      title="Retreat Leads"
      description="Inquiries for upcoming Élevé wellness retreats."
    />
  );
}
