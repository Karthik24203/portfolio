import React from "react";
import Carousel from "./CarouselSlide";
import CarouselSlide from "./CarouselSlide";

const Projects = () => {
  return (
    <div className=" bg-black relative flex">
      <div className=" flex-col md:flex-row flex items-center justify-start bg-black p-5 text-white overflow-hidden h-full w-full">
        <div
          className=" flex justify-center
         md:[writing-mode:vertical-lr] md:rotate-180 text-[rgba(171,171,171,0.32)] text-[7rem] relative w-fit"
        >
          <div className="hidden mt-3 md:block md:absolute md:text-[9.5rem] font-BeVietnamPro left-[-20px]">
            Projects
          </div>
          <div className=" md:relative md:top-1 text-5xl md:text-[7rem] font-BeVietnamPro left-3 text-white">
            Projects
          </div>
        </div>
        <div className="md:w-[calc(100%-150px)] ml-auto">
          <CarouselSlide />
        </div>
      </div>
    </div>
  );
};

export default Projects;
