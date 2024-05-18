import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Bio from '../Bio/Bio';
import Services from '../Services/Services';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            {/* ------------------- Banner Section ------------------ */}
            <Banner />

            {/* ------------------- Bio Section ------------------ */}
            <Bio />

            {/* ------------------- Services Section ------------------ */}
            <Services />

            {/* ------------------- Features Section ------------------ */}
            <Features />

        </div>
    );
};

export default Home;