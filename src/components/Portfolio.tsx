import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram } from "lucide-react";

const projects = [
  {
    title: "Minimalist Dream",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
    likes: "15.2K",
    location: "Banjara Hills",
  },
  {
    title: "Cozy Vibes Only",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
    likes: "12.8K",
    location: "Jubilee Hills",
  },
  {
    title: "Kitchen Goals",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    likes: "18.5K",
    location: "Gachibowli",
  },
  {
    title: "Work Aesthetic",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    likes: "20.1K",
    location: "HITEC City",
  },
  {
    title: "Cafe Aesthetics",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80",
    likes: "16.9K",
    location: "Film Nagar",
  },
  {
    title: "Study Corner",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80",
    likes: "14.3K",
    location: "Madhapur",
  },
];

const categories = ["All", "Residential", "Commercial"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All" ? true : project.category === selectedCategory,
  );

  return (
    <section className="py-20" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-medium text-purple-600">Our Portfolio</span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Trending Designs 🔥
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Check out our most viral projects that are taking over social media.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-white">
                    <div className="mb-2 flex items-center space-x-2">
                      <Instagram className="h-4 w-4" />
                      <span className="text-sm">{project.likes} likes</span>
                    </div>
                    <h3 className="mb-1 text-2xl font-bold">{project.title}</h3>
                    <p className="text-purple-400">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
