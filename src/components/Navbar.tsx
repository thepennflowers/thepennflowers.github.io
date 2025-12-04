import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, ArrowLeft } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeMenu();
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="ThePennFlowers"
          >
            <img
              src="/Penn.png"
              alt="ThePennFlowers Logo"
              className="h-7 sm:h-8 rounded-full"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Home
            </a>
            <a href="#features" className="nav-link">Services</a>
            <a href="#details" className="nav-link">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className={cn(
              "md:hidden text-gray-700 p-3 focus:outline-none transition-opacity duration-300",
              isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col pt-8 px-6 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ backgroundColor: 'white' }} // Hardcoded white background to ensure opacity
      >
        {/* Back Button */}
        <button
          onClick={closeMenu}
          className="flex items-center gap-2 text-gray-700 hover:text-pulse-500 transition-colors mb-8 p-3 rounded-lg hover:bg-gray-100 self-start"
          aria-label="Close menu"
        >
          <ArrowLeft size={24} />
          <span className="text-lg font-medium">Back</span>
        </button>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col space-y-6 items-center w-full">
          <a
            href="#"
            className="text-xl font-medium py-4 w-full text-center rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a
            href="#features"
            className="text-xl font-medium py-4 w-full text-center rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
            onClick={closeMenu}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-xl font-medium py-4 w-full text-center rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
