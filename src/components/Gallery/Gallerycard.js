import React from 'react'

const Gallerycard = ({event}) => {
  return (
    <div className='xl:w-72 xl:h-56 h-44 w-64 '>
        <img src={event.img} className='w-full h-full ' />
    </div>
  )
}

export default Gallerycard