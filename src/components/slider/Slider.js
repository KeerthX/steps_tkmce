import { useState, useEffect } from "react";
import "./Slider.css";


const Slider = () => {

  return (
    <>
    <div className="banner">
      <div className="slider-content">
        <h2>Our Happy Moments</h2>
        <p>
          process to identify exactly where the initialization error is
          occurring. Use logging or debugging{" "}
        </p>
      </div>
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
                    <h2>{slide.heading}</h2>
                    <p>{slide.desc}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
    <section>
  
    <article>
      <div>
        <ul>
          <li><img src="http://dummyimage.com/600x400/000000/ffffff.png" /></li>
          <li><img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" /></li>
          <li><img src="http://dummyimage.com/600x400/000000/ffffff.png" /></li>
          <li><img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" /></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><img src="http://dummyimage.com/600x400/000000/ffffff.png" /></li>
          <li><img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" /></li>
          <li><img src="http://dummyimage.com/600x400/000000/ffffff.png" /></li>
          <li><img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" /></li>
        </ul>
      </div>
    </article>
  </section>
  </>
  
  );
};

export default Slider;
