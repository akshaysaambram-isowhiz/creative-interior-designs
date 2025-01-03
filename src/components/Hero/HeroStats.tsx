import { motion } from "framer-motion";

export const HeroStats = () => {
  return (
    <motion.div
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
    </motion.div>
  );
};
