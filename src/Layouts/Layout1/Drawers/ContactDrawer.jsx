import { Drawer, Space } from 'antd';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from '../../../components/Contact';


const ContactDrawer = ({ openDrawer, setOpenDrawer }) => {

  const onClose = () => {
    setOpenDrawer(null);
  };

  return (
    <>
      <ToastContainer />

      <Drawer
        // title='Contact'
        placement="bottom"
        size='large'
        className='text-white'
        onClose={onClose}
        open={openDrawer === 'contact'}
        extra={
          <Space>
            <button className='text-2xl absolute top-[100px] right-[20px] md:top-30 md:right-10 lg:top-10' onClick={onClose}><IoMdClose /></button>
          </Space>
        }
      >
        <Contact />
      </Drawer>
    </>
  );
};
export default ContactDrawer;