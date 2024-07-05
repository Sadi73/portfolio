import { Button, Drawer, Space } from 'antd';
import React from 'react';

const Contact = ({openDrawer, setOpenDrawer}) => {

  const onClose = () => {
    setOpenDrawer(null);
  };

  return (
    <>
      
      <Drawer
        title='Contact'
        placement="bottom"
        size='large'
        onClose={onClose}
        open={openDrawer === 'contact'}
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
export default Contact;