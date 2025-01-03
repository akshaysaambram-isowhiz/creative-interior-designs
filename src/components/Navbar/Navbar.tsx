import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sofa } from "lucide-react";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "./navData";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 0);

      // Update active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <Sofa
              className={`h-8 w-8 ${isScrolled ? "text-purple-600" : "text-black"}`}
            />
            <span
              className={`hidden md:block font-bold text-xl ${isScrolled ? "text-gray-900" : "text-black"}`}
            >
              Creative Interior Designs
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={activeSection === link.href}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled
                ? "text-gray-700 hover:text-purple-600"
                : "text-black hover:text-purple-200"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} activeSection={activeSection} />
    </header>
  );
};
