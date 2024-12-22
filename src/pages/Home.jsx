import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ScrollText from "../components/ScrollText";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Slider from "../components/slider";
import Header from "../components/Header";
import Stacks from "@/components/Stacks";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Stacks />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
