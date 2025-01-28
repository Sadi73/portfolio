import { Drawer, Space } from 'antd';
import React from 'react';
import DrawerCloseButton from '../../../components/DrawerCloseButton';
import Resume from '../../../components/Resume';

const ResumeDrawer = ({ openDrawer, setOpenDrawer }) => {

    const onClose = () => {
        setOpenDrawer(null);
    };

    return (
        <Drawer
            // title='Resume'
            placement="bottom"
            size='large'
            className='text-white'
            onClose={onClose}
            open={openDrawer === 'resume'}
            extra={
                <Space>
                    <DrawerCloseButton onClose={onClose} />
                </Space>
            }
        >
            <Resume />
        </Drawer>
    );
};
export default ResumeDrawer;