import Image from "next/image";
import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-5">
        <h2 className="text-center font-bold text-3xl md:text-5xl font-BeVietnamPro">
          About
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center mt-5 md:mt-10">
          <div className="md:w-72 md:h-72 w-52 h-52 rounded-full overflow-hidden flex flex-col">
            {/* <img src={newt} alt="newt" className="w-full h-full object-cover" /> */}
            <Image
              src={"/prof.jpg"}
              width={500}
              height={500}
              alt="profile"
              className=" w-full h-full object-cover grayscale "
            />
          </div>

          <div className="flex flex-col items-center md:items-start  md:ml-12 w-96 lg:w-[500px] font-BeVietnamPro">
            <h1 className="text-3xl text-center md:text-left font-bold font-BeVietnamPro mt-2">
              Karthik V
            </h1>
            <Link
              target="_blank"
              href={`https://drive.google.com/file/d/1ggxcs5W1dSBpu0lpm8yt1xNP-FWslfFh/view?usp=sharing`}
            >
              <button
                className=" mt-2 btn bg-black text-white w-fit hover:text-black hover:border-2
               hover:border-black"
              >
                Resume <SquareArrowOutUpRight />
              </button>
            </Link>
            <p className="mt-2 p-2 text-center md:text-xl md:text-left">
              Hi, I'm Karthik, a Full Stack Developer currently in my 4th year
              of engineering at Malnad College of Engineering. I'm passionate
              about building web applications and enjoy working on both
              front-end and back-end development to create seamless user
              experiences.
            </p>
            <div className=" mt-1">
              <h2 className=" text-2xl font-semibold flex gap-3 justify-center md:justify-start items-center">
                Experience <LiaCertificateSolid size={30} className="" />
              </h2>
              <div className=" border-black px-5 pb-5 mt-2 pt-3 rounded-lg border-2">
                <h3 className=" font-semibold text-xl">Intern</h3>
                <p className=" font-semibold">
                  Master Control Facility, ISRO,Hassan
                </p>
                <p className=" md:text-lg">
                  I landed the role as intern to develop a web dev software to
                  analyze satellite readings related to its position and orbit
                  and generate an alert if any major fluctuations in the
                  readings .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
