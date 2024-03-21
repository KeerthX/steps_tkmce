import React from 'react'
import { y2024, y2023, y2022 } from '../data/eventlist'
import Eventcard from './Eventcard'
const Event = () => {
    return (
        <div className='p-10'>
            <div className='flex justify-center '>
                <h1 className='text-6xl'>EVENTS</h1>
            </div>

            <div className='grid grid-cols-4 justify-center items-center pt-10 space-y-10'>
                <div className='bg-blue-700 w-10 h-fit p-2'>
                    <div className='flex flex-col' >
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
                <div className='bg-blue-700 w-10 h-fit p-2'>
                    <div className='flex flex-col' >
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
                <div className='bg-blue-700 w-10 h-fit p-2'>
                    <div className='flex flex-col' >
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
    )
}

export default Event