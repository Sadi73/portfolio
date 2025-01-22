import React, { useState } from 'react';
import Banner from '../../components/Banner';
import AboutDrawer from './Drawers/AboutDrawer';
import ContactDrawer from './Drawers/ContactDrawer';
import './Drawers/drawerStyles.css';
import PortfolioDrawer from './Drawers/PortfolioDrawer';
import ResumeDrawer from './Drawers/ResumeDrawer';
import Navbar from '../../components/Navbar';

const Layout1Root = () => {
    const [openDrawer, setOpenDrawer] = useState(null);

    return (
        <div>
            <Navbar
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

            <Banner />

            <AboutDrawer
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

            <PortfolioDrawer
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

            <ResumeDrawer
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

            <ContactDrawer
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />

        </div>
    );
};

export default Layout1Root;