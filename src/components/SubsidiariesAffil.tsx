import React, { useEffect, useRef, useState } from "react";

export default function ClientHighlights() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Subsidiaries and Affiliates
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
            We strengthen our operations through strategic subsidiaries and affiliates engaged in mining, quarrying, and mineral exploration across the Philippines.
          </p>
      </header>

      <main className="max-w-7xl mx-auto">
        <section
          ref={sectionRef}
          className="relative min-h-[60vh] flex justify-center items-center"
        >
          <div
            className={`flex flex-col md:flex-row items-center justify-center gap-0 w-full transition-all duration-700 ${
              inView ? "justify-start" : "justify-center"
            }`}
          >
            {/* OreBldg Image */}
            <div
              className={`transition-all duration-700 ${
                inView ? "md:-translate-x-32" : ""
              }`}
            >
              <img
                src="/OreBldg.png"
                alt="Ore Building"
                className="w-80 h-auto rounded shadow-xl"
              />
            </div>

            {/* Text + Logo (visible only when in view) */}
            <div
              className={`transition-all duration-700 max-w-md text-gray-700 ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10 pointer-events-none"
              }`}
            >
              {/* Centered Logo + Company Name */}
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/Ore.png"
                    alt="Ore Logo"
                    className="w-20 h-20 object-contain"
                  />
                  <h3 className="text-3xl font-bold text-gray-800">
                    Oriental Peninsula Resources Group Inc.
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl leading-relaxed text-justify">
                Oriental Peninsula Resources Group, Inc. is an investment
                holding company, which consolidates and operates companies
                that own mining tenements. It is also involved in quarrying,
                exploration, and extraction of minerals. The company was 
                foundedon April 16, 2007 and is headquartered in Taguig City,
                Philippines.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
