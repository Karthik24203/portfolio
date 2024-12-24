import React from "react";
import projectData from "../data/projectdata";
import { useParams } from "react-router-dom";

function Docs() {
  const { title } = useParams();
  const project = projectData[title];

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <h2 className="font-BeVietnamPro text-3xl font-semibold text-center mt-8">
          {project.title}
        </h2>
        <p className="font-BeVietnamPro text-xl text-center text-gray-500 mt-5">
          {project.description}
        </p>
        <div className="mt-6 flex flex-col items-center">
          <h2 className="font-BeVietnamPro text-xl text-center">Tech Stack:</h2>
          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            {project.techStack.map((tech, index) => (
              <p
                key={index}
                className="p-5 text-xl font-BeVietnamPro bg-slate-200 rounded-lg text-center"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex p-10 gap-10">
        {project.images.map((image, index) => (
          <div key={index} className="relative w-1/2">
            <img
              src="../../public/pdf-reader/one.jpg"
              className="w-full object-cover rounded-2xl"
              alt={image.name}
            />
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl
           opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <h2 className="font-BeVietnamPro text-white text-3xl font-semibold">
                {image.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Docs;
