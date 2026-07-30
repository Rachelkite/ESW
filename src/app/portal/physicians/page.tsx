import { LeadPipelinePage } from "@/components/crm/lead-pipeline-page";

export const dynamic = "force-dynamic";

export default function PhysiciansPage() {
  return (
    <LeadPipelinePage
      type="PHYSICIAN"
      title="Physicians"
      description="Physician partnership inquiries submitted through the website."
    />
  );
}
