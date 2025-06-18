import AboutUsPage from "@/components/AboutUsPage";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/site-footer";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Removed container/py-0 from here */}
        <AboutUsPage />
      </main>
      <Footer />
    </div>
  );
}

