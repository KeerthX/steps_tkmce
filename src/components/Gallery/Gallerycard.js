import React, { useState } from 'react';

const Gallerycard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className='relative xl:w-80 xl:h-56 h-48 w-68 aspect-video'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={event.img} className='w-full h-full' alt="Event" />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <span className="text-xl">{event.desc}</span>
        </div>
      )}
    </div>
  );
};

export default Gallerycard;
