import React from "react";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isActive,
}) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    href={href}
    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
    }`}
  >
    {children}
    {isActive && (
      <motion.div
        layoutId="activeSection"
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600"
      />
    )}
  </motion.a>
);
