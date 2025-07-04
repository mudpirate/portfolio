import { BiLogoPostgresql } from "react-icons/bi";
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

const Skills = () => {
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
    { id: 1, icon: <RiReactjsLine />, text: "ReactJs" },
    { id: 2, icon: <ZustandIcon />, text: "Zustand" },
    { id: 3, icon: <DiJavascript />, text: "JS" },
    { id: 5, icon: <RiTailwindCssFill />, text: "Tailwind" },
    { id: 6, icon: <SiShadcnui />, text: "shadcn" },
    { id: 7, icon: <TbBrandFramerMotion />, text: "Motion" },
    { id: 9, icon: <IoLogoNodejs />, text: "NodeJS" },
    { id: 10, icon: <SiExpress />, text: "Express" },
    { id: 14, icon: <FaGitAlt />, text: "Git" },
    { id: 17, icon: <TbHexagonLetterC />, text: "C" },
    { id: 20, icon: <SiVercel />, text: "Vercel" },
    { id: 11, icon: <SiPostman />, text: "Postman" },
    { id: 15, icon: <FaGithub />, text: "GitHub" },
    { id: 4, icon: <TbBrandTypescript />, text: "TS" },
    { id: 18, icon: <TbBrandCpp />, text: "C++" },
    { id: 13, icon: <SiMongodb />, text: "Mongo" },
  ];

  return (
    <div className="h-full p-2 flex flex-col">
      <h2 className="text-2xl text-center text-white font-bold bg-gray-950 border border-white/20 rounded-xl py-2 px-4 shadow-lg mb-4">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
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

      <div className="mt-4 p-2 rounded-lg bg-white/10 border border-white/10 text-white/80 font-bold text-center">
        Learning more stuff gradually...
      </div>
    </div>
  );
};

export default Skills;
