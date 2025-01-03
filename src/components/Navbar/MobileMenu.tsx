import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "./navData";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeSection,
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg shadow-lg"
      >
        <nav className="px-4 py-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileTap={{ scale: 0.95 }}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                activeSection === link.href
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
);
