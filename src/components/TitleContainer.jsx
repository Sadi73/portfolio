import React from 'react';

const TitleContainer = ({ title, subTitle }) => {
    return (
        <div className='text-[#f0f0f0]'>
            <p className='md:text-lg text-center'>{subTitle}</p>
            <h1 className='text-2xl md:text-5xl text-center uppercase'>{title}</h1>
        </div>
    );
};

export default TitleContainer;