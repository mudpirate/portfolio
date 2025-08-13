import { motion } from "framer-motion";
import web from "../assets/images/web.webp";

const Loader = () => {
  return (
    <div className="flex items-center  min-h-screen xl:justify-between bg-black text-center md:text-left">
      {/* Side Image (hidden on small screens) */}
      <img
        src={web}
        alt="Decorative loader background"
        className="hidden md:block w-1/3 h-[100vh] object-cover border-white"
      />

      {/* Loader + Text */}
      <div className="flex flex-col md:flex-col items-center xl:mx-auto gap-4 md:gap-6">
        {/* Spinner */}
        <motion.div
          className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          style={{ willChange: "transform" }}
          role="status"
          aria-label="Loading..."
        />

        {/* Quote */}
        <span className="text-gray-300 font-extralight italic text-2xl md:text-3xl max-w-xl">
          "Why do we fall, Bruce? So we can learn to pick ourselves up."
        </span>
        <div className="text-white font-medium text-2xl">
          ~ Alfred Pennyworth
        </div>
      </div>
    </div>
  );
};

export default Loader;
