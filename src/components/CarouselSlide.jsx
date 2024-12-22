import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function CarouselSlide({ slides }) {
  const [sliderRef] = useKeenSlider({
    centered: true,
    breakpoints: {
      "(max-width: 700px)": {
        slides: { perView: 2, spacing: 5 },
      },
    },
    slides: { perView: 4, spacing: 5 },
    mode: "free",
  });

  return (
    <div ref={sliderRef} className="keen-slider flex gap-2 mt-6">
      {slides.map((slide, index) => (
        <div key={index} className={`keen-slider__slide `}>
          <div className="flex-shrink-0 h-full mr-1 bg-white rounded-2xl p-5 flex flex-col items-center">
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
        </div>
      ))}
    </div>
  );
}

export default CarouselSlide;
