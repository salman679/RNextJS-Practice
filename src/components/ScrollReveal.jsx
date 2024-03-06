import { motion } from "framer-motion";

const Box = ({ text }) => {
  return (
    <motion.div
      className="w-32 h-32 border rounded-sm bg-pink-500 text-black m-4 text-center"
      initial={{ opacity: 0, x: "-50" }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
  );
};

export default function ScrollReveal() {
  const gratings = ["Hello", "Hollo", "Welcome", "Come In", "raihan", "salman"];
  return (
    <div>
      {gratings.map((grating, index) => (
        <Box key={index} text={grating} />
      ))}
    </div>
  );
}
