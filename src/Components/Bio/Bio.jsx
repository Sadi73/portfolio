import React from 'react';
import './Bio.css';
import img from '../../assets/banner.png';

const Bio = () => {
    return (
        <div className='flex items-center px-10'>
            {/* <img src={img} className='w-1/2' alt="" /> */}
            <div className='w-1/2'>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>

        </div>
    );
};

export default Bio;