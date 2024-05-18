import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Bio from '../Bio/Bio';
import Services from '../Services/Services';
import Features from '../Features/Features';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            {/* ------------------- Banner Section ------------------ */}
            <Banner />

            {/* ------------------- Bio Section ------------------ */}
            {/* <Bio /> */}

            {/* ------------------- Services Section ------------------ */}
            <Services />

            {/* ------------------- Features Section ------------------ */}
            <Features />

            {/* ------------------- Our Team Section ------------------ */}
            <OurTeam />

        </div>
    );
};

export default Home;