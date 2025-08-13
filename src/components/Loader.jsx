import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import web from "../assets/images/naina.png";

const Loader = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = web;
    img.onload = () => setImgLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen h-[100vh] w-full">
      {/* Background for small screens (black) */}
      <div className="block md:hidden absolute inset-0 text-white bg-black">
        <h1 className=" flex justify-center font-extralight italic text-2xl items-center h-[80vh]">
          "Why do we fall, Bruce? So we can learn to pick ourselves up."
        </h1>
      </div>

      {/* Background for medium+ screens (image) */}
      <div className=" hidden md:block absolute bg-black inset-0">
        {imgLoaded && (
          <motion.img
            src={web}
            alt="Decorative loader background"
            className="w-full h-full object-fill  border-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>

      {/* Loader Spinner (always centered) */}
      <motion.div
        className="absolute inset-0 md:inset-0 md:top-1/3 md:left-73   flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          style={{ willChange: "transform" }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
