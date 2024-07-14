import { Button, Drawer, Input, Space } from 'antd';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { SiIonic } from 'react-icons/si';

const { TextArea } = Input;

const Contact = ({ openDrawer, setOpenDrawer }) => {

  const onClose = () => {
    setOpenDrawer(null);
  };

  return (
    <>

      <Drawer
        // title='Contact'
        placement="bottom"
        size='large'
        className='text-white'
        onClose={onClose}
        open={openDrawer === 'contact'}
        extra={
          <Space>
            <button className='text-2xl absolute top-[100px] right-[20px] md:top-30 md:right-10 lg:top-10' onClick={onClose}><IoMdClose /></button>
          </Space>
        }
      >
        <div className='md:w-9/12 mx-auto space-y-10 mt-10'>
          <div>
            <p className='md:text-lg text-center text-[#9f9f9f]'>Feel free to contact me anytimes</p>
            <h1 className='text-2xl md:text-5xl text-center'>Get in Touch
            </h1>
          </div>

          <div className='flex flex-col-reverse md:flex-row justify-between gap-10'>
            <div>
              <h1 className='text-3xl font-semibold'>Message Me</h1>

              <div className='flex gap-3 mt-5'>
                <Input placeholder="Name" variant="filled" className='border border-white'/>
                <Input placeholder="Email" variant="filled" className='border border-white'/>
              </div>

              <Input placeholder="Subject" variant="filled" className='my-3 border border-white' />
              <TextArea rows={4} placeholder="Message" variant="filled" className='border border-white'/>

              <button className='bg-[#009e66] px-3 py-2 rounded-xl font-semibold mt-3'>Send Message</button>
            </div>

            <div>
              <h1 className='text-xl md:text-3xl font-semibold mb-3'>Contact Info</h1>
              <p className='text-[#9f9f9f]'>Always available for freelance work if the right project comes along, Feel free to contact me!</p>

              <div className='flex items-center gap-5 my-5'>
                <SiIonic className='text-3xl text-[#009e66]' />
                <div>
                  <h1>Name</h1>
                  <h1 className='text-[#9f9f9f]'>Sadi Muhammad Tanzim</h1>
                </div>
              </div>

              <div className='flex items-center gap-5'>
                <SiIonic className='text-3xl text-[#009e66]' />
                <div>
                  <h1>Location</h1>
                  <h1 className='text-[#9f9f9f]'>Dhaka, Bangladesh</h1>
                </div>
              </div>

              <div className='flex items-center gap-5 my-5'>
                <SiIonic className='text-3xl text-[#009e66]' />
                <div>
                  <h1>Call Me (or Whatsapp)</h1>
                  <h1 className='text-[#9f9f9f]'>+8801687192402</h1>
                </div>
              </div>

              <div className='flex items-center gap-5'>
                <SiIonic className='text-3xl text-[#009e66]' />
                <div>
                  <h1>Email</h1>
                  <h1 className='text-[#9f9f9f]'>saditanzim@gmail.com</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Drawer>
    </>
  );
};
export default Contact;