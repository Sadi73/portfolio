import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Introduction = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10'>
            <div className='w-11/12 '>
                {/* <img src={aboutImg} className='h-full w-full rounded-lg' alt="" /> */}
            </div>

            <div className='space-y-3'>
                <h3 className='text-[#009e66] text-2xl font-semibold'>Who am i?</h3>
                <h1 className='text-[#f0f0f0] text-3xl font-bold'>I am Sadi Muhammad Tanzim, a full stack developer</h1>
                <p className='text-[#9f9f9f] leading-7'>I am a skilled software engineer specializing in full stack development, with expertise in React JS, Next JS and the MERN stack. Currently, I am employed at a renowned software company where I contribute to developing and maintaining robust, scalable web applications. My passion for technology and continuous learning drives me to stay updated with the latest industry trends and best practices.</p>

                <hr />

                <div className='flex justify-between'>
                    <div className='space-y-3'>
                        <h6 className='text-[#9f9f9f]'><span className='font-bold text-[#f0f0f0]'>Name</span>: Sadi Muhammad Tanzim</h6>
                        <h6 className='text-[#9f9f9f]'><span className='font-bold text-[#f0f0f0]'>Phone</span>: +8801687192402</h6>
                    </div>

                    <div className='space-y-3'>
                        <h6 className='text-[#9f9f9f]'><span className='font-bold text-[#f0f0f0]'>Email</span>: saditanzim@gmail.com</h6>
                        <h6 className='text-[#9f9f9f]'><span className='font-bold text-[#f0f0f0]'>From</span>: Dhaka, Bangladesh</h6>
                    </div>
                </div>

                <hr />

                <div className='flex justify-between items-center'>
                    <a
                        href='https://drive.google.com/file/d/1iyuWQr4VQOHselHdfLCRCqpUGMZRTVfd/view?usp=sharing'
                        target='_blank'
                        className='bg-[#009e66] px-3 py-2 rounded-xl font-semibold hover:text-white'
                    >Download Resume
                    </a>

                    <div className='flex gap-3 text-xl'>
                        <a href="https://github.com/Sadi73"> <FaGithub /></a>
                        <a href="https://www.linkedin.com/in/sadi-muhammad-tanzim"> <FaLinkedin /></a>
                        <a href="https://www.facebook.com/sadi.tanzim/"> <FaFacebook /></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Introduction;