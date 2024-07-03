import { Button, Drawer, Space } from 'antd';
import React from 'react';

const Resume = ({ openDrawer, setOpenDrawer }) => {

    const onClose = () => {
        setOpenDrawer(null);
    };

    return (
        <>

            <Drawer
                title='Resume'
                placement="bottom"
                size='large'
                onClose={onClose}
                open={openDrawer === 'resume'}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                    </Space>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};
export default Resume;