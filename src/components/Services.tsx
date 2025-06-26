"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Beaker, PillIcon, Factory } from "lucide-react";
import { FadeInOnScroll } from "./animation";

// Responsive hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const ServiceCard = ({
  title,
  description,
  icon,
  onLearnMore,
  isActive,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  onLearnMore: () => void;
  isActive: boolean;
}) => (
  <Card className="w-full max-w-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto">
    <FadeInOnScroll>
      <CardHeader className="flex flex-col items-center space-y-2 pb-4">
        <div className="rounded-full bg-primary/10 p-4">{icon}</div>
        <CardTitle className="text-xl font-bold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button
          onClick={onLearnMore}
          className="px-6 bg-green-600 hover:bg-green-700 text-white"
        >
          {isActive ? "Hide" : "Learn More"}
        </Button>
      </CardFooter>
    </FadeInOnScroll>
  </Card>
);

const ServiceDetail = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => (
  <div className="w-full bg-white rounded-lg shadow-md p-4 sm:p-6 mt-4 mb-8">
    <Accordion type="single" collapsible defaultValue={id}>
      <AccordionItem value={id} className="border-none">
        <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            {/* Image Column */}
            <div className="md:w-1/3 w-full">
              {id === "clinical-lab" && (
                <img
                  src="/Services/Clinical4.png"
                  alt="Clinical Lab"
                  className="w-full h-auto object-cover rounded-md shadow-sm"
                  
                />
              )}
              {id === "compounding-pharmacy" && (
                <img
                  src="/Services/Compounding.png"
                  alt="Compounding Pharmacy"
                  className="w-full h-auto object-cover rounded-md shadow-sm"
                />
              )}
              {id === "drug-manufacturing" && (
                <img
                  src="/Services/Compounding2.png"
                  alt="Drug Manufacturing"
                  className="w-full h-auto object-cover rounded-md shadow-sm"
                />
              )}
            </div>

            {/* Text & Table Column */}
            <div className="md:w-2/3 w-full">
              <h3 className="text-lg font-medium mb-3">About this Service</h3>
              <p className="text-gray-700 mb-6">{description}</p>

              {id === "clinical-lab" && (
                <>
                  <h4 className="text-md font-semibold mt-6 mb-2">Test Rates</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border rounded-md overflow-hidden">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="p-2 border">Category</th>
                          <th className="p-2 border">Test</th>
                          <th className="p-2 border">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Hematology */}
                        <tr className="bg-gray-50 font-semibold">
                          <td className="p-2 border">Hematology</td>
                          <td className="p-2 border">CBC and Platelet Count</td>
                          <td className="p-2 border">₱300.00</td>
                        </tr>
                        <tr>
                          <td className="p-2 border"></td>
                          <td className="p-2 border">Blood Typing</td>
                          <td className="p-2 border">₱320.00</td>
                        </tr>

                        {/* Chemistry */}
                        <tr className="bg-gray-50 font-semibold">
                          <td className="p-2 border">Chemistry</td>
                          <td className="p-2 border">FBS</td>
                          <td className="p-2 border">₱150.00</td>
                        </tr>
                        {[
                          ["LIPID PROFILE", "₱650.00"],
                          ["CHOLESTEROL", "₱170.00"],
                          ["TRIGLYCERIDES", "₱215.00"],
                          ["HDL", "₱265.00"],
                          ["BUN", "₱160.00"],
                          ["CREATININE", "₱175.00"],
                          ["URIC ACID", "₱200.00"],
                          ["SGPT", "₱210.00"],
                          ["SGOT", "₱210.00"],
                          ["POTASSIUM", "₱210.00"],
                          ["SODIUM", "₱210.00"],
                          ["CHLORIDE", "₱210.00"],
                          ["HbA1c", "₱480.00"],
                        ].map(([test, price], i) => (
                          <tr key={i}>
                            <td className="p-2 border"></td>
                            <td className="p-2 border">{test}</td>
                            <td className="p-2 border">{price}</td>
                          </tr>
                        ))}

                        {/* Clinical Microscopy */}
                        <tr className="bg-gray-50 font-semibold">
                          <td className="p-2 border">Clinical Microscopy</td>
                          <td className="p-2 border">Urinalysis</td>
                          <td className="p-2 border">₱200.00</td>
                        </tr>
                        {[
                          ["Fecalysis", "₱140.00"],
                          ["Pregnancy Test (Urine)", "₱240.00"],
                          ["FOBT (Occult Blood)", "₱1,000.00"],
                        ].map(([test, price], i) => (
                          <tr key={`mic-${i}`}>
                            <td className="p-2 border"></td>
                            <td className="p-2 border">{test}</td>
                            <td className="p-2 border">{price}</td>
                          </tr>
                        ))}

                        {/* Serology */}
                        <tr className="bg-gray-50 font-semibold">
                          <td className="p-2 border">Serology</td>
                          <td className="p-2 border">HbsAg (Qualitative)</td>
                          <td className="p-2 border">₱250.00</td>
                        </tr>
                        <tr>
                          <td className="p-2 border"></td>
                          <td className="p-2 border">VDRL</td>
                          <td className="p-2 border">₱400.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const services = [
    {
      id: "clinical-lab",
      title: "Clinical Laboratory",
      icon: <Beaker className="h-12 w-12 text-green-600 md:text-4xl" />,
      description:
        "Accredited by the DOH, we provide fast and accurate lab results for your health and peace of mind.",
      detailedDescription:
        "LIFECORE BIOINTEGRATIVE INC. is an accredited laboratory by the Department of Health (DOH), Philippines and has been given a License To Operate (LTO) a Clinical Laboratory. We are offering Hematology, Clinical Microscopy, Clinical Chemistry and Serology Testing with reliable, fast, and accurate Lab Results for your health and peace of mind.",
    },
    {
      id: "compounding-pharmacy",
      title: "Compounding Pharmacy",
      icon: <PillIcon className="h-12 w-12 text-green-600 md:text-4xl" />,
      description:
        "Accredited by the DOH, we tailored medications that fit your unique health needs.",
      detailedDescription:
        "LIFECORE conducts preparation of custom formulation of a medication tailor-fit to the unique need of a patient which cannot be met with commercially available products.",
    },
    {
      id: "drug-manufacturing",
      title: "Drug Manufacturing",
      icon: <Factory className="w-6 h-6 text-green-600 md:text-4xl" />,
      description:
        "Accredited by the DOH, we produce quality medicines at scale for your health and safety.",
      detailedDescription:
        "LIFECORE ensures the development and manufacture of pharmaceutical products adhering to strict regulatory standards, supporting both patient care and public health.",
    },
  ];

  const handleLearnMore = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative">
        <div className="h-64 md:h-80 w-full overflow-hidden">
          <div className="absolute inset-0 bg-green-800/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              Our Services
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Comprehensive healthcare solutions with precision and care
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Discover Our Healthcare Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We offer a range of specialized healthcare services designed to meet
            the highest standards of quality and patient care.
          </p>
        </div>

        {/* Cards in grid or stacked layout */}
        {isMobile ? (
          <div className="flex flex-col gap-8">
            {services.map((service) => (
              <div key={service.id} className="space-y-4">
                <ServiceCard
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  onLearnMore={() => handleLearnMore(service.id)}
                  isActive={expandedService === service.id}
                />
                {expandedService === service.id && (
                  <ServiceDetail
                    id={service.id}
                    title={service.title}
                    description={service.detailedDescription}
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  onLearnMore={() => handleLearnMore(service.id)}
                  isActive={expandedService === service.id}
                />
              ))}
            </div>

            {/* Detail only below cards on web */}
            {expandedService && (
              <div className="mt-12">
                {services
                  .filter((service) => service.id === expandedService)
                  .map((service) => (
                    <ServiceDetail
                      key={service.id}
                      id={service.id}
                      title={service.title}
                      description={service.detailedDescription}
                    />
                  ))}
              </div>
            )}
          </>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Interested in Our Services?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact our team of healthcare professionals to learn more about how
            we can meet your specific needs.
          </p>
          <Link href="/Contactus">
            <Button size="sm">Contact Us today</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
