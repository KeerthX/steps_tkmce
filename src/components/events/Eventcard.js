import React from 'react';
import { Link } from 'react-router-dom';

const Eventcard = ({ event }) => {
  return (
   
    <div className="relative border-2 border-blue-400 h-64 w-48">
      <div className="absolute top-0 left-0 z-10 w-full flex justify-center">
        {event.isRegistrationOpen?<p className="text-white bg-[#0B0B51] p-2 rounded-b-2xl">Open</p>:<p className="text-white bg-[#0B0B51] p-2 rounded-b-2xl">Close</p>}
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src={event.img} className="h-full w-full object-cover" alt="Event" />
      </div>
      <div className="absolute bottom-6 w-full flex justify-center items-center">
        <button className="border-0 bg-transparent text-white">Read more...</button>
      </div>
    </div>
   
    
  );
};

export default Eventcard;
