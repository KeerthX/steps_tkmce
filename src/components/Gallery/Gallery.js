import React from 'react'
import { y2024, y2023, y2022 } from '../../../src/data/eventlist'
import Eventcard from '../events/Eventcard'
import Gallerycard from './Gallerycard'

const Events = () => {

  return (
    <div className='flex flex-col items-center justify-center pb-10 bg-white'  >
      <div className="font-Poppins font-extrabold text-4xl text-center backdrop text-white pt-28" ><h1>Gallery</h1></div>
      <div className='mt-12 flex flex-wrap justify-center items-center gap-5 pr-10 pl-10'>
      {
        y2024.map((event) => {
            return (
                <Gallerycard event={event} key={event.id} />
            )
        })
    }


    {
        y2023.map((event) => {
            return (
                <Gallerycard event={event} key={event.id} />
            )
        })
    }

    {
        y2022.map((event) => {
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
