import React from 'react';

const UsedTechnologies = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-5xl text-center'>Technologies that I Use</h1>

            <div className='leading-7'>
                <h1><span className='font-semibold text-[#f0f0f0]'>Frontend: </span><span className='text-[#9f9f9f]'>HTML || CSS || Tailwind || JavaScript || React JS || Next JS</span></h1>
                <h1><span className='font-semibold text-[#f0f0f0]'>Backend:</span> <span className='text-[#9f9f9f]'> Node JS || Express JS || MongoDB</span></h1>
                <h1><span className='font-semibold text-[#f0f0f0]'>Misc:</span> <span className='text-[#9f9f9f]'>Google Firebase || JSON Web Token</span></h1>
            </div>
        </div>
    );
};

export default UsedTechnologies;