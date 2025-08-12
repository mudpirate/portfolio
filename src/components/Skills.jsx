import { BiLogoPostgresql } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { FaGitAlt, FaGithub } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { FaPython } from "react-icons/fa";

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
import { SiRedux } from "react-icons/si";

const Skills = ({ ref }) => {
  // Custom Zustand SVG icon
  const ZustandIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );

  const skills = [
    { id: 8, icon: <RiNextjsLine />, text: "NextJs" },

    { id: 10, icon: <SiExpress />, text: "Express" },
    { id: 1, icon: <RiReactjsLine />, text: "ReactJs" },
    { id: 2, icon: <ZustandIcon />, text: "Zustand" },
    { id: 3, icon: <DiJavascript />, text: "JS" },
    { id: 5, icon: <RiTailwindCssFill />, text: "Tailwind" },
    { id: 6, icon: <SiShadcnui />, text: "shadcn" },
    { id: 7, icon: <TbBrandFramerMotion />, text: "Motion" },
    { id: 16, icon: <SiRedux />, text: "Redux" },
    { id: 9, icon: <IoLogoNodejs />, text: "NodeJS" },

    { id: 14, icon: <FaGitAlt />, text: "Git" },
    { id: 17, icon: <TbHexagonLetterC />, text: "C" },
    { id: 20, icon: <SiVercel />, text: "Vercel" },
    { id: 11, icon: <SiPostman />, text: "Postman" },
    { id: 15, icon: <FaGithub />, text: "GitHub" },
    { id: 4, icon: <TbBrandTypescript />, text: "TS" },
    { id: 18, icon: <TbBrandCpp />, text: "C++" },
    { id: 13, icon: <SiMongodb />, text: "Mongo" },
    { id: 12, icon: <BiLogoPostgresql />, text: "PostgreSQL" },
    { id: 19, icon: <FaPython />, text: "Python" },
  ];

  return (
    <div ref={ref} className="h-full  flex flex-col">
      <div className="flex justify-center mb-4">
        <h1 className="text-2xl text-center w-70  font-bold text-white border mb-2">
          Skills
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm xl:grid-cols-3 xl:mt-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center gap-2 p-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <span className="text-white/90 text-lg">{skill.icon}</span>
            <span className="text-white/80 font-medium truncate">
              {skill.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
