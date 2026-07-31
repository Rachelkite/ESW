import { LeadPipelinePage } from "@/components/crm/lead-pipeline-page";

export const dynamic = "force-dynamic";

export default function MembershipLeadsPage() {
  return (
    <LeadPipelinePage
      type="MEMBERSHIP"
      title="Membership Leads"
      description="Inquiries to join membership with a partner physician practice."
    />
  );
}
