import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { features } from "./featuresData";

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-medium">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What Makes Us Different? 💫
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't just design spaces; we create experiences that resonate
            with the new generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
