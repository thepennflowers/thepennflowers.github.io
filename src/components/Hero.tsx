import React, { useEffect, useState } from "react";
import LottieAnimation from "./LottieAnimation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationVisible(true);
    }, 100); // Small delay to allow initial render

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center text-center"
      style={{
        background:
          "linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)",
      }}
    >
      {/* <div className="absolute inset-0 z-0">
        <LottieAnimation
          src="/header-animation.json"
          id="hero-animation"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div
        className={cn(
          "relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4",
          "transition-opacity duration-1000 ease-in-out",
          isAnimationVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="mb-4">
          <img
            src="/Penn.png"
            alt="ThePennFlowers Logo"
            // Adjusted logo size for mobile
            className="w-34 h-32 sm:w-46 sm:h-44 rounded-full"
          />
        </div>

        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-4"
          style={{
            textShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          ThePennFlowers
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Experience the joy of fresh, beautiful flowers. Perfect for any occasion.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <a
            href="#newsletter"
            className="flex items-center justify-center group w-full sm:w-auto text-center px-6 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-brand-200 text-brand-700 border border-brand-300"
          >
            Order Now
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;