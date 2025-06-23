import ContactSection from "@/components/Contactus";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/site-footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
