'use client';

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
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
import Footer from "@/components/site-footer";
import { FadeInOnScroll } from "@/components/animation";

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
      image: "/s7.jpg",
    },
    {
      image: "/s8.jpg",
    },
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
    {
      image: "/s9.jpg",
    },
    {
      image: "/s10.jpg",
    },
  ];

  const companyLogos = [
    { name: "Company A", image: "/companies/company-a.png" },
    { name: "Company B", image: "/companies/company-b.png" },
    { name: "Company C", image: "/companies/company-c.png" },
    { name: "Company D", image: "/companies/company-d.png" },
    { name: "Company E", image: "/companies/company-e.png" },
    { name: "Company F", image: "/companies/company-f.png" },
    { name: "Company G", image: "/companies/company-G.png" },
    { name: "Company H", image: "/companies/company-h.png" },
    { name: "Company I", image: "/companies/company-i.png" },
    { name: "Company J", image: "/companies/company-j.png" },
    { name: "Company K", image: "/companies/company-k.png" },
    { name: "Company L", image: "/companies/company-l.png" },
    { name: "Company M", image: "/companies/company-m.png" },
    { name: "Company N", image: "/companies/company-n.png" },
    { name: "Company O", image: "/companies/company-o.png" },
    { name: "Company P", image: "/companies/company-p.png" },
    { name: "Company Q", image: "/companies/company-q.png" },
    { name: "Company R", image: "/companies/company-r.png" },
    { name: "Company S", image: "/companies/company-s.png" },
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
        <section className="w-full py-6 md:py-12 lg:py-16 bg-gradient-to-b from-background to-muted">
          <FadeInOnScroll>
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
                    <Link href="/AboutUs">
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
          </FadeInOnScroll>
        </section>

        <section className="bg-white w-full py-10 xl:py-12">
          <FadeInOnScroll>
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
          </FadeInOnScroll>
        </section>

        <section className="relative overflow-hidden py-10 md:py-14 xl:py-16">
          <FadeInOnScroll>
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
          </FadeInOnScroll>
        </section>

        <section className="relative overflow-hidden py-10 md:py-14 xl:py-16 bg-white">
          <FadeInOnScroll>
            <div className="shape absolute z-[1] w-24 h-24 rounded-full bg-[#4fb74c] right-0 bottom-10 translate-x-1/2" />
            <div className="shape absolute z-[1] w-24 h-24 rounded-full bg-[#4fb74c] opacity-50 top-2 left-0 -translate-x-1/2" />
            <div className="text-center max-w-3xl mx-auto mb-12 px-4 relative z-10">
              <h1 className="text-xl md:text-2xl lg:text-4xl mb-2 font-bold text-[#279445] leading-snug">
                Trusted by Many Companies
              </h1>
              <p>
                Explore the partners and clients who trust{' '}
                <span className="text-[#279445]">LifeCore Bio-Integrative Inc.</span> in
                health, science, and innovation.
              </p>
            </div>
            <div className="relative z-10 px-4 flex flex-col items-center gap-1">
              <div className="flex gap-1">
                <img src="/companies/company-a.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-b.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-c.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-d.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-e.png" className="w-28 h-36 object-contain bg-white" />
                <img src="/companies/company-f.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-g.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-h.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-i.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-j.png" className="w-20 h-20 object-contain bg-white" />
              </div>
              <div className="flex gap-1">
                <img src="/companies/company-k.png" className="w-24 h-20 object-contain bg-white" />
                <img src="/companies/company-l.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-m.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-n.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-o.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-p.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-q.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-r.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-s.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-t.png" className="w-24 h-24 object-contain bg-white" />
              </div>
              <div className="flex gap-1">
                <img src="/companies/company-u.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-v.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-w.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-x.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-y.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-z.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-1.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-2.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-3.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-4.png" className="w-20 h-20 object-contain bg-white" />
              </div>
              <div className="flex gap-1">
                <img src="/companies/company-5.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-6.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-7.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-8.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-9.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-10.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-11.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-12.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-13.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-14.png" className="w-20 h-20 object-contain bg-white" />
              </div>
              <div className="flex gap-1">
                <img src="/companies/company-15.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-16.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-17.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-18.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-19.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-20.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-21.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-22.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-23.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-24.png" className="w-20 h-20 object-contain bg-white" />
              </div>
              <div className="flex gap-1">
                <img src="/companies/company-25.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-26.png" className="w-24 h-24 object-contain bg-white" />
                <img src="/companies/company-27.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-28.png" className="w-20 h-20 object-contain bg-white" />
                <img src="/companies/company-29.png" className="w-24 h-24 object-contain bg-white" />
              </div>
              <div className="flex gap-1">
              </div>
              <div className="flex gap-1">
              </div>
            </div>
          </FadeInOnScroll>
        </section>
      </main>
      <Footer />
    </div>
  );
}
