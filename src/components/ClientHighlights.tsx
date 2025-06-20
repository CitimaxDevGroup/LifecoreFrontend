import React from "react";
import ClientLogoCarousel from "./ClientsCarousel";

export default function ClientHighlights() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          Our Trusted Clients
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're proud to work with some of the most innovative companies across
          industries. Here are some of our valued clients who trust us with
          their business.
        </p>
      </header>
      <main className="max-w-7xl mx-auto">
        <section className="mb-16">
          <ClientLogoCarousel />
        </section>
      </main>
    </div>
  );
}
