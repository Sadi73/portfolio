import React, { useState } from 'react';
import Banner from './Banner';
import About from './Drawers/About';
import Navbar from './Navbar';
import Portfolio from './Drawers/Portfolio';
import Resume from './Drawers/Resume';
import Contact from './Drawers/Contact';
import './Drawers/drawerStyles.css'

const Layout1Root = () => {
    const [openDrawer, setOpenDrawer] = useState(null);

    return (
        <div>
            <Navbar
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

            <Banner />

            <About
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

            <Portfolio
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

            <Resume
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

            <Contact
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

        </div>
    );
};

export default Layout1Root;