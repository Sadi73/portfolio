import { Drawer, Space } from 'antd';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import Portfolio from '../../../components/Portfolio';

const PortfolioDrawer = ({ openDrawer, setOpenDrawer }) => {

    const onClose = () => {
        setOpenDrawer(null);
    };

    return (
        <Drawer
            // title='Portfolio'
            placement="bottom"
            size='large'
            className='text-white'
            onClose={onClose}
            open={openDrawer === 'portfolio'}
            extra={
                <Space>
                    <button className='text-2xl absolute top-[100px] right-[20px] md:top-30 md:right-10 lg:top-10' onClick={onClose}><IoMdClose /></button>
                </Space>
            }
        >

            <Portfolio />

        </Drawer>
    );
};
export default PortfolioDrawer;