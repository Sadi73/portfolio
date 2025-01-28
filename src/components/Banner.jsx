import React from 'react';

const Banner = () => {
    return (
        <div className='md:h-screen bg-black'>
            <div className='absolute top-1/3 left-[10%] text-white space-y-2 font-montserrat'>
                <div className="relative">
                    <div className="w-32 h-8 border-t border-l"></div>
                    <p className='absolute -top-[12px] left-[140px] font-semibold'>I AM</p>
                </div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold '>Sadi M. Tanzim</h1>
                <p className='text-[#A1A1AA] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>A Software Engineer Since 2023</p>
                <p className='text-[#A1A1AA] md:text-lg lg:text-xl'>I'm a <span className='text-white font-semibold'>Full-Stack Web Developer</span> specializing in building production grade Websites <br /> with <span className='text-white font-semibold'>React js</span>, <span className='text-white font-semibold'>Next js</span> & <span className='text-white font-semibold'>Express js</span>.</p>
            </div>
        </div>
    );
};

export default Banner;