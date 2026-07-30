import { LeadPipelinePage } from "@/components/crm/lead-pipeline-page";

export const dynamic = "force-dynamic";

export default function PeptideLeadsPage() {
  return (
    <LeadPipelinePage
      type="PEPTIDE"
      title="Peptide Leads"
      description="Peptide therapy inquiries submitted through the website."
    />
  );
}
