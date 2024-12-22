import React, { useState, useRef, useEffect } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (carouselRef.current) {
        const slideElement =
          carouselRef.current.querySelector(".flex-shrink-0");
        if (slideElement) {
          setSlideWidth(slideElement.offsetWidth);
        }
      }
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);

    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  const nextSlide = () => {
    if (carouselRef.current) {
      const totalSlides = slides.length;
      const maxIndex =
        totalSlides - Math.floor(carouselRef.current.offsetWidth / slideWidth);
      setCurrentIndex((prevIndex) =>
        prevIndex < maxIndex ? prevIndex + 1 : maxIndex
      );
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const isAtStart = currentIndex === 0;

  return (
    <div className="relative mx-auto overflow-hidden" ref={carouselRef}>
      <div
        className="flex transition-transform duration-500 ease-in-out gap-5 bg-transparent h-full"
        style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[350px] bg-white rounded-2xl p-5 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold text-black mb-2">
              {slide.heading}
            </h2>
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-[320px] h-[320px] object-cover mb-2"
            />
            <p className="text-sm text-black text-center">
              {slide.description}
            </p>
          </div>
        ))}
      </div>

      <div className=" md:absolute top-1 right-5 flex">
        {!isAtStart && (
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-12 h-12 bg-black/60 text-white text-3xl rounded-full z-10 mr-3"
          >
            {" "}
            <FaCaretLeft />
          </button>
        )}
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-12 h-12 bg-black/60 text-white text-3xl rounded-full z-10"
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
