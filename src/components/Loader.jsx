import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="relative min-h-screen h-[100vh] w-full bg-black text-white flex flex-col items-center justify-center px-4 text-center">
      {/* Loader Spinner */}
      <motion.div
        className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{ willChange: "transform" }}
      />

      {/* Quote */}
      <motion.h1
        className="font-extralight italic text-2xl md:text-3xl max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        "Why do we fall, Bruce? So we can learn to pick ourselves up."
      </motion.h1>

      {/* Author */}
      <motion.div
        className="text-lg mt-3 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        ~ Alfred Pennyworth
      </motion.div>
    </div>
  );
};

export default Loader;
