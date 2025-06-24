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
import { VscTerminalLinux, VscTools } from "react-icons/vsc";

const Skills = () => {
  const skills = [
    // { id: 1, icon: <RiHtml5Fill />, text: "HTML" },
    // { id: 2, icon: <FaCss3Alt />, text: "CSS" },
    { id: 1, icon: <RiReactjsLine />, text: "ReactJs" },

    { id: 3, icon: <DiJavascript />, text: "JS" },
    { id: 5, icon: <RiTailwindCssFill />, text: "Tailwind" },
    { id: 6, icon: <SiShadcnui />, text: "shadcn" },
    { id: 7, icon: <TbBrandFramerMotion />, text: " Motion" },

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
    <div className="h-full p-4 flex flex-col">
      <h2 className="text-2xl text-center text-white font-bold bg-gray-950 border-[0.5px] border-white/20 rounded-xl py-2 px-4 shadow-lg mb-4">
        Skills
      </h2>
      <div className="grid grid-cols-2 items-center gap-2 text-sm flex-1 ">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center gap-2 p-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <span className="text-white/90 text-lg">{skill.icon}</span>
            <span className="text-white/80 font-medium">{skill.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
