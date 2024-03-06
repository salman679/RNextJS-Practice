import { motion } from "framer-motion";

export default function KeyFrame() {
  return (
    <motion.div
      animate={{
        borderRadius: ["0%", "20%", "50%", "50%", "20%"],
        rotate: [0, 90, 180, 270, 0],
        scale: [1, 1, 2, 2, 1],
      }}
      transition={{ duration: 1.7 }}
      className="border bg-blue-500 h-32 w-32 m-4"
    />
  );
}
