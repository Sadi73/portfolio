import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Bio from '../Bio/Bio';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>

            <Bio />

            <h1 className='text-5xl font-semibold text-center'>Services</h1>
            <Services />

        </div>
    );
};

export default Home;