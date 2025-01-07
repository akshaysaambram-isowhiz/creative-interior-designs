import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-screen flex-col items-center justify-center gap-4"
    >
      <h1 className="text-6xl font-bold text-purple-500">404</h1>
      <p className="text-2xl">Page Not Found</p>
    </motion.section>
  );
}
