import React from "react";

function Hero() {
  const fs = [
    "full stack developer",
    "full stack developer",
    "full stack developer",
    "full stack developer",
    "full stack developer",
  ];

  const infiniteFs = Array.from({ length: 50 }, (_, i) => fs[i % fs.length]);
  return (
    <>
      <div className=" bg-black flex flex-col justify-between items-center w-full h-[120px] md:h-[200px]">
        <div className="overflow-hidden w-full relative">
          <ul className="flex w-[200%] animate-infinite-scroll-2 whitespace-nowrap">
            {infiniteFs.map((fss, index) => (
              <li
                key={index}
                className="px-4 text-3xl md:text-7xl font-silkscreen text-gray-500/50 md:text-gray-500"
              >
                {fss}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden w-full relative">
          <ul className="flex w-[200%] animate-infinite-scroll-1 whitespace-nowrap">
            {infiniteFs.map((fss, index) => (
              <li
                key={index}
                className="px-4 text-[2.5rem] md:text-8xl font-silkscreen text-white text-black-stroke outline-4 text-stroke-black"
              >
                {fss}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden w-full relative bg-white bg-opacity-0">
          <ul className="flex w-[200%] animate-infinite-scroll whitespace-nowrap bg-opacity-0">
            {infiniteFs.map((fss, index) => (
              <li
                key={index}
                className="px-4 text-3xl md:text-7xl font-silkscreen text-gray-500"
              >
                {fss}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hero;
