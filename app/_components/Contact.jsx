import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
function Contact() {
  return (
    <div className=" flex flex-col justify-evenly md:justify-between items-center  h-96 md:mt-10">
      <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl font-BeVietnamPro">
        Contact
      </h2>
      <div
        className=" items-center md:flex-row text-lg md:text-xl lg:text-2xl flex-col flex gap-2  font-BeVietnamPro p-2 md:p-8 lg:p-16 
      rounded-lg border-4 border-black "
      >
        <a
          className=" hover:text-blue-400 hover:scale-105 transition-all flex items-center md:mt-0 mt-2 md:mr-16"
          href="mailto:karthik24203@gmail.com"
        >
          <IoMdMail className=" mr-2 " />
          karthik24203@gmail.com
        </a>
        <a
          className=" hover:text-blue-400 hover:scale-105 transition-all flex items-center md:mt-0 mt-2 md:mr-16"
          href="https://www.linkedin.com/in/karthik-v-8b83a8229/"
          target="_blank"
        >
          <FaLinkedin className=" mr-2 " />
          LinkedIn
        </a>
        <a
          className=" hover:text-blue-400 hover:scale-105 transition-all flex items-center
         md:mt-0 mt-2 md:mr-16"
          href="https://github.com/Karthik24203"
          target="_blank"
        >
          {" "}
          <FaGithub className=" mr-2 " />
          GitHub
        </a>
      </div>
      <h3 className=" flex items-center text-lg md:text-xl font-BeVietnamPro text-slate-400">
        Copyright
        <FaRegCopyright />
        Karthik . All Rights Reserved
      </h3>
    </div>
  );
}

export default Contact;
