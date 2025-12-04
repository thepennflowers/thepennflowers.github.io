
import React, { useState, useRef, useEffect } from "react";
import textMask from "@/assets/text-mask-image.jpg";

const OurPromise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 bg-white relative overflow-hidden"
      id="our-promise"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">🌹</span>
              <span>Our Promise</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <span className="block bg-clip-text text-transparent bg-cover bg-center text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-tight tracking-tight pb-2"
              style={{ backgroundImage: `url(${textMask})` }}
            >At ThePennFlowers, we craft every arrangement with passion to bring nature’s beauty into your life and celebrate life’s special moments.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
