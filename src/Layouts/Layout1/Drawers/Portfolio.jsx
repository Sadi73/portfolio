import { Button, Drawer, Space } from 'antd';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import project1 from '../../../assets/projects/1.png';
import project2 from '../../../assets/projects/2.png';
import project3 from '../../../assets/projects/3.png';
import project4 from '../../../assets/projects/4.png';
import project5 from '../../../assets/projects/5.png';
// import project4 from '../../../assets/projects/4.png';

const projects = [
    {
        title: 'Bongo Explorer',
        image: project1,
        path: 'https://bongo-explorer.web.app/'
    },
    {
        title: 'Banu & Haque Homes',
        image: project2,
        path: 'https://banu-and-haque-homes.web.app/'
    },
    {
        title: "Esha's Craft",
        image: project3,
        path: 'https://esha-craft.web.app/'
    },
    {
        title: 'EService BD',
        image: project4,
        path: 'https://eservicebd-3433d.web.app/'
    },
    {
        title: 'Smart Ticket',
        image: project5,
        path: 'https://resilient-unicorn-a9662b.netlify.app/'
    },
];

const Portfolio = ({ openDrawer, setOpenDrawer }) => {

    const onClose = () => {
        setOpenDrawer(null);
    };

    const onclickHandler = (path) => {
        window.location.href = path
    }

    return (
        <>

            <Drawer
                // title='Portfolio'
                placement="bottom"
                size='large'
                className='text-white'
                onClose={onClose}
                open={openDrawer === 'portfolio'}
                extra={
                    <Space>
                        <button className='text-2xl absolute top-[100px] right-[20px] md:top-30 md:right-10 lg:top-10' onClick={onClose}><IoMdClose /></button>
                    </Space>
                }
            >
                <div className='md:w-9/12 mx-auto space-y-10 mt-10'>
                    <div>
                        <p className='md:text-lg text-center'>Showcasing some of my best work</p>
                        <h1 className='text-2xl md:text-5xl text-center'>PORTFOLIO</h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {projects.map(project =>
                            <div className="image-card" >
                                <img src={project.image} alt='' />
                                <div className="overlay  " >
                                    <div>
                                        <h1 className='text-2xl'>{project.title}</h1>
                                        <p className='cursor-pointer' onClick={() => onclickHandler(project.path)}>Visit Here</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Drawer>
        </>
    );
};
export default Portfolio;