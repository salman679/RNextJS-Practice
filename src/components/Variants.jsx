import { motion } from "framer-motion";

const ShapeVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: 1.8,
    duration: 2,
    type: "spiring",
  },
};

const childVariants = {
  whileHover: { scale: 2, transition: { duration: 1 } },
};

export default function Variants() {
  return (
    <motion.div
      variants={ShapeVariants}
      initial="initial"
      animate="animate"
      transition="transition"
      className="bg-green-600 w-32 h-32 rounded-md border m-4"
    >
      <motion.div
        className="bg-red-500 rounded-full w-14 h-14 border-white border"
        variants={childVariants}
        whileHover="whileHover"
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}
