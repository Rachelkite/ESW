import { LeadPipelinePage } from "@/components/crm/lead-pipeline-page";

export const dynamic = "force-dynamic";

export default function ClientLeadsPage() {
  return (
    <LeadPipelinePage
      type="CLIENT"
      title="Client Leads"
      description="General wellness consultation inquiries from prospective clients."
    />
  );
}
