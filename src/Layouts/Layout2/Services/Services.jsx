import React, { useRef } from 'react';
import './Services.css';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import fullStackIcon from '../../../assets/fullstack.jpg';
import UiUxIcon from '../../../assets/ui-ux.jpg';
import mobileAppIcon from '../../../assets/mobileapp.png';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { AutoPlay } from '@egjs/flicking-plugins';

const Services = () => {
    const flickingRef = useRef(null);

    const plugins = [
        new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true }),
    ];

    const goToPrevSlide = () => {
        flickingRef.current.prev();
    };

    const goToNextSlide = () => {
        flickingRef.current.next();
    };

    return (
        <div className='relative py-10 min-h-screen'>

            <h1 className='text-5xl font-semibold text-center my-10'>Services</h1>

            <div className='arrow-container w-full flex justify-between absolute z-10 top-[40%]'>
                <div className="cursor-pointer text-7xl font-bold" onClick={goToPrevSlide}><GrPrevious /></div>
                <div className="cursor-pointer text-7xl font-bold" onClick={goToNextSlide}><GrNext /></div>
            </div>

            <div className='flicker-container'>
                <Flicking
                    ref={flickingRef}
                    align="prev"
                    circular={true}
                    plugins={plugins}
                    onMoveEnd={e => {
                        console.log(e);
                    }}
                >
                    <div className="panel pb-10">
                        <div className='my-card'>
                            <img src={fullStackIcon} className='w-full h-64' alt="" />
                            <h1 className='text-2xl'>Full Stack Web Development</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor maxime quisquam nulla non laboriosam, quas quis at reiciendis molestiae tempore quidem a obcaecati fuga omnis corporis natus, placeat cupiditate.</p>
                        </div>
                    </div>

                    <div className="panel pb-10">
                        <div className='my-card'>
                            <img src={UiUxIcon} className='w-full h-64' alt="" />
                            <h1 className='text-2xl'>UI/UX Design</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor maxime quisquam nulla non laboriosam, quas quis at reiciendis molestiae tempore quidem a obcaecati fuga omnis corporis natus, placeat cupiditate.</p>
                        </div>
                    </div>

                    <div className="panel pb-10">
                        <div className='my-card'>
                            <img src={mobileAppIcon} className='w-full h-64' alt="" />
                            <h1 className='text-2xl'>Mobile App Development</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor maxime quisquam nulla non laboriosam, quas quis at reiciendis molestiae tempore quidem a obcaecati fuga omnis corporis natus, placeat cupiditate.</p>
                        </div>
                    </div>
                </Flicking>
            </div>
        </div>
    )
};

export default Services;