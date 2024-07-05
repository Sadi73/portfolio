import React from 'react';

const FeatureCard = ({ image, title }) => {
    return (
        <div className='bg-white text-center py-10  space-y-5'>
            {/* <img src={image} alt="" />*/}
            <div className='flex justify-center'>
                {image}
            </div>
            <h1 className='text-xl font-semibold'>{title}</h1>

        </div>
    );
};

export default FeatureCard;