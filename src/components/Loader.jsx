import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        className="inline-flex shrink-0 w-[48px] h-[48px] border-4 border-gray-300 border-t-black rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />

      <span className="ml-3 text-gray-300 font-bold italic text-3xl">
        "In the shadows, I find clarity. In the light, I find hope......"
      </span>
    </div>
  );
};

export default Loader;
