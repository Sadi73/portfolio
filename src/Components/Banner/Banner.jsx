import React from 'react';
import './Banner.css';
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={bannerImg} alt="" />

            <div className='banner-title absolute'>
                <h1 className='text-7xl text-white font-bold'>I'm Sadi M. Tanzim</h1>
                <p className='text-7xl text-white font-bold'>A Front-End Developer</p>
            </div>
            
            
        </div>
    );
};

export default Banner;