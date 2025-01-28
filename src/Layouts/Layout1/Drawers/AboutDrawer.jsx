import { Drawer, Space } from 'antd';
import React from 'react';
import About from '../../../components/About';
import DrawerCloseButton from '../../../components/DrawerCloseButton';
import './About.css';

const AboutDrawer = ({ openDrawer, setOpenDrawer }) => {

  const onClose = () => {
    setOpenDrawer(null);
  };

  return (
    <Drawer
      placement="bottom"
      size='large'
      className='text-white'
      onClose={onClose}
      open={openDrawer === 'about'}
      extra={
        <Space>
          <DrawerCloseButton onClose={onClose} />
        </Space>
      }
    >
      <About />

    </Drawer>
  );
};
export default AboutDrawer;