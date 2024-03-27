import React from 'react'

const Eventcard = ({ event }) => {
    return (
        <div className="border-2 border-blue-400 h-fit w-48  " >
            <div className='flex flex-col'>
                <div className='w-full  '>
                    <div className=' flex justify-center border-1 border-black  z-50'>
                        <p className='text-white bg-red-400 w-fit p-2 rounded-b-2xl z-50'>Open</p>
                    </div>
                </div>
                <div  className='z-0'>
                    <img src={event.img} className='h-full w-full object-cover' />
                </div>
                <div className=' bottom-6 '>
                <div className='flex justify-center items-center'>
                    <button className='border-0 bg-transparent'>Read more...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eventcard