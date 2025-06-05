import AppointmentBooking from "@/components/AppointmentBooking";
import { SiteHeader } from "@/components/site-header";

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <AppointmentBooking />
      </main>
    </div>
  );
}
