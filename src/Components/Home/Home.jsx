import React, { useEffect } from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Bio from '../Bio/Bio';
import Services from '../Services/Services';
import Features from '../Features/Features';
import OurTeam from '../OurTeam/OurTeam';
import Portfolio from '../Portfolio/Portfolio';
import DemoService from '../Services/DemoService';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner1 from '../Banner/Banner1';


const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            {/* ------------------- Banner Section ------------------ */}
            <Banner />
            {/* <Banner1 /> */}

            {/* ------------------- Bio Section ------------------ */}
            {/* <Bio /> */}

            {/* ------------------- Services Section ------------------ */}
            {/* <Services /> */}
            <DemoService />

            {/* ------------------- Portfolio Section ------------------ */}
            <Portfolio />

            {/* ------------------- Features Section ------------------ */}
            <Features />

            {/* ------------------- Our Team Section ------------------ */}
            <OurTeam />



        </div>
    );
};

export default Home;