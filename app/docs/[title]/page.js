"use client";
import React from "react";
import projectData from "@/data/projectdata";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { OctagonXIcon, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

function Docs() {
  const { title } = useParams();
  const project = projectData[title];

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <h2 className="font-BeVietnamPro flex flex-row text-3xl justify-center items-center font-semibold text-center mt-8">
          {project?.title}
          <span>
            {project?.visit ? (
              <Link target="_blank" href={project.visit}>
                <SquareArrowOutUpRight className=" ml-3 mr-3  hover:text-blue-500" />
              </Link>
            ) : (
              ""
            )}
          </span>
        </h2>
        <p className="font-BeVietnamPro text-lg md:text-xl text-center w-5/6 md:w-2/3 text-gray-500 mt-5">
          {project?.description1}
        </p>

        {project?.visit ? (
          <Link target="_blank" href={project.visit}>
            <button className=" btn bg-black glass text-white mt-4">
              Visit
            </button>
          </Link>
        ) : (
          <p className=" flex gap-2 text-gray-400 mt-5 text-xl justify-center items-center">
            {" "}
            <OctagonXIcon className=" text-red-400" /> Not hosted{" "}
          </p>
        )}
        <div className="mt-6 flex flex-col items-center">
          <h2 className="font-BeVietnamPro text-2xl font-semibold text-center">
            Tech Stack
          </h2>
          <div className="flex p-5 gap-4 mt-4 flex-wrap justify-center">
            {project?.techStack.map((tech, index) => (
              <p
                key={index}
                className="p-5 text-md md:text-xl font-BeVietnamPro bg-slate-200 rounded-lg text-center"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>{" "}
      <h2 className=" text-2xl mt-6 font-semibold text-center">Pages</h2>
      <div className="flex flex-wrap justify-center items-center p-2 gap-4 md:gap-10">
        {project?.images.map((image, index) => (
          <div key={index} className="relative w-auto">
            {/* Wrap the Image with a container that ensures its size */}
            <div className="relative w-[350px] md:w-[400px] h-auto">
              <Image
                src={image.path}
                width={400}
                height={400} // You can adjust this to the image height you desire
                alt={image.name}
                className="border-2 border-black rounded-xl"
              />

              {/* Hover overlay */}
              <div className=" flex md:hidden text-center justify-center font-medium text-xl p-2 rounded-lg bg-slate-200">
                <p> {image.name}</p>
              </div>
              <div
                className="hidden absolute inset-0 bg-black/50 md:flex items-center justify-center rounded-2xl
          opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <h2 className="font-BeVietnamPro text-white text-3xl font-semibold text-center">
                  {image.name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Docs;
