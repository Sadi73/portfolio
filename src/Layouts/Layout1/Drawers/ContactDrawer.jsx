import { Drawer, Space } from 'antd';
import React from 'react';
import Contact from '../../../components/Contact';
import DrawerCloseButton from '../../../components/DrawerCloseButton';

const ContactDrawer = ({ openDrawer, setOpenDrawer }) => {

  const onClose = () => {
    setOpenDrawer(null);
  };

  return (
    <Drawer
      // title='Contact'
      placement="bottom"
      size='large'
      className='text-white'
      onClose={onClose}
      open={openDrawer === 'contact'}
      extra={
        <Space>
          <DrawerCloseButton onClose={onClose} />
        </Space>
      }
    >
      <Contact />
    </Drawer>
  );
};
export default ContactDrawer;