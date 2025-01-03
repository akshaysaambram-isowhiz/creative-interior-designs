import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
} from "lucide-react";

import hero1 from "../../assets/hero1.avif";

interface CarouselProps {
  slides: any[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  // children: (slide: any) => React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  currentIndex,
  setCurrentIndex,
  // children,
}) => {
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    const newIndex =
      (currentIndex + newDirection + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
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

                {/* <h1 className="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
                  {slide.title}
                  <br />
                  <span className="text-purple-400">{slide.subtitle}</span>
                </h1>

                <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-200 md:text-2xl">
                  {slide.description}
                </p> */}

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
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-6 bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
