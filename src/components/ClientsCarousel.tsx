import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ClientLogo from "@/components/ClientLogo";

interface ClientLogoCarouselProps {
  logos?: Array<{
    id: string;
    src: string;
    alt: string;
    href?: string;
  }>;
  autoScroll?: boolean;
  autoScrollInterval?: number;
  showNavigation?: boolean;
  showDots?: boolean;
  className?: string;
}

const ClientLogoCarousel = ({
  logos = [
    {
      id: "6",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company1",
      alt: "Company 1",
      href: "https://example.com/company1",
    },
    {
      id: "7",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company2",
      alt: "Company 2",
      href: "https://example.com/company2",
    },
    {
      id: "8",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company3",
      alt: "Company 3",
      href: "https://example.com/company3",
    },
    {
      id: "9",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company4",
      alt: "Company 4",
      href: "https://example.com/company4",
    },
    {
      id: "10",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company5",
      alt: "Company 5",
      href: "https://example.com/company5",
    },
    {
      id: "11",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company6",
      alt: "Company 6",
      href: "https://example.com/company6",
    },
    {
      id: "12",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company1",
      alt: "Company 1",
      href: "https://example.com/company1",
    },
    {
      id: "13",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company2",
      alt: "Company 2",
      href: "https://example.com/company2",
    },
    {
      id: "13",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company3",
      alt: "Company 3",
      href: "https://example.com/company3",
    },
    {
      id: "14",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company4",
      alt: "Company 4",
      href: "https://example.com/company4",
    },
    {
      id: "15",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company5",
      alt: "Company 5",
      href: "https://example.com/company5",
    },
    {
      id: "16",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company6",
      alt: "Company 6",
      href: "https://example.com/company6",
    },
    {
      id: "17",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company1",
      alt: "Company 1",
      href: "https://example.com/company1",
    },
    {
      id: "18",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company2",
      alt: "Company 2",
      href: "https://example.com/company2",
    },
    {
      id: "19",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company3",
      alt: "Company 3",
      href: "https://example.com/company3",
    },
    {
      id: "20",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company4",
      alt: "Company 4",
      href: "https://example.com/company4",
    },
    {
      id: "21",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company5",
      alt: "Company 5",
      href: "https://example.com/company5",
    },
    {
      id: "21",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company6",
      alt: "Company 6",
      href: "https://example.com/company6",
    },{
      id: "22",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company1",
      alt: "Company 1",
      href: "https://example.com/company1",
    },
    {
      id: "23",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company2",
      alt: "Company 2",
      href: "https://example.com/company2",
    },
    {
      id: "24",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company3",
      alt: "Company 3",
      href: "https://example.com/company3",
    },
    {
      id: "25",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company4",
      alt: "Company 4",
      href: "https://example.com/company4",
    },
    {
      id: "26",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company5",
      alt: "Company 5",
      href: "https://example.com/company5",
    },
    {
      id: "27",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company6",
      alt: "Company 6",
      href: "https://example.com/company6",
    },{
      id: "28",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company1",
      alt: "Company 1",
      href: "https://example.com/company1",
    },
    {
      id: "29",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company2",
      alt: "Company 2",
      href: "https://example.com/company2",
    },
    {
      id: "30",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company3",
      alt: "Company 3",
      href: "https://example.com/company3",
    },
    {
      id: "31",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company4",
      alt: "Company 4",
      href: "https://example.com/company4",
    },
    {
      id: "32",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company5",
      alt: "Company 5",
      href: "https://example.com/company5",
    },
    {
      id: "33",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company6",
      alt: "Company 6",
      href: "https://example.com/company6",
    },{
      id: "34",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company1",
      alt: "Company 1",
      href: "https://example.com/company1",
    },
    {
      id: "35",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company2",
      alt: "Company 2",
      href: "https://example.com/company2",
    },
    {
      id: "36",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company3",
      alt: "Company 3",
      href: "https://example.com/company3",
    },
    {
      id: "37",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company4",
      alt: "Company 4",
      href: "https://example.com/company4",
    },
    {
      id: "38",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company5",
      alt: "Company 5",
      href: "https://example.com/company5",
    },
    {
      id: "39",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company6",
      alt: "Company 6",
      href: "https://example.com/company6",
    },{
      id: "40",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company1",
      alt: "Company 1",
      href: "https://example.com/company1",
    },
    {
      id: "41",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company2",
      alt: "Company 2",
      href: "https://example.com/company2",
    },
    {
      id: "42",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company3",
      alt: "Company 3",
      href: "https://example.com/company3",
    },
    {
      id: "43",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company4",
      alt: "Company 4",
      href: "https://example.com/company4",
    },
    {
      id: "44",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company5",
      alt: "Company 5",
      href: "https://example.com/company5",
    },
    {
      id: "45",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company6",
      alt: "Company 6",
      href: "https://example.com/company6",
    },{
      id: "46",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company5",
      alt: "Company 5",
      href: "https://example.com/company5",
    },
    {
      id: "47",
      src: "https://api.dicebear.com/7.x/avataaars/svg?seed=company6",
      alt: "Company 6",
      href: "https://example.com/company6",
    },

  ],
  autoScroll = true,
  autoScrollInterval = 3000,
  showNavigation = true,
  showDots = true,
  className,
}: ClientLogoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const maxIndex = Math.max(0, Math.ceil(logos.length / 4) - 1);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoScroll || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, autoScrollInterval, isPaused, maxIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={cn(
        "relative w-full bg-background py-8 px-4 overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${(maxIndex + 1) * 100}%`,
            }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="min-w-full grid grid-cols-2 md:grid-cols-4 gap-6 px-4"
              >
                {logos
                  .slice(groupIndex * 4, (groupIndex + 1) * 4)
                  .map((logo) => (
                    <ClientLogo
                      key={logo.id}
                      src={logo.src}
                      alt={logo.alt}
                      href={logo.href}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {showNavigation && (
          <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 left-0 right-0 px-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
              onClick={handlePrevious}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
              onClick={handleNext}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        )}

        {showDots && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentIndex === index
                    ? "bg-primary w-4"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientLogoCarousel;
