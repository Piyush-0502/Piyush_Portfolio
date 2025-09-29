import React from "react";
import Video from "./Video";
import "./hometop.css";

const Hometop = () => {
  return (
    <>
      <div className="font-[font1] pt-5 text-center pl-10 lg:mt-50 mt-15 bg-transparent ">
        <div className="lg:text-[7vw] text-[12vw] flex items-center uppercase lg:leading-[6vw] leading-[15vw]">
          Piyush
        </div>
        <div className="lg:text-[7vw] text-[12vw] flex items-center uppercase lg:leading-[6vw] leading-[15vw]">
          Ghorapade
        </div>
        <div className="flex items-center gap-2 uppercase lg:leading-[4vw] leading-[15vw]">
          <span className="lg:text-[5vw] text-[12vw]">Web</span>
          <div className="h-[7vw] mb-4 rounded-full overflow-hidden">
            <Video />
          </div>
        </div>
        <div className="lg:text-[5vw] text-[12vw] flex items-center uppercase lg:leading-[4vw] leading-[15vw]">
          Developer
        </div>
      </div>
    </>
  );
};

export default Hometop;
