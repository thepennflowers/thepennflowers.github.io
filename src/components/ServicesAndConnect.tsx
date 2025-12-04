import React from "react";
import weddingBouquet from "@/assets/wedding-bouquet.jpg";
import redRosesBouquet from "@/assets/red-roses-bouquet.jpg";
import { Instagram, Send, Phone, Store } from "lucide-react";

// Social links data
const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/thepennflowers/",
    icon: <Instagram className="w-6 h-6" />,
  },
  {
    name: "Carousell",
    href: "https://www.carousell.sg/u/thepennflowers/",
    icon: <Store className="w-6 h-6" />,
  },
  {
    name: "Telegram",
    href: "https://t.me/thepennflowers",
    icon: <Send className="w-6 h-6" />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6588018921",
    icon: <Phone className="w-6 h-6" />,
  },
];

const ServicesAndConnect = () => {
  return (
    <section id="details" className="w-full bg-white py-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            <div
              className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end"
              style={{
                backgroundImage: `url(${weddingBouquet})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 mb-2">
                <div className="pulse-chip inline-flex">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-pulse-500 mr-2">✨</span>
                  <span>Our Services</span>
                </div>
              </div>
            </div>
            <div
              className="bg-white p-4 sm:p-8"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECECEC",
              }}
            >
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
                From special occasions to everyday beauty
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Wedding Bouquets:</span> Custom designs
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Event Flowers:</span> All occasions
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Delivery:</span> Same day available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Linktree Style */}
          <div id="contact" className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header */}
            <div
              className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start justify-center"
              style={{
                backgroundImage: `url(${redRosesBouquet})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 mt-auto">
                <div className="pulse-chip inline-flex">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-pulse-500 mr-2">💌</span>
                  <span>Connect With Us</span>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div
              className="bg-white p-6 sm:p-8"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECECEC",
                minHeight: "450px"
              }}
            >
              <h3 className="text-lg sm:text-xl font-display mb-8 text-center md:text-left">
                Reach out to us on any of our socials below to order now!
              </h3>
              <div className="flex flex-col md:flex-row w-full items-center justify-around gap-8">
                {/* Left Column: Logo */}
                <div className="flex-shrink-0 flex flex-col items-center md:pt-17">
                  <img
                    src="/Penn.png"
                    alt="ThePennFlowers Logo"
                    className="w-26 h-24 rounded-full"
                  />
                  <h3 className="text-lg font-bold font-display text-gray-800 mt-2">
                    @thepennflowers
                  </h3>
                </div>

                {/* Right Column: Links */}
                <div className="w-full max-w-xs space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndConnect;