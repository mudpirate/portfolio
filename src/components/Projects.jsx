import React from "react";
import Card from "./Card";

const Projects = ({ isMobile, ref }) => {
  return (
    <div ref={ref}>
      <div
        className={`moving-border  ${
          !isMobile ? "row-span-2" : ""
        }  border rounded-xl bg-white/10  border-gray-400 w-[80vw] p-3  shadow-xl  flex flex-col   `}
      >
        <div className="flex justify-center mb-2 ">
          <h2 className="text-2xl text-center w-70 text-white font-bold bg-gray-950 border-[0.5px] border-white/30 rounded-xl py-2 px-4 shadow-lg mb-2">
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
