"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Load from "../assets/images/load.png";
import Bento from "./Bento"; // your main app

export default function MotionProgress() {
  const [progress, setProgress] = useState(0);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const totalDuration = 2000; // total duration in ms (7 sec)
    const steps = 100; // how many steps to reach 100%
    const stepDuration = totalDuration / steps; // time per step

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowPortfolio(true), 500); // wait 0.5s after full bar
        }
        return next;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  if (showPortfolio) return <Bento isMobile={false} />;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-4">
      <div className="mb-10">
        <img
          src={Load}
          alt="Loading..."
          className="w-32 md:w-48 xl:w-60 object-contain"
        />
      </div>

      <div className="w-full max-w-sm md:max-w-lg xl:max-w-2xl h-2 flex bg-black items-center justify-center rounded overflow-hidden">
        <motion.div
          className="h-full  rounded-xl bg-gray-600"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </div>
  );
}
