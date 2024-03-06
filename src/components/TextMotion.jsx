import { motion } from "framer-motion";
export default function TextMotion() {
  const massage = "We are enjoying Reactive Accelerator course";

  const wordArray = massage.split(" ");
  return (
    <div className="text-center m-4 text-4xl">
      {wordArray.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index / 10 }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
}
