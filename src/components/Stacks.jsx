import { DotIcon } from "lucide-react";
import React from "react";

function Stacks() {
  return (
    <div className="bg-black p-5">
      <h2 className="text-center font-bold text-white text-3xl md:text-5xl font-BeVietnamPro">
        Tech Stack
      </h2>
      <div className="grid md:grid-cols-2 mt-8">
        {/* Left Grid - Current */}
        <div className="flex flex-col items-center border-b-2 md:border-b-0 md:border-r-2 border-gray-400">
          <h2 className="text-center text-gray-500 text-2xl md:text-3xl font-semibold font-silkscreen">
            Current
          </h2>
          <img
            src="./src/assets/stack.jpg"
            className=" h-[350px] md:h-[450px]"
            alt="stack"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-gray-500 text-2xl md:mt-0 mt-4 md:text-3xl font-semibold font-silkscreen">
            Upgrading to
          </h2>
          <img
            src="./src/assets/stack2.jpg"
            className="h-[350px] md:h-[450px]"
            alt="stack"
          />
        </div>
      </div>
    </div>
  );
}

export default Stacks;
