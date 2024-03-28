import React from 'react'
import { y2024, y2023, y2022 } from '../../../src/data/eventlist'
import Eventcard from './Eventcard'

const Event = () => {
    return (
        <div className='p-10  ' style={{
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
            <div className='flex justify-center  pt-20'>
                <h1 className='text-6xl'>EVENTS</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className='mt-12 flex flex-wrap justify-center items-center gap-5 pr-10 pl-10'>

                    <div className='sm:w-48 sm:h-64 h-10 w-48 p-2 bg-blue-700'>
                        <div className='flex sm:flex-col justify-center items-center text-center text-white h-full w-full '>
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

                    <div className='sm:w-48 sm:h-64 h-10 w-48 p-2 bg-blue-700'>
                    <div className='flex sm:flex-col justify-center items-center text-center text-white h-full w-full '>
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
                    <div className='sm:w-48 sm:h-64 h-10 w-48 p-2 bg-blue-700'>
                    <div className='flex sm:flex-col justify-center items-center text-center text-white h-full w-full '>
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