import React from 'react';

const Navbar = ({ setOpenDrawer }) => {
    return (
        <div className='flex justify-end fixed z-10 pt-8 pr-10 w-full'>
            <ul className='flex gap-3 md:gap-8 text-white font-montserrat'>
                <li><button onClick={() => setOpenDrawer('about')}>About</button></li>
                <li><button onClick={() => setOpenDrawer('portfolio')}>Portfolio</button></li>
                <li><button onClick={() => setOpenDrawer('resume')}>Resume</button></li>
                <li><button onClick={() => setOpenDrawer('contact')}>Contact</button></li>
            </ul>
        </div>
    );
};

export default Navbar;