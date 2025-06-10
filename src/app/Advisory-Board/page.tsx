import AdvisoryBoard from "@/components/AdvisoryBoard";
import { SiteHeader } from "@/components/site-header";

export default function AdvisoryBoardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <AdvisoryBoard />
      </main>
    </div>
  );
}

// This code defines an AdvisoryBoardPage component that renders the AdvisoryBoard component within a layout that includes a site header and main content area.