import React from 'react';
import mernImg from '../assets/mern.png';
import frontendImg from '../assets/frontend.png';
import issueFixImg from '../assets/issue.jpg'

const Expertise = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-5xl text-center'>My Expertise</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
                <div className="image-card" >
                    <img src={mernImg} alt='' />
                    <div className="overlay font-bold text-xl">MERN Development</div>
                </div>

                <div className="image-card" >
                    <img src={frontendImg} alt='' />
                    <div className="overlay font-bold text-xl">Frontend Development</div>
                </div>

                <div className="image-card" >
                    <img src={issueFixImg} alt='' />
                    <div className="overlay font-bold text-xl">Issue Fixing</div>
                </div>

            </div>
        </div>
    );
};

export default Expertise;