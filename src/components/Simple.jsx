import { motion } from "framer-motion";

export default function Simple() {
  return (
    <motion.div
      className="bg-red-500 rounded-full h-32 w-32 border"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}
