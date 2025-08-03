import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = ({ onScrollTo }) => {
  const [displayText, setDisplayText] = useState("");

  const [show, setShow] = useState(false);

  useEffect(() => {
    // Start the animation after component mounts
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -100 }} // starts off-screen
      animate={{ opacity: 1, x: 0 }} // slides in
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className=" py-4  backdrop-blur-md w-full md:w-[90vw] max-w-screen-xl mx-auto px-4 md:px-4 md:py-3 flex justify-center md:justify-between gap-10 border border-gray-400 bg-white/10  items-center rounded-lg"
    >
      <motion.div className="flex  gap-2 sm:gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-white bg-gray-950 border border-gray-400 px-2 py-1 sm:px-8 sm:py-2 rounded-lg"
        >
          Home
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => onScrollTo("skills")}
          className="text-white bg-gray-950 border border-gray-400 px-2 py-1 sm:px-8 sm:py-2 rounded-lg"
        >
          Skills
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => onScrollTo("projects")}
          className="text-white bg-gray-950 border border-gray-400 px-2 py-1 sm:px-8 sm:py-2 rounded-lg"
        >
          Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => onScrollTo("contact")}
          className="text-white bg-gray-950 border border-gray-400 px-2 py-1 sm:px-8 sm:py-2 rounded-lg"
        >
          Contact
        </motion.button>
      </motion.div>
      <motion.p
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`text-lg md:block transition-all  ${
          show ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-full"
        } ease-in-out duration-500 hidden font-bold  text-white`}
      >
        Made With 🖤 By Nomesh
      </motion.p>
    </motion.nav>
  );
};

export default Navbar;
