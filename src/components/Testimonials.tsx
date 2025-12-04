
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Got flowers for my cat to remind her of me while im away for a trip! the seller was really nice to help me research filler greens that were pet friendly! extremely thankful for going the extra mile! will definitely order again before I go for a long trip!",
  author: "shreddedsicckkunt42069gymbro",
  role: "Happy Cat Owner",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "My bouquet was ready in the morning as per my request. I made some changes to the wrapping paper and the seller was so nice to acede to my last minute request. She even did a \"mock up\" for me to visualise the mix of colours of the wrapping paper w the clear & flowers. Definitely a sincere seller 👍👍",
  author: "rachellim7",
  role: "Happy Customer",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "Thank you for such an excellent service that you provided as a florist. He was very patient and answered all of my questions. He went an extra mile to deliver it at the door and even wrote a small note as requested by FOC. Thank you bro! Really appreciate your efficiency and effort!",
  author: "406razor",
  role: "Happy Customer",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "We use ThePennFlowers for all our corporate events. Their arrangements always impress our clients and add elegance to every occasion.",
  author: "Mrs Quek",
  role: "Event Coordinator",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-20 bg-white" id="testimonials">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-10 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="pulse-chip opacity-0 animate-fade-in" style={{
              animationDelay: "0.1s"
            }}>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-pulse-500 mr-2">💕</span>
              <span>Happy Customers</span>
            </div>
          </div>

          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            What customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl h-auto min-h-[300px] sm:h-auto sm:aspect-[16/9] opacity-0 animate-fade-in"
              style={{
                animationDelay: `${0.2 + (index * 0.1)}s`
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url('/review-background.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0" />

              {/* Content - Simple layout directly in card */}
              <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center text-center h-full min-h-[inherit]">
                <p className="text-gray-900 text-sm sm:text-lg font-medium leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-pulse-600 font-bold text-base sm:text-lg">
                    {testimonial.author}
                  </span>
                  <span className="text-gray-600 text-sm font-medium">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
