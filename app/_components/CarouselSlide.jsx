"use client";
import React, { useState, useEffect, useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import projectData from "@/data/projectdata";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  const slides = Object.values(projectData).map(
    ({ id, title, description, images }) => ({
      id,
      title,
      description,
      image: images[0].path,
    })
  );

  const updateVisibleSlides = useCallback(() => {
    if (window.innerWidth < 420) {
      setVisibleSlides(1.9);
    } else if (window.innerWidth < 470) {
      setVisibleSlides(1.7);
    }  else if (window.innerWidth < 700) {
      setVisibleSlides(1.5);
    } else if (window.innerWidth < 956) {
      setVisibleSlides(2);
    } else if (window.innerWidth < 1024) {
      setVisibleSlides(3);
    } else {
      setVisibleSlides(4);
    }
  }, []);

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, [updateVisibleSlides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleSlides >= slides.length ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="relative overflow-hidden w-full mt-6 ">
      <div className="  w-fit gap-5 flex md:justify-between mb-6">
        <button
          onClick={prevSlide}
          className={`  text-black bg-gray-200 p-2 rounded-full transition-all ${
            currentIndex === 0 ? " opacity-40 " : ""
          }`}
          disabled={currentIndex === 0}
        >
          <IoIosArrowBack className=" text-2xl" />
        </button>

        <button
          onClick={nextSlide}
          className={` text-black bg-gray-200 p-2 rounded-full transition-all ${
            currentIndex + visibleSlides >= slides.length ? " opacity-40" : ""
          }`}
          disabled={currentIndex + visibleSlides >= slides.length}
        >
          <IoIosArrowForward className=" text-2xl" />
        </button>
      </div>
      <div
        className="flex transition-transform ease-in-out duration-300"
        style={{
          transform: `translateX(-${(100 / visibleSlides) * currentIndex}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2"
            style={{ width: `${100 / visibleSlides}%` }}
          >
            <div className="h-[400px] bg-white rounded-lg p-3 flex flex-col items-center">
              <h2 className="text-lg flex items-center justify-center text-center h-16 font-semibold text-black mb-2">
                {slide.title}
              </h2>
              <Image
                src={slide.image}
                width={600}
                height={300}
                alt="title"
                className="border-black border object-cover w-full"
              />
              <p className="text-sm text-black h-24 flex items-center justify-center text-center">
                {slide.description}
              </p>
              <Link
                href={
                  slide.id == "dp"
                    ? `https://flic.kr/s/aHBqjBW3CX`
                    : `docs/${slide.id}`
                }
                target={slide.id == "dp" ? "_blank" : ""}
              >
                <button className="bg-black text-white mt-auto btn glass hover:text-black">
                  {slide.id == "dp" ? "Visit" : "More"}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
