import React from "react";
import Carousel from "./CarouselSlide";
import CarouselSlide from "./CarouselSlide";

const Projects = () => {
  const slides = [
    {
      heading: "Slide 1",
      image: "./src/assets/newt.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque quis labore accusantium praesentium vel magnam, consectetur similique reiciendis nihil. first slide.",
    },
    {
      heading: "Slide 2",
      image: "./src/assets/newt.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque quis labore accusantium praesentium vel magnam, consectetur similique reiciendis nihil. second slide.",
    },
    {
      heading: "Slide 3",
      image: "./src/assets/newt.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque quis labore accusantium praesentium vel magnam, consectetur similique reiciendis nihil. third slide.",
    },
    {
      heading: "Slide 4",
      image: "./src/assets/sky.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque quis labore accusantium praesentium vel magnam, consectetur similique reiciendis nihil. fourth slide.",
    },
    {
      heading: "Slide 5",
      image: "./src/assets/newt.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque quis labore accusantium praesentium vel magnam, consectetur similique reiciendis nihil. fifth slide.",
    },
  ];

  return (
    <div className=" bg-black relative flex">
      <div className=" flex-col md:flex-row flex items-center justify-start bg-black p-5 text-white overflow-hidden h-full w-full">
        <div
          className=" flex justify-center
         md:[writing-mode:vertical-lr] md:rotate-180 text-[rgba(171,171,171,0.32)] text-[7rem] relative w-fit"
        >
          <div className="hidden  md:block md:absolute md:text-[9.5rem] font-BeVietnamPro left-[1px]">
            Projects
          </div>
          <div className=" md:relative md:top-1 text-5xl md:text-[7rem] font-BeVietnamPro left-3 text-white">
            Projects
          </div>
        </div>
        <div className="md:w-[calc(100%-150px)] ml-auto">
          <CarouselSlide slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
