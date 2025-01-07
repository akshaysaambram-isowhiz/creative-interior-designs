import React from "react";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  social: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  index: number;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-purple-600">{role}</p>
      </div>
    </motion.div>
  );
};
