import React from 'react'
import { y2024, y2023, y2022 } from '../../../src/data/eventlist'
import Eventcard from '../events/Eventcard'
import Gallerycard from './Gallerycard'

const Events = () => {

  return (
    <div className='flex flex-col items-center justify-center pb-10'  style={{
        backgroundImage: `linear-gradient(
            150deg,
            hsl(208deg, 90%, 19%) 0%,
            hsl(208deg, 90%, 19%) 2%,
            hsl(208deg, 90%, 19%) 5%,
            hsl(208deg, 90%, 19%) 8%,
            hsl(208deg, 90%, 19%) 13%,
            hsl(208deg, 90%, 19%) 17%,
            hsl(208deg, 90%, 19%) 23%,
            hsl(208deg, 90%, 19%) 28%,
            hsl(208deg, 90%, 19%) 34%,
            hsl(208deg, 90%, 19%) 40%,
            hsl(208deg, 90%, 19%) 46%,
            hsl(208deg, 90%, 19%) 52%,
            hsl(208deg, 90%, 19%) 58%,
            hsl(208deg, 90%, 19%) 64%,
            hsl(208deg, 90%, 19%) 71%,
            hsl(208deg, 90%, 19%) 77%,
            hsl(208deg, 90%, 19%) 83%,
            hsl(208deg, 90%, 19%) 89%,
            hsl(208deg, 90%, 19%) 95%,
            hsl(208deg, 90%, 19%) 100%
        )`
    }}>
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
