import React from 'react';
import './Services.css';
import fullStackIcon from '../../assets/fullstack.jpg';
import UiUxIcon from '../../assets/ui-ux.jpg';
import mobileAppIcon from '../../assets/mobileapp.png';

const Services = () => {
    return (
        <div className='grid grid-cols-3 gap-2'>
            <div className='my-card'>
                <img src={fullStackIcon} className='w-full h-64' alt="" />
                <h1 className='text-2xl'>Full Stack Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor maxime quisquam nulla non laboriosam, quas quis at reiciendis molestiae tempore quidem a obcaecati fuga omnis corporis natus, placeat cupiditate.</p>
            </div>
            <div className='my-card'>
                <img src={UiUxIcon} className='w-full h-64' alt="" />
                <h1 className='text-2xl'>UI/UX Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor maxime quisquam nulla non laboriosam, quas quis at reiciendis molestiae tempore quidem a obcaecati fuga omnis corporis natus, placeat cupiditate.</p>
            </div>
            <div className='my-card'>
                <img src={mobileAppIcon} className='w-full h-64' alt="" />
                <h1 className='text-2xl'>Mobile App Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor maxime quisquam nulla non laboriosam, quas quis at reiciendis molestiae tempore quidem a obcaecati fuga omnis corporis natus, placeat cupiditate.</p>
            </div>

        </div>
    );
};

export default Services;