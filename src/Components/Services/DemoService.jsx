import React from "react";
import Flicking from "@egjs/react-flicking";
import { Perspective } from "@egjs/flicking-plugins";
import fullStackIcon from '../../assets/fullstack.jpg';
import UiUxIcon from '../../assets/ui-ux.jpg';
import mobileAppIcon from '../../assets/mobileapp.png';

const DemoService = () => {
    const plugins = [new Perspective({ rotate: 0.5 })];

    return (
        <div className="py-10 min-h-screen">

            <h1 className='text-5xl font-semibold text-center my-10'>Services</h1>

            <Flicking circular={true} plugins={plugins}>
                <div className="card-panel w-96">
                    <img src={fullStackIcon} className='w-full h-64' alt="" />
                    <h1 className='text-2xl'>Full Stack Web Development</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor maxime quisquam nulla non laboriosam, quas quis at reiciendis molestiae tempore quidem a obcaecati fuga omnis corporis natus, placeat cupiditate.</p>
                </div>
                <div className="card-panel w-96">
                    <img src={UiUxIcon} className='w-full h-64' alt="" />
                    <h1 className='text-2xl'>UI/UX Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor maxime quisquam nulla non laboriosam, quas quis at reiciendis molestiae tempore quidem a obcaecati fuga omnis corporis natus, placeat cupiditate.</p>
                </div>
                <div className="card-panel w-96">
                    <img src={mobileAppIcon} className='w-full h-64' alt="" />
                    <h1 className='text-2xl'>Mobile App Development</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor maxime quisquam nulla non laboriosam, quas quis at reiciendis molestiae tempore quidem a obcaecati fuga omnis corporis natus, placeat cupiditate.</p>
                </div>
            </Flicking>
        </div>
    );
};

export default DemoService;
