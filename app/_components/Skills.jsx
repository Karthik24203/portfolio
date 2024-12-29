import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Skills = () => {
  const skills = {
    frontend: [
      { skill: "HTML", level: "Experienced" },
      { skill: "CSS", level: "Experienced" },
      { skill: "Tailwind CSS", level: "Intermediate" },
      { skill: "React", level: "Intermediate" },
      { skill: "Next.js", level: "Basic" },
    ],
    backend: [
      { skill: "PostgreSQL", level: "Intermediate" },
      { skill: "DrizzleORM", level: "Basic" },
      { skill: "Express.js", level: "Intermediate" },
      { skill: "Node.js", level: "Intermediate" },
      { skill: "Git", level: "Intermediate" },
    ],
    software: [
      { skill: "Azure DevOps", level: "Basic" },
      { skill: "Figma", level: "Intermediate" },
      { skill: "Photoshop", level: "Intermediate" },
      { skill: "Spline", level: "Basic" },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h2 className="text-center font-bold text-3xl md:text-5xl font-BeVietnamPro">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 mt-8">
        {/* Frontend Development */}
        <div
          className="flex flex-col items-center border-black border-2 rounded-3xl p-4 shadow-[5px_5px_0px_black] 
        hover:shadow-[1px_1px_0px_black] transition-shadow "
        >
          <h2 className="text-xl md:text-[1.6rem] font-bold text-center font-BeVietnamPro">
            Frontend Development
          </h2>
          <div className="flex justify-center w-full mt-3 py-5">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-5 gap-x-7">
              {skills.frontend.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaCircleCheck className="mt-1" />
                  <div>
                    <p className="font-semibold text-md md:text-lg font-BeVietnamPro">
                      {item.skill}
                    </p>
                    <p className="text-gray-500 font-BeVietnamPro">
                      {item.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div
          className="flex flex-col mt-5 md:mt-0 items-center border-black border-2 rounded-3xl p-4 
          shadow-[5px_5px_0px_black] 
        hover:shadow-[1px_1px_0px_black] transition-shadow"
        >
          <h2 className="text-xl md:text-[1.6rem] font-bold text-center font-BeVietnamPro">
            Backend Development
          </h2>
          <div className="flex justify-center w-full mt-3 py-5">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-5 gap-x-7">
              {skills.backend.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaCircleCheck className="mt-1" />
                  <div>
                    <p className="font-semibold text-md md:text-lg font-BeVietnamPro">
                      {item.skill}
                    </p>
                    <p className="text-gray-500 font-BeVietnamPro">
                      {item.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Software (Spans 2 columns) */}
        <div
          className="flex flex-col items-center border-black border-2 rounded-3xl col-span-1 md:col-span-2 mt-5 p-4
        shadow-[5px_5px_0px_black] 
        hover:shadow-[1px_1px_0px_black] transition-shadow"
        >
          <h2 className="text-xl md:text-[1.6rem] font-bold text-center font-BeVietnamPro">
            Software
          </h2>
          <div className="grid grid-cols-2 gap-5 gap-x-7 md:flex md:flex-wrap justify-center md:gap-10 self-center w-full mt-3 py-5">
            {skills.software.map((item, index) => (
              <div className="flex" key={index}>
                <div className="flex items-start space-x-2 mx-3">
                  <FaCircleCheck className="mt-2" />
                  <div>
                    <p className="font-semibold text-md md:text-lg font-BeVietnamPro">
                      {item.skill}
                    </p>
                    <p className="text-gray-500 font-BeVietnamPro">
                      {item.level}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
