import React from 'react';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';
import Contact from '../../components/Contact';

const Layout2Root = () => {
    return (
        <div className='bg-black'>
            <Banner />
            <About />
            <Portfolio />
            <Resume />
            <Contact />
        </div>
    );
};

export default Layout2Root;