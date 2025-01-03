import { motion } from "framer-motion";
import { Stats } from "./Stats";

export default function About() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
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
            <span className="font-medium text-purple-600">About Us</span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Transforming Spaces into
              <span className="text-purple-600">
                {" "}
                Social Media Sensations
              </span>{" "}
              ✨
            </h2>
            <p className="mb-8 text-gray-600">
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
}
