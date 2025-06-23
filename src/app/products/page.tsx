'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/site-footer";
// import GLightbox from "glightbox";
// import "glightbox/dist/css/glightbox.css";
import { ZoomIn } from "lucide-react";
import { FadeInOnScroll } from "@/components/animation";

const projects = [
  {
    image: "/p1.png",
    fullImage: "/p1.png",
  },
  {
    image: "/p2.png",
    fullImage: "/p2.png",
  },
  {
    image: "/p3.png",
    fullImage: "/p3.png",
  },
];

const Products = () => {
  useEffect(() => {
    let lightbox: any;

    import("glightbox").then((module) => {
      lightbox = module.default({
        selector: "[data-glightbox]",
        touchNavigation: true,
        loop: true,
        closeButton: true,
        openEffect: "zoom",
        closeEffect: "fade",
      });
    });

    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
    };
  }, []);

  return (
    <div>
      <SiteHeader />
      <div className="container pt-5 xl:pt-10 pb-5 xl:pb-10">
        <FadeInOnScroll>
          <div className="flex flex-wrap mx-[-15px]">
            <div className="lg:w-11/12 xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto mb-5">
              <h2 className="text-lg uppercase text-[#279445] tracking-wide text-center mb-3 leading-[1.35]">
                Our Products
              </h2>
              <h3 className="text-[calc(1.325rem+0.9vw)] font-bold leading-[1.25] xl:text-[2rem] text-center lg:px-5 xl:px-10 xxl:px-24 mb-0">
                Explore our curated selection of quality-assured medicine products designed to support your health and wellness.
              </h3>
            </div>
          </div>

          <div className="grid-view projects-masonry">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] mt-[-50px] xl:mt-[-80px]">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="project item group md:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[20px] mt-[50px] xl:mt-[80px] max-w-full"
                >
                  <figure className="rounded-[.4rem] mb-3 relative">
                    <img
                      className="rounded-[.4rem]"
                      src={project.image}
                      alt="image"
                    />
                    <a
                      className="item-link absolute w-[2.2rem] h-[2.2rem] leading-[2.2rem] z-[1] transition-all duration-300 ease-in-out opacity-0 text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-full right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] group-hover:opacity-100 group-hover:right-[1rem]"
                      href={project.fullImage}
                      data-glightbox
                      data-gallery="projects-group"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </a>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
      <Footer />
    </div>
  );
};

export default Products;