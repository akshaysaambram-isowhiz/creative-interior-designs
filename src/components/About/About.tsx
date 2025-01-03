import { motion } from "framer-motion";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80"
              alt="Interior Design Team"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-600 font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Spaces into
              <span className="text-purple-600">
                {" "}
                Social Media Sensations
              </span>{" "}
              ✨
            </h2>
            <p className="text-gray-600 mb-8">
              Born in 2020, Creative Interior Designs has revolutionized the
              interior design game in Hyderabad. We're not just designers; we're
              creators of viral-worthy spaces that tell your unique story.
            </p>

            <Stats />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
