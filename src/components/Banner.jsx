import React from 'react';
import bannerImg from '../assets/banner.png'
import { ReactTyped } from 'react-typed';

const Banner = () => {
    return (
        <div className='banner md:h-screen bg-[#A8A80E]'>
            <img src={bannerImg} alt="" className='w-full md:w-7/12 absolute bottom-0'/>

            <div className='banner-title absolute top-1/3 right-[10%]'>
                <ReactTyped
                    backSpeed={50}
                    strings={[
                        " Hello There!!!",
                        " I'm Sadi M. Tanzim",
                        "A Full Stack Developer",
                        "Your One Stop Service Solution",
                    ]}
                    typeSpeed={100}
                    typedRef={function noRefCheck() { }}
                    className='text-3xl lg:text-7xl text-white font-bold'
                    loop
                />
            </div>




        </div>
    );
};

export default Banner;