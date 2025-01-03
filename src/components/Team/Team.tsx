import { motion } from "framer-motion";
import { TeamMember } from "./TeamMember";
import { teamMembers } from "./teamData";

export default function Team() {
  return (
    <section className="bg-purple-100 py-20" id="team">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-medium text-purple-600">Our Team</span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Meet Our Design Visionaries 🎨
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A creative collective of design enthusiasts who turn ordinary spaces
            into extraordinary experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
