import React, { useState } from 'react';
import "./Slidercard.css";

const SliderCard = ({ src, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div className='slider-card-container' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={src} className='slider-card-image' alt="Event" />
        {isHovered && (
          <div className="slider-card-hover-text">
            <span className="text-xl">{text}</span>
          </div>
        )}
      </div>
    );
}

export default SliderCard;
