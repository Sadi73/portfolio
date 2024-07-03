import { Button, Drawer, Space } from 'antd';
import React from 'react';

const Portfolio = ({ openDrawer, setOpenDrawer }) => {

    const onClose = () => {
        setOpenDrawer(null);
    };

    return (
        <>

            <Drawer
                title='Portfolio'
                placement="bottom"
                size='large'
                onClose={onClose}
                open={openDrawer === 'portfolio'}
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
export default Portfolio;