
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

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">💕</span>
              <span>Happy Customers</span>
            </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">What customers say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
