import React from "react";
import { DiJavascript } from "react-icons/di";

import { FaGitAlt, FaGithub } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import {
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiShadcnui,
  SiVercel,
} from "react-icons/si";
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandTypescript,
  TbHexagonLetterC,
} from "react-icons/tb";

const Car = ({ cars }) => {
  return (
    <div className="flex flex-col gap-8">
      {cars.map((car) => (
        <div
          key={car.id}
          className="p-4 md:p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-4 md:gap-6 border border-white/30 w-full"
        >
          <img
            src={car.img}
            alt={car.title}
            className="w-full h-40 md:w-60 md:h-40 border-2 border-white/30 object-cover rounded-xl shadow-lg mb-4 md:mb-0"
          />
          <div className="flex-1 flex flex-col justify-between h-full w-full">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-2 drop-shadow-lg text-center md:text-left">
              {car.title}
            </h3>
            <p className="text-white/90 mb-4 text-sm md:text-base leading-relaxed text-center md:text-left">
              {car.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-4 justify-center md:justify-start">
              <span className="bg-white/30 px-2 py-1 rounded text-xs text-white font-semibold flex items-center gap-1">
                <RiReactjsLine className="text-cyan-500" /> React
              </span>
              <span className="bg-white/30 px-2 py-1 rounded text-xs text-white font-semibold flex items-center gap-1">
                <SiExpress className="text-white" /> Express
              </span>
              <span className="bg-white/30 px-2 py-1 rounded text-xs text-white font-semibold flex items-center gap-1">
                <SiMongodb className="text-green-700" /> MongoDB
              </span>
              <span className="bg-white/30 px-2 py-1 rounded text-xs text-white font-semibold flex items-center gap-1">
                <SiShadcnui className="text-purple-700" /> ShadcnUI
              </span>
              <span className="bg-white/30 px-2 py-1 rounded text-xs text-white font-semibold flex items-center gap-1">
                <RiTailwindCssFill className="text-sky-400" /> Tailwind
              </span>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4 mt-auto justify-center md:justify-start">
              <a
                href={car.git}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-black text-white hover:bg-white/20 transition-all shadow-md hover:scale-105 text-sm md:text-base"
              >
                <FaGithub className="text-lg md:text-xl" />
                <span className="font-medium text-white">GitHub</span>
              </a>
              <a
                href={car.link}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-white/30 hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md hover:scale-105 text-sm md:text-base"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M3.9 12a5 5 0 0 1 5-5h3a1 1 0 1 1 0 2h-3a3 3 0 1 0 0 6h3a1 1 0 1 1 0 2h-3a5 5 0 0 1-5-5zm7-1a1 1 0 0 1 1-1h3a5 5 0 1 1 0 10h-3a1 1 0 1 1 0-2h3a3 3 0 1 0 0-6h-3a1 1 0 0 1-1-1z" />
                </svg>
                <span className="font-medium text-white">Live Preview</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Car;
