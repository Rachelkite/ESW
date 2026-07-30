import { LeadPipelinePage } from "@/components/crm/lead-pipeline-page";

export const dynamic = "force-dynamic";

export default function CorporateLeadsPage() {
  return (
    <LeadPipelinePage
      type="CORPORATE"
      title="Corporate Leads"
      description="Executive wellness inquiries from leadership and HR decision-makers."
    />
  );
}
