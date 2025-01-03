import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { features } from "./featuresData";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20" id="why-choose-us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-medium text-purple-600">Why Choose Us</span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            What Makes Us Different? 💫
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We don't just design spaces; we create experiences that resonate
            with the new generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
