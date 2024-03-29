import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { y2024 } from '../../data/eventlist';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
const Eventslider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        centeMode: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1110,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 955,
                settings: {
                    slidesToShow: 2.7,
                },
            },
            {
                breakpoint: 821,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (

        <div>
            <div className="flex pt-10 w-full ">
                <hr style={{ border: 'none', height: '4px', background: '#05345E', marginTop: '25px' }} className="xl:w-40 lg:w-32 md:w-20  w-10" />
                <div className="flex justify-center"><h1 className="text-4xl pb-10 font-poppins uppercase p-2 text-[#0B0B51]">Events</h1></div>
                <hr style={{ border: 'none', height: '4px', background: '#05345E', marginTop: '25px', float: 'left' }} className=" xl:w-72 lg:w-56 md:w-44 w-32 " />
            </div>
            <div>
                <div className='w-full '>
                    <div className='mt-0 mb-4 md:pl-20 pl-0'>
                        <Slider {...settings}>
                            {y2024.map((event, index) => (
                                <Link to={`/${event.link}`}>
                                <div className='flex justify-center items-center pl-6 md:pl-0'>
                                    <img key={index} src={event.img} className='h-96 w-60 ' alt='hello' />
                                </div>
                                </Link>
                            ))}
                        </Slider>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Eventslider;
