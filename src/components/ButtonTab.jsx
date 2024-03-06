import { motion } from "framer-motion";

export default function ButtonTab() {
  return (
    <>
      <motion.button
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}
        className="bg-sky-600 p-3 text-center text-white rounded-md w-24 m-2"
      >
        Tab me
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        className="bg-sky-600 p-3 text-center text-white rounded-md w-24"
      >
        Tab me
      </motion.button>
    </>
  );
}
