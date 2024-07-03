import { Button, Drawer, Space } from 'antd';
import React from 'react';


const About = ({openDrawer, setOpenDrawer}) => {

  const onClose = () => {
    setOpenDrawer(null);
  };

  return (
    <>
      
      <Drawer
        title='About'
        placement="bottom"
        size='large'
        onClose={onClose}
        open={openDrawer === 'about'}
        extra={
          <Space>
            <Button onClick={onClose}>Close</Button>
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
export default About;