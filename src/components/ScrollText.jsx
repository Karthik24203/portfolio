import React from "react";

function ScrollText() {
  const className = "decentralised";
  return (
    <div
      className={`${className}__movingTexts w-full flex flex-row overflow-hidden whitespace-nowrap animate-marquee`}
    >
      <h1 className="text-9xl mx-4">Lorem, ipsum dolor.</h1>
      <h1 className="text-9xl mx-4">Lorem, ipsum dolor.</h1>
      <h1 className="text-9xl mx-4">Lorem, ipsum dolor.</h1>
    </div>
  );
}

export default ScrollText;
