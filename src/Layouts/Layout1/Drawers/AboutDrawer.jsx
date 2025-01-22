import { Drawer, Space } from 'antd';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import About from '../../../components/About';
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
          <button className='text-2xl absolute top-[100px] right-[20px] md:top-30 md:right-10 lg:top-10' onClick={onClose}><IoMdClose /></button>
        </Space>
      }
    >
      <About />

    </Drawer>
  );
};
export default AboutDrawer;