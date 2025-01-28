import React from 'react';
import { IoMdClose } from 'react-icons/io';

const DrawerCloseButton = ({ onClose }) => {
    return (
        <button
            className='text-2xl absolute top-[100px] md:top-28 lg:top-16 right-[20px] md:right-10'
            onClick={onClose}
        ><IoMdClose />
        </button>
    );
};

export default DrawerCloseButton;