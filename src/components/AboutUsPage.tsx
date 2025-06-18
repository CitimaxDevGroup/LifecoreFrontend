"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LicensedPermits from "./LicensedPermits";
import OrganizationalCharts from "./ClientHighlights";
import { Link } from "lucide-react";
import SubsidiariesAffil from "./SubsidiariesAffil";
import Footer from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const AboutUsPage = () => {
  const fadeRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const currentRef = fadeRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Our Medical Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LIFECORE Bio Integrative is a duly-licensed medical center in the Philippines.
            Its headquarters is located in one of Metro Manila’s Central Business Districts.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        />
      </section>

      <div
        ref={fadeRef}
        className={`mt-12 transform transition-all duration-1000 ease-in-out px-4 flex flex-col md:flex-row items-center md:items-start justify-center gap-0 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="w-full md:w-[700px] h-[500px] rounded-l-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=ORE Central,+31st+Street,+Taguig+City,+Metro+Manila&output=embed"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
            title="Lifecore Location Map"
          />
        </div>
        <div className="w-full md:w-[400px] h-[500px] bg-[#f5f5f5] text-black p-8 text-xl leading-relaxed text-justify rounded-r-lg flex flex-col items-start justify-start">
          <img
            src="/lifecore-nbg.png"
            alt="Lifecore Logo"
            className="mb-6 w-[300px] h-auto object-contain"
          />
          LIFECORE facilities are located in its corporate tower, the ORE Central Tower
          located at the most modern business district in Metro Manila, Philippines. ORE
          Central is a LEED Gold-certified Building that has been bestowed the honor of
          being the Best Green Development of 2015 by the Philippine Property Awards.
        </div>
      </div>
\
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <section className="mb-20">
          <LicensedPermits />
        </section>
        <section className="mb-20">
          <SubsidiariesAffil />
        </section>
      </div>
    </div>

  );
};

export default AboutUsPage;
