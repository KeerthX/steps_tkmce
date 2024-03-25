import { useState, useEffect } from "react";
import "./Slider.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./Slider-Data";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  //slideLength=1 2 3
  //currentslide=0 2 3

  const autoScroll = false;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);

  return (
    <div className="banner sm:h-full sm:w-full h-96 w-full   pt-32 pb-20 sm:pb-10">
      <div className="slider">
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <>
                  <img src={slide.image} alt="slide" />
                  <div className="content">
                    
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default Slider;
