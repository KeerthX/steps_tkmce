import React from 'react'

const Eventcard = ({ event }) => {
    return (
        <div className="border-2 border-blue-400 h-64 w-48  " >
            <div className='flex flex-col'>
                <div className='w-full  '>
                    <div className='top-0 flex justify-center border-1 border-black '>
                        <p className='text-white bg-red-400 w-fit p-2 rounded-b-2xl'>Open</p>
                    </div>
                </div>
                <div >
                    <img src={event.img} className='h-full w-full object-cover' />
                </div>
                <div className=' bottom-6'>
                <div className='flex justify-center items-center'>
                    <button className='border-0 bg-transparent'>Read more...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eventcard