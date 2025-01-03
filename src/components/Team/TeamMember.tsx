import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";

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
  image,
  social,
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
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex justify-center space-x-4 mb-4">
              {social.instagram && (
                <a
                  href={social.instagram}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-purple-600">{role}</p>
      </div>
    </motion.div>
  );
};
