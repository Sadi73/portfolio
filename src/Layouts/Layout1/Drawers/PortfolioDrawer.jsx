import { Drawer, Space } from 'antd';
import React from 'react';
import DrawerCloseButton from '../../../components/DrawerCloseButton';
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
                    <DrawerCloseButton onClose={onClose} />
                </Space>
            }
        >

            <Portfolio />

        </Drawer>
    );
};
export default PortfolioDrawer;