import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sofa } from "lucide-react";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "./navData";

export default function Navbar() {
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
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <Sofa className="h-8 w-8 text-purple-600" />
            <span
              className={`hidden text-xl font-bold md:block ${isScrolled ? "text-black" : "text-white"}`}
            >
              Creative Interior Designs
            </span>
          </motion.div>

          <nav className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={activeSection === link.href}
                scrolled={isScrolled}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-md p-2 transition-colors md:hidden ${
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
}
