import React from 'react'

const Contact = () => {
    return (
        <div className='bg-white'>
            <div className='  text-black'>
                <div className='flex flex-col p-6  pt-28  justify-center items-center'>
                    <h1 className='text-6xl font-bold '>Contact us</h1>
                </div>
                <div className=''>
                    <div class=" bg-white flex flex-col md:ml-auto w-full md:py-8 px-8 mt-8 md:mt-0">
                        <div class="relative mb-4">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-40">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact