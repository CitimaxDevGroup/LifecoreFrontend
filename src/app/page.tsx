'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Users } from "lucide-react";
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
  Stethoscope,
  Calendar,
  ChevronRight,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  const teamMembers = [
    {
      name: 'Marie Cabanting',
      role: 'Administrative Manager',
      image: "/t1.png",
    },
    {
      name: 'Qareem Pido, M.D. DPSP',
      role: 'Pathologist',
      image: '/t.png',
    },
    {
      name: 'Gilwinn Triunfo, RMT',
      role: 'Chief Medical Technologist',
      image: '/t2.jpg',
    },
    {
      name: 'Gia Yvonne Andres, RMT',
      role: 'Laboratory Supervisor',
      image: '/t.png',
    },
    {
      name: 'Trixie Chloe Arcania, RMT',
      image: '/t3.jpg',
    },
    {
      name: 'Laurence Bernard Jasper Canlas, RMT',
      image: '/t4.jpg',
    },
    {
      name: 'Fherry Mae Quidato, RMT',
      image: '/t5.jpg',
    },
    {
      name: 'Mac Soriano',
      role: 'IT Administrator',
      image: '/t6.jpg',
    },
  ];

  const hero = [
    {
      image: "/s1.jpg",
    },
    {
      image: "/s2.jpg",
    },
    {
      image: "/s3.jpg",
    },
    {
      image: "/s4.jpg",
    },
    {
      image: "/s5.jpg",
    }, {
      image: "/s6.jpg",
    },
  ];

  function paginationColors() {
  setTimeout(() => {
    const paginations = document.querySelectorAll(".swiper-pagination");

    paginations.forEach((pagination) => {
      const bullets = pagination.querySelectorAll(".swiper-pagination-bullet");

      bullets.forEach((bullet) => {
        (bullet as HTMLElement).style.backgroundColor = "#279445";
        (bullet as HTMLElement).style.opacity = "0.4";
      });

      const observer = new MutationObserver(() => {
        bullets.forEach((bullet) => {
          if (bullet.classList.contains("swiper-pagination-bullet-active")) {
            (bullet as HTMLElement).style.backgroundColor = "#246321";
            (bullet as HTMLElement).style.opacity = "1";
          } else {
            (bullet as HTMLElement).style.backgroundColor = "#4fb74c";
            (bullet as HTMLElement).style.opacity = "0.4";
          }
        });
      });

      observer.observe(pagination, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    });
  }, 0);
}

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
                    Your Trusted Source of Health Solutions
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    LIFECORE Bio-Integrative is a duly-licensed medical center in the Philippines. Its headquarters is located in one of Metro Manila’s Central Business Districts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/">
                    <Button size="lg" className="w-full min-[400px]:w-auto bg-[#279445] hover:bg-[#14722f]">
                      Learn More!{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full min-[400px]:w-auto"
                    >
                      View Services <Stethoscope className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none overflow-hidden">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  pagination={{ clickable: true }}
                  className="rounded-xl"
                  onInit={paginationColors}
                >
                  {hero.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="aspect-video">
                        <Image
                          src={item.image}
                          alt={`Hero Slide ${index + 1}`}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full rounded-xl"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="swiper-pagination mt-12 mb-0 !relative" />
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white w-full py-10 xl:py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 mb-2">
              <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <Link href="/services">
                  <h2 className="cursor-pointer text-lg uppercase text-[#279445] mt-14 tracking-wide mb-3 hover:underline">
                    Our Services
                  </h2>
                </Link>
                <h3 className="text-[calc(1.305rem+0.66vw)] xl:text-[1.8rem] font-bold leading-snug">
                  Comprehensive healthcare & lab solutions
                </h3>
              </div>
              <div className="w-full lg:w-2/3 px-4">
                <div className="flex flex-wrap -mx-4 text-center">
                  {[
                    {
                      title: "Clinical Laboratory",
                      imageSrc: "/laboratory.png",
                      subtitle: "Service Availability",
                    },
                    {
                      title: "Compounding Pharmacy",
                      imageSrc: "/compounding.png",
                      subtitle: "Customized Meds",
                    },
                    {
                      title: "Drug Manufacturing",
                      imageSrc: "/drug.png",
                      subtitle: "Formulations Delivered",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="w-full md:w-1/3 px-4 mt-8 flex-[0_0_auto]"
                    >
                      <div className="mb-4 mx-auto">
                        <img
                          src={service.imageSrc}
                          alt={service.title}
                          className="h-40 w-40 object-cover rounded-full shadow-md mx-auto"
                        />
                      </div>
                      <p className="text-lg font-medium">{service.title}</p>
                      <p className="text-muted-foreground text-xs">{service.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-10 md:py-14 xl:py-16">
          <div
            className="shape absolute z-[1] w-24 h-24 rounded-full bg-[#4fb74c] right-0 bottom-2 translate-x-1/2"
          />
          <div
            className="shape absolute z-[1] w-24 h-24 rounded-full bg-[#4fb74c] opacity-50 top-2 left-0 -translate-x-1/2"
          />
          <div className="text-center max-w-3xl mx-auto mb-12 px-4">
            <h1 className="text-xl md:text-2xl lg:text-4xl mb-2 font-bold text-[#279445] leading-snug">
              Meet Our Team!
            </h1>
            <p>Get to know the passionate professionals behind <span className="text-[#279445]"> LifeCore Bio-Integrative Inc. </span>
              — dedicated experts committed to delivering exceptional care and innovation in every service we provide.</p>
          </div>
          <div className="px-4">
            <Swiper
              modules={[Pagination, Autoplay]}
              onInit={paginationColors}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              loop={true}
              speed={4000}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white shadow-lg rounded-xl p-6 text-center h-60">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                    <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      LIFECORE Bio-Integrative Inc. Laboratory
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination mt-20 mb-0 !relative" />
            </Swiper>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 bg-muted">
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
        </section> */}
        {/* <section className="w-full py-12 md:py-24 bg-background">
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
        </section> */}

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
                <Link href="/services" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Services</Link>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Products</Link>
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