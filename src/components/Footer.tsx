import React from "react";
import { Instagram, Send, Phone, Store } from "lucide-react";

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

const Footer = () => {
  return (
    <footer className="w-full bg-white py-6 border-t">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left text-gray-600 text-sm">
          © 2025 ThePennFlowers. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-gray-500 hover:text-brand-700 transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;