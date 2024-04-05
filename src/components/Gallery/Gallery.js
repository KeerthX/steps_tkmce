import React from 'react'


import Gallerycard from './Gallerycard'
import { galleryimg } from '../../data/gallerylist';

const Events = () => {

  return (
    <div className='flex flex-col items-center justify-center pb-10 bg-white '  >
      <div className="font-Poppins font-bold text-4xl text-center backdrop text-[#0B0B51] font-poppins pt-28" ><h1>Gallery</h1></div>
      <div className='mt-12 flex flex-wrap justify-center items-center gap-5 pr-10 pl-10'>
      {
        galleryimg.map((event) => {
            return (
                <Gallerycard event={event} key={event.id} />
            )
        })
    }
      </div>
    </div>
  );
}

export default Events;
