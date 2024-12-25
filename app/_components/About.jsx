import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-5">
        <h2 className="text-center font-bold text-3xl md:text-5xl font-BeVietnamPro">
          About
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center mt-5 md:mt-10">
          <div className="md:w-72 md:h-72 w-52 h-52 rounded-full overflow-hidden">
            {/* <img src={newt} alt="newt" className="w-full h-full object-cover" /> */}
            <Image
              src={"/newt-t.jpg"}
              width={500}
              height={500}
              alt="profile"
              className=" w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col md:ml-12 w-96 font-BeVietnamPro">
            <h1 className="text-3xl text-center md:text-left font-bold font-BeVietnamPro mt-2">
              Karthik V
            </h1>
            <p className="mt-2 p-2 text-center md:text-xl md:text-left">
              Hi, I'm Karthik, a Full Stack Developer currently in my 4th year
              of engineering at Malnad College of Engineering. I'm passionate
              about building web applications and enjoy working on both
              front-end and back-end development to create seamless user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
