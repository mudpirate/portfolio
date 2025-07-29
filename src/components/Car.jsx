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
          className=" py-3 md:p-6  flex flex-col  rounded-xl px-3 md:border-1 border-white/30  md:flex-row  items-center gap-4 md:gap-6  w-full"
        >
          <div className="">
            <img
              src={car.img}
              alt={car.title}
              className="w- h-40 md:w-80 md:h-40 border-2 border-white/30 object-fill rounded-xl shadow-lg mb-4 md:mb-0"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between h-full w-full">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-2 drop-shadow-lg text-center md:text-left">
              {car.title}
            </h3>
            <p className="text-white/90 mb-2 text-sm md:text-base leading-relaxed text-center md:text-left">
              {car.description}
            </p>

            {/* Technologies Header */}
            <div className="w-full">
              <p className="text-white font-semibold text-sm md:text-base bg-black px-4 py-2 rounded-md w-fit mx-auto md:mx-0 mb-2">
                Technologies Used
              </p>
            </div>

            {/* Technologies List */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
              {car.tech?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full border-2 capitalize border-gray-300 text-white text-xs sm:text-sm md:text-base font-medium shadow hover:bg-white/10 transition-all duration-150"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 md:gap-4 mt-auto justify-center md:justify-start">
              <a
                href={car.git}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-black text-white hover:bg-white/20 transition-all shadow-md hover:scale-105 text-sm md:text-base"
              >
                <FaGithub className="text-lg md:text-xl" />
                <span className="font-medium text-white">GitHub</span>
              </a>
              <a
                href={car.link}
                target="_blank"
                rel="noopener noreferrer"
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
