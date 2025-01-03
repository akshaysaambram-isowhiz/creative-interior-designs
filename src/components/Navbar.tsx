import React from "react";
import { motion } from "framer-motion";
import { Menu, X, Sofa } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transform duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } ${isOpen && "bg-purple-200"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <Sofa className="size-8 text-purple-600" />
            <span
              className={`hidden text-xl font-bold lg:block ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Creative Interior Designs
            </span>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#home" isScrolled={isScrolled}>
                Home
              </NavLink>
              <NavLink href="#services" isScrolled={isScrolled}>
                Services
              </NavLink>
              <NavLink href="#portfolio" isScrolled={isScrolled}>
                Portfolio
              </NavLink>
              <NavLink href="#contact" isScrolled={isScrolled}>
                Contact
              </NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hover:text-purple-600" rounded-md p-2 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="space-y-1 bg-purple-200 px-2 pb-3 pt-2 sm:px-3">
            <MobileNavLink href="#home" isScrolled={isScrolled}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#services" isScrolled={isScrolled}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#portfolio" isScrolled={isScrolled}>
              Portfolio
            </MobileNavLink>
            <MobileNavLink href="#contact" isScrolled={isScrolled}>
              Contact
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    href={href}
    className={`rounded-full px-3 py-2 text-sm font-medium hover:bg-purple-50 hover:text-purple-600 ${
      isScrolled ? "text-black" : "text-white"
    }`}
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}) => (
  <motion.a
    whileTap={{ scale: 0.95 }}
    href={href}
    className={`block rounded-md px-3 py-2 text-base font-medium hover:text-purple-600 ${
      isScrolled ? "text-white" : "text-black"
    }`}
  >
    {children}
  </motion.a>
);
