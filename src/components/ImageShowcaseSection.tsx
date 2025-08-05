import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import your images
import springArrangement from "@/assets/spring-arrangement.jpg";
import redRosesBouquet from "@/assets/red-roses-bouquet.jpg";
import weddingBouquet from "@/assets/wedding-bouquet.jpg";

// Array of images and their descriptions
const arrangements = [
  {
    src: springArrangement,
    alt: "Beautiful spring flower arrangement with colorful blooms",
    title: "Vibrant Spring Tulips",
    description: "Capture the beauty of spring with this lively arrangement.",
  },
  {
    src: redRosesBouquet,
    alt: "Classic bouquet of deep red roses",
    title: "Elegant Red Roses",
    description: "A timeless classic, perfect for expressing love and admiration.",
  },
  {
    src: weddingBouquet,
    alt: "Stunning white and cream roses wedding bouquet",
    title: "Bridal White Roses",
    description: "Sophistication and grace for your most special day.",
  },
];

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Fresh Beauty in Every Arrangement
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our expert florists carefully craft each arrangement using the freshest flowers 
            to create stunning displays that brighten any space.
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {arrangements.map((arrangement, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1">
                    <Card className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
                      <CardContent className="p-0">
                        <img 
                          src={arrangement.src} 
                          alt={arrangement.alt} 
                          className="w-full h-auto object-cover"
                        />
                        <div className="bg-white p-4 sm:p-8">
                          <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">{arrangement.title}</h3>
                          <p className="text-gray-700 text-sm sm:text-base">
                            {arrangement.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;