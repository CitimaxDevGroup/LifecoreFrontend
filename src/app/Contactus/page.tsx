import Contactus from "@/components/Contactus";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <Contactus />
      </main>
    </div>
  );
}
