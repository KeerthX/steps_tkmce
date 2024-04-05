import React from 'react'
import { y2024, y2023, y2022 } from '../../../src/data/eventlist'
import Eventcard from './Eventcard'

const Event = () => {
    return (
        <div className='p-10 bg-white'>
            <div className='flex justify-center  pt-20'>
                <h1 className='text-6xl font-poppins font-bold'>Events</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className='mt-12 flex flex-wrap justify-center items-center gap-5 pr-10 pl-10'>

                    <div className='sm:w-48 sm:h-64 h-10 w-48 p-2 bg-blue-700'>
                        <div className='flex sm:flex-col justify-center items-center text-center text-white h-full w-full '>
                            <p className='md:text-3xl'>2</p>
                            <p className='md:text-3xl'>0</p>
                            <p className='md:text-3xl'>2</p>
                            <p className='md:text-3xl'>4</p>
                        </div>
                    </div>

                    {
                        y2024.map((event) => {
                            return (
                                <Eventcard event={event} />
                            )
                        })
                    }

                    <div className='sm:w-48 sm:h-64 h-10 w-48 p-2 bg-blue-700'>
                    <div className='flex sm:flex-col justify-center items-center text-center text-white h-full w-full '>
                        <p className='md:text-3xl'>2</p>
                        <p className='md:text-3xl'>0</p>
                        <p className='md:text-3xl'>2</p>
                        <p className='md:text-3xl'>3</p>
                    </div>
                </div>
                    {
                        y2023.map((event) => {
                            return (
                                <Eventcard event={event} />
                            )
                        })
                    }
                    <div className='sm:w-48 sm:h-64 h-10 w-48 p-2 bg-blue-700'>
                    <div className='flex sm:flex-col justify-center items-center text-center text-white h-full w-full '>
                        <p className='md:text-3xl'>2</p>
                        <p className='md:text-3xl'>0</p>
                        <p className='md:text-3xl'>2</p>
                        <p className='md:text-3xl'>2</p>
                    </div>
                </div>
                    {
                        y2022.map((event) => {
                            return (
                                <Eventcard event={event} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Event