import React from 'react'
import { y2024, y2023, y2022 } from '../../../src/data/eventlist'
import Eventcard from './Eventcard'

const Event = () => {
    return (
        <div className='p-10 bg-sky-700'>
            <div className='flex justify-center '>
                <h1 className='text-6xl'>EVENTS</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center pt-10 space-y-10 space-x-5'>

                    <div className='bg-blue-700 sm:w-10 sm:h-fit w-48 h-10 p-2 md:ml-0 ml-5 '>
                        <div className='flex sm:flex-col justify-center items-center text-center' >
                            <p>2</p>
                            <p>0</p>
                            <p>2</p>
                            <p>4</p>
                        </div>
                    </div>

                    {
                        y2024.map((event) => {
                            return (
                                <Eventcard event={event} />
                            )
                        })
                    }
                    
                    <div className='bg-blue-700 sm:w-10 sm:h-fit w-48 h-10 p-2'>
                        <div className='flex sm:flex-col justify-center items-center text-center' >
                            <p>2</p>
                            <p>0</p>
                            <p>2</p>
                            <p>3</p>
                        </div>
                    </div>
                    {
                        y2023.map((event) => {
                            return (
                                <Eventcard event={event} />
                            )
                        })
                    }
                    <div className='bg-blue-700 sm:w-10 sm:h-fit w-48 h-10 p-2'>
                        <div className='flex sm:flex-col justify-center items-center text-center' >
                            <p>2</p>
                            <p>0</p>
                            <p>2</p>
                            <p>2</p>
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