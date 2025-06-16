import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Users } from "lucide-react";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  Calendar,
  ChevronRight,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  const services = [
    {
      title: "Laboratory Testing",
      description:
        "Comprehensive blood work, genetic testing, and specialized diagnostic services.",
      imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=lab",
      imageAlt: "Laboratory icon",
    },
    {
      title: "Preventive Health Screenings",
      description:
        "Early detection screenings and health risk assessments for proactive healthcare.",
      imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=health",
      imageAlt: "Health screening icon",
    },
    {
      title: "Specialized Consultations",
      description:
        "Expert consultations with healthcare specialists in various medical fields.",
      imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=consult",
      imageAlt: "Consultation icon",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Advanced Healthcare Solutions for Your Well-being
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    LifeCore Biointegrative Inc. combines cutting-edge
                    laboratory services with holistic healthcare approaches.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/">
                    <Button size="lg" className="w-full min-[400px]:w-auto bg-[#279445] hover:bg-[#14722f]">
                      Learn More!{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/job-board">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full min-[400px]:w-auto"
                    >
                      View Job Openings <Briefcase className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/lifecore7.jpg"
                    alt="Modern laboratory equipment"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Services
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive laboratory and healthcare services tailored to your needs
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Laboratory Testing",
                  description:
                    "Comprehensive blood work, genetic testing, and specialized diagnostic services.",
                  imageSrc: "/lifecore4.jpg",
                  imageAlt: "Laboratory icon",
                },
                {
                  title: "Preventive Health Screenings",
                  description:
                    "Early detection screenings and health risk assessments for proactive healthcare.",
                  imageSrc: "/lifecore6.jpg",
                  imageAlt: "Health screening icon",
                },
                {
                  title: "Specialized Consultations",
                  description:
                    "Expert consultations with healthcare specialists in various medical fields.",
                  imageSrc: "/lifecore3.jpg",
                  imageAlt: "Consultation icon",
                },
              ].map((service, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4">
                      <Image
                        src={service.imageSrc}
                        width={200}
                        height={100}
                        alt={service.imageAlt}
                        className="rounded-md"
                      />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/appointments"
                      className="group flex items-center text-sm font-medium text-primary"
                    >
                      Book now{" "}
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Career Opportunities
                </h2>
                <p className="text-muted-foreground md:text-lg mt-2">
                  Join our team of healthcare professionals
                </p>
              </div>
              <Link href="/job-board" aria-label="View all open positions">
                <Button variant="outline">
                  View All Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Laboratory Technician",
                  location: "Boston, MA",
                  type: "Full-time",
                  description:
                    "Perform laboratory tests and procedures for diagnostic and research purposes.",
                },
                {
                  title: "Healthcare Administrator",
                  location: "Boston, MA",
                  type: "Full-time",
                  description:
                    "Oversee daily operations and ensure efficient delivery of healthcare services.",
                },
              ].map((job, index) => (
                <Card
                  key={job.title || index}
                  className="transition-all duration-200 hover:shadow-md"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{job.title}</CardTitle>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {job.type}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>

                  <CardFooter>
                    <Link href="/job-board" aria-label={`Go to job board from ${job.title}`}>
                      <Button variant="secondary" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Book Your Appointment
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    Schedule laboratory tests and consultations with our
                    healthcare professionals
                  </p>
                </div>
                <ul className="grid gap-2">
                  {[
                    "Easy online scheduling",
                    "Choose from available time slots",
                    "Receive confirmation via email",
                    "Reschedule or cancel if needed",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="2430"
                          viewBox="0 0 30 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/appointments">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Book Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/lifecore6.jpg"
                    alt="Medical appointment"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/lifecore-nbg.png"
                  alt="LifeCore Biointegrative Inc."
                  width={250}
                  height={250}
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-muted-foreground ml-5">
                Advanced healthcare solutions combining laboratory services with
                holistic approaches.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#279445] mb-2">Quick Links</h3>
              <div className="grid gap-2">
                <Link href="/" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Home</Link>
                <Link href="/advisory-board" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Advisory Board</Link>
                <Link href="/job-board" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Job Board</Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#279445] mb-2">Contact</h3>
              <div className="grid gap-2">
                <p className="text-sm text-muted-foreground">7/F ORE Central, 9th St. cor. 31st Ave., BGC, Taguig</p>
                <p className="text-sm text-muted-foreground">+63 977-817-0723</p>
                <p className="text-sm text-muted-foreground">info.lifecoreph@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex flex-col items-center justify-center text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}{' '}
              <span className="text-[#279445] font-bold">LifeCore Bio-Integrative Inc.</span> All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
