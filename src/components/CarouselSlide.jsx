import React, { useState, useEffect, useCallback } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import pdfreaderone from "../../public/pdf-reader/one.jpg";
import projectData from "@/data/projectdata";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  const slides = Object.values(projectData).map(
    ({ id, title, description }) => ({
      id,
      title,
      description,
    })
  );
  const navigate = useNavigate();

  const updateVisibleSlides = useCallback(() => {
    if (window.innerWidth < 640) {
      setVisibleSlides(1);
    } else if (window.innerWidth < 768) {
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

  const handleDetailsClick = (id) => {
    navigate(`/docs/${id}`);
  };

  return (
    <div className="relative overflow-hidden w-full mt-6">
      <div
        className="flex transition-transform ease-in-out duration-300"
        style={{
          transform: `translateX(-${(100 / visibleSlides) * currentIndex}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-1"
            style={{ width: `${100 / visibleSlides}%` }}
          >
            <div className="h-full bg-white rounded-lg p-3 flex flex-col items-center">
              <h2 className="text-lg font-semibold text-black mb-2">
                {slide.title}
              </h2>
              <img
                src={pdfreaderone}
                alt={`Slide ${index + 1}`}
                className=" object-cover w-full mb-2"
              />
              <p className="text-sm text-black text-center">
                {slide.description}
              </p>{" "}
              <button
                onClick={() => handleDetailsClick(slide.id)}
                className=" bg-black text-white mt-auto btn glass hover:text-black"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 p-2 rounded-full"
        disabled={currentIndex === 0}
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 p-2 rounded-full"
        disabled={currentIndex + visibleSlides >= slides.length}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel;
