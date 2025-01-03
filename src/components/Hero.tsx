import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen items-center" id="home">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
          alt="Interior Design"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-purple-900/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mb-6 flex items-center justify-center space-x-2"
          >
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
              #1 Interior Design Studio in Hyderabad
            </span>
            <Star className="h-5 w-5 text-yellow-400" />
          </motion.div>

          <h1 className="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
            Level Up Your Space
            <br />
            <span className="text-purple-400">Stay Aesthetic ✨</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-200 md:text-2xl">
            Creating Insta-worthy spaces that reflect your vibe. Modern designs
            for the new generation.
          </p>

          <div className="hidden flex-col items-center justify-center gap-4 sm:flex-row lg:flex">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-full items-center space-x-2 rounded-full bg-purple-600 px-8 py-3 text-center font-medium text-white transition-colors hover:bg-purple-700 sm:w-auto"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-full items-center space-x-2 rounded-full bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto"
              onClick={() => {
                const element = document.getElementById("portfolio");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span>View Projects</span>
              <TrendingUp className="h-5 w-5" />
            </motion.button>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center justify-center space-x-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-gray-300">Awards</div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}
