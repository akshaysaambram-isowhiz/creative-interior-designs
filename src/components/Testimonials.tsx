import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      text: "I love this service! It's so easy to use and the results are amazing.",
      stars: 5,
    },
    {
      name: "Jane Doe",
      text: "I was skeptical at first, but the quality of the designs is top-notch.",
      stars: 4,
    },
    {
      name: "Bob Smith",
      text: "I've never been more satisfied with a design service. The communication was excellent and the final product was perfect.",
      stars: 5,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 md:p-12 lg:p-16"
    >
      <h2 className="text-4xl font-bold text-purple-500">
        What our customers say
      </h2>
      <p className="mt-4 text-xl text-gray-600">
        Don't just take our word for it. Here's what some of our satisfied
        customers have to say about our service.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-white p-6 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src="https://avatars.githubusercontent.com/u/52684224?v=4"
                alt={testimonial.name}
                className="size-12 self-start rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.text}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="size-5 text-purple-400" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
