import React from "react";

function Slider() {
  const fs = [
    "full stack developer",
    "full stack developer",
    "full stack developer",
    "full stack developer",
    "full stack developer",
  ];

  // Generate a long array dynamically to simulate infinity
  const infiniteFs = Array.from({ length: 50 }, (_, i) => fs[i % fs.length]); // Repeat `fs` array 50 times

  return (
    <div className="overflow-hidden w-full relative">
      <ul className="flex w-[200%] animate-infinite-scroll whitespace-nowrap">
        {infiniteFs.map((fss, index) => (
          <li key={index} className="px-4">
            {fss}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Slider;
