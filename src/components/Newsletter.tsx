import React from "react";
import { Instagram, Send, Phone, Store } from "lucide-react";

// Social links data
const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/thepennflowers/",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "Carousell",
    href: "https://www.carousell.sg/u/thepennflowers/",
    icon: <Store className="w-5 h-5" />,
  },
  {
    name: "Telegram",
    href: "https://t.me/thepennflowers",
    icon: <Send className="w-5 h-5" />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6588018921",
    icon: <Phone className="w-5 h-5" />,
  },
];

const Newsletter = () => {
  return (
    <section id="newsletter" className="bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                📧
              </span>
              <span>Stay Connected</span>
            </div>
          </div>

          <h2 className="text-5xl font-display font-bold mb-4 text-left">
            Stay blooming with us
          </h2>
          <p className="text-xl text-gray-700 mb-10 text-left">
            Reach out to us on any of our socials below to order now!
          </p>

          {/* Social Links Section */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex items-center gap-2 text-gray-600 hover:text-brand-700 font-medium px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;