import { Button, Drawer, Space } from 'antd';
import React from 'react';
import aboutImg from '../../../assets/person7.jpg';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import mernImg from '../../../assets/mern.png';
import frontendImg from '../../../assets/frontend.png';
import './About.css';
import { IoMdClose } from 'react-icons/io';


const About = ({ openDrawer, setOpenDrawer }) => {

  const onClose = () => {
    setOpenDrawer(null);
  };

  return (
    <>

      <Drawer
        // title='About'
        placement="bottom"
        size='large'
        className='text-white'
        onClose={onClose}
        open={openDrawer === 'about'}
        extra={
          <Space>
            <button className='text-2xl' onClick={onClose}><IoMdClose /></button>
          </Space>
        }
      >
        <div className='w-9/12 mx-auto space-y-10'>
          <h1 className='text-5xl text-center'>ABOUT ME</h1>

          <div className='flex gap-10'>
            <div className=''>
              <img src={aboutImg} className='h-full' alt="" />
            </div>

            <div className='space-y-3'>
              <h3 className='text-[#009e66] text-2xl font-semibold'>Who am I?</h3>
              <h1 className=' text-3xl font-bold'>I am Sadi Muhammad Tanzim, a full stack developer</h1>
              <p className=' leading-6'>I am a skilled software engineer specializing in full stack development, with expertise in React.js, Next.js, and the MERN stack. Currently, I am employed at a renowned software company where I contribute to developing and maintaining robust, scalable web applications. My passion for technology and continuous learning drives me to stay updated with the latest industry trends and best practices.</p>

              <hr />

              <div className='flex justify-between'>
                <div className='space-y-2'>
                  <h6><span className='font-bold'>Name</span>: Sadi Muhammad Tanzim</h6>
                  <h6><span className='font-bold'>Phone</span>: +8801687192402</h6>
                </div>

                <div className='space-y-2'>
                  <h6><span className='font-bold'>Email</span>: saditanzim@gmail.com</h6>
                  <h6><span className='font-bold'>From</span>: Dhaka, Bangladesh</h6>
                </div>
              </div>

              <hr />

              <div className='flex justify-between items-center'>
                <div>
                  <button className='bg-[#009e66] px-3 py-2 rounded-xl font-semibold' >Download Resume</button>
                </div>

                <div className='flex gap-3 text-xl'>
                  <FaGithub />
                  <FaLinkedin />
                  <FaFacebook />
                </div>
              </div>

            </div>
          </div>

          <h1 className='text-5xl text-center'>My Expertise</h1>
          <div className='grid grid-cols-3 gap-5 my-10'>
            <div className="image-card" >
              <img src={mernImg} alt='' />
              <div className="overlay">MERN Development</div>
            </div>

            <div className="image-card" >
              <img src={frontendImg} alt='' />
              <div className="overlay">MERN Development</div>
            </div>

            <div className="image-card" >
              <img src={mernImg} alt='' />
              <div className="overlay">MERN Development</div>
            </div>

          </div>

          <h1 className='text-5xl text-center'>Technologies that I Use</h1>
          <div>

          </div>
        </div>

      </Drawer>
    </>
  );
};
export default About;