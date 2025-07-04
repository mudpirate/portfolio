import React from "react";
import Card from "./Card";

const Projects = ({ isMobile }) => {
  return (
    <div>
      <div
        className={`moving-border ml-2 mr-5 backdrop-blur-lg ${
          !isMobile ? "row-span-2" : ""
        } bg-white/10 rounded-2xl shadow-xl p-3 flex flex-col shiny-gradient  `}
      >
        <div className="flex justify-center mb-2 ">
          <h2 className="text-2xl text-center w-70 text-white font-bold bg-gray-950 border-[0.5px] border-white/20 rounded-xl py-2 px-4 shadow-lg mb-2">
            Projects
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Projects;
