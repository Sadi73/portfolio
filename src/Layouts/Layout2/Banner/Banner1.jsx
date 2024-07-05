import React from 'react';
import bgImage from '../../../assets/bannerImg.jpg';
import { ReactTyped } from 'react-typed';

const Banner1 = () => {
    return (
        <div className='h-screen relative'
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className=' bg-black bg-opacity-50 w-full h-full flex items-center justify-center'>
                <ReactTyped
                    backSpeed={50}
                    strings={[
                        "Welcome!!! To...",
                        "Your One Stop Service Solution",
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

export default Banner1;