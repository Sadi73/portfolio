import { LoadingOutlined } from '@ant-design/icons';
import { Input, Spin } from 'antd';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { SiIonic } from 'react-icons/si';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { TextArea } = Input;

const Contact = () => {
      const [loaderVisible, setLoaderVisible] = useState(false);

    const sendEmail = (e) => {
        setLoaderVisible(true);
        e.preventDefault();

        emailjs.sendForm('service_3aah45r', 'contact_form', e.target, '0-1bw53Lr5Av0C6Wl')
            .then((result) => {
                setLoaderVisible(false);
                e.target.reset();
                toast("Message Sent");
            }, (error) => {
                setLoaderVisible(false);
                toast("Message Send failed. Try Again");
            });
    };


    return (
        <div className='md:w-9/12 mx-auto space-y-10 mt-10'>
            <ToastContainer />
            <div>
                <p className='md:text-lg text-center text-[#9f9f9f]'>Feel free to contact me anytimes</p>
                <h1 className='text-2xl md:text-5xl text-[#f0f0f0] text-center'>Get in Touch
                </h1>
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-between gap-10'>
                <div>
                    <h1 className='text-3xl font-semibold'>Message Me</h1>

                    <form onSubmit={sendEmail}>
                        <div className='flex gap-3 mt-5'>
                            <Input
                                variant="filled"
                                className='border border-white text-white focus:text-black'
                                placeholder="Name"
                                name='to_name'
                                required
                            />
                            <Input
                                variant="filled"
                                className='border border-white text-white focus:text-black'
                                placeholder="Email"
                                name='from_name'
                                required
                            />
                        </div>

                        <Input
                            variant="filled"
                            className='my-3 border border-white text-white focus:text-black'
                            placeholder="Subject"
                        />
                        <TextArea
                            rows={4}
                            variant="filled"
                            className='border border-white text-white focus:text-black'
                            name='message'
                            placeholder="Message"
                            required
                        />

                        {loaderVisible ?
                            <Spin indicator={<LoadingOutlined spin />} size="large" /> :
                            <button
                                type='submit'
                                className='bg-[#009e66] px-3 py-2 rounded-xl font-semibold mt-3'
                            >Send Message</button>

                        }
                    </form>
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
    );
};

export default Contact;