import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  tag,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <div className="text-purple-600 mb-4">{icon}</div>
        <span className="absolute top-0 right-0 bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
          {tag}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
