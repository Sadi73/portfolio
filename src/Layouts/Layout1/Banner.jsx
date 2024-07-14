import React from 'react';
import './Banner.css';
import bannerImg from '../../assets/banner.png'
import { ReactTyped } from 'react-typed';

const Banner = () => {
    return (
        <div className='banner md:h-screen'>
            <img src={bannerImg} alt="" className='w-full md:w-7/12'/>

            <div className='banner-title absolute'>
                <ReactTyped
                    backSpeed={50}
                    strings={[
                        " Hello There!!!",
                        " I'm Sadi M. Tanzim",
                        "A Full Stack Developer",
                        // "Your One Stop Service Solution",
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