import { LeadPipelinePage } from "@/components/crm/lead-pipeline-page";

export const dynamic = "force-dynamic";

export default function BookingLeadsPage() {
  return (
    <LeadPipelinePage
      type="BOOKING"
      title="Bookings"
      description="Mobile aesthetics appointments booked through the website."
    />
  );
}
