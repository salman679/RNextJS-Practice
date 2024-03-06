import { motion } from "framer-motion";

export default function TransitionType() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8 }}
        className="mb-2"
      >
        <h1>Learning Animation</h1>
        <p>We love Animation, We love Enjoying it a lot, Framer Motion</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.8 }}
        className="mb-2"
      >
        <h1>Learning Animation</h1>
        <p>We love Animation, We love Enjoying it a lot, Framer Motion</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.7, duration: 1.8 }}
        className="mb-2"
      >
        <h1>Learning Animation</h1>
        <p>We love Animation, We love Enjoying it a lot, Framer Motion</p>
      </motion.div>
    </>
  );
}
