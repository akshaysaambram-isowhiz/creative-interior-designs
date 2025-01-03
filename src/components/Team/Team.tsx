import { motion } from "framer-motion";
import { TeamMember } from "./TeamMember";
import { teamMembers } from "./teamData";

export const Team = () => {
  return (
    <section className="py-20 bg-gray-50" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-medium">Our Team</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Design Visionaries 🎨
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A creative collective of design enthusiasts who turn ordinary spaces
            into extraordinary experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
