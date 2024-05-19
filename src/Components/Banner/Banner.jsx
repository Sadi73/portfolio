import React from 'react';
import './Banner.css';
import bannerImg from '../../assets/banner.png'
import { ReactTyped } from 'react-typed';

const Banner = () => {
    return (
        <div className='banner h-screen'>
            <img src={bannerImg} alt="" />

            <div className='banner-title absolute'>
                <ReactTyped
                    backSpeed={50}
                    strings={[
                        " I'm Sadi M. Tanzim",
                        "A Front-End Developer",
                        "One Stop Service Solution",
                    ]}
                    typeSpeed={200}
                    typedRef={function noRefCheck() { }}
                    style={{
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '72px',
                        color: '#fff',
                        fontWeight: 'bold'
                    }}
                    loop
                />
            </div>




        </div>
    );
};

export default Banner;