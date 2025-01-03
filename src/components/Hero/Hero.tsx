import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { Carousel } from "./Carousel";
import { heroSlides } from "./heroData";

import hero1 from "../../assets/hero1.avif";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative flex min-h-screen items-center" id="home">
      <Carousel
        slides={heroSlides}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      >
        {/* {(slide) => (
          <>
            <div className="absolute inset-0">
              <img
                src={hero1}
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
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                    #1 Interior Design Studio in Hyderabad
                  </span>
                  <Star className="h-5 w-5 text-yellow-400" />
                </motion.div>

                <h1 className="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
                  {slide.title}
                  <br />
                  <span className="text-purple-400">{slide.subtitle}</span>
                </h1>

                <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-200 md:text-2xl">
                  {slide.description}
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex w-full items-center space-x-2 rounded-full bg-purple-600 px-8 py-3 font-medium text-white transition-colors hover:bg-purple-700 sm:w-auto"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex w-full items-center space-x-2 rounded-full bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto"
                  >
                    <span>View Projects</span>
                    <TrendingUp className="h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </>
        )} */}
      </Carousel>
    </div>
  );
};
