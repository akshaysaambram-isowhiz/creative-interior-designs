import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { services } from "./serviceData";

export const Services = () => {
  return (
    <section className="bg-gray-50 py-20" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-medium text-purple-600">Our Services</span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Design Services That Hit Different ✨
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Level up your space with our aesthetic design services. We create
            spaces that are both functional and social media-ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ServiceCard
                key={index}
                icon={<Icon className="h-8 w-8" />}
                title={service.title}
                description={service.description}
                tag={service.tag}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
