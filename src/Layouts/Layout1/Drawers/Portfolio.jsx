import { Button, Drawer, Space } from 'antd';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import project1 from '../../../assets/projects/1.png';
import project2 from '../../../assets/projects/2.png';
import project4 from '../../../assets/projects/4.png';
import project5 from '../../../assets/projects/5.png';

const projects = [
    {
        title: 'ABCD',
        image: project1,
        path: 'https://saditanzim.netlify.app/'
    },
    {
        title: 'ABCD',
        image: project2,
        path: 'https://saditanzim.netlify.app/'
    },
    {
        title: 'ABCD',
        image: project4,
        path: 'https://saditanzim.netlify.app/'
    },
    {
        title: 'ABCD',
        image: project5,
        path: 'https://saditanzim.netlify.app/'
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
                        <button className='text-2xl' onClick={onClose}><IoMdClose /></button>
                    </Space>
                }
            >
                <div className='w-9/12 mx-auto space-y-10'>
                    <div>
                        <p className='text-lg text-center'>Showcasing some of my best work</p>
                        <h1 className='text-5xl text-center'>PORTFOLIO</h1>
                    </div>

                    <div className='grid grid-cols-3 gap-8'>
                        {projects.map(project =>
                            <div className="image-card" >
                                <img src={project.image} alt='' />
                                <div className="overlay text-2xl " >
                                    <div>
                                        <h1>{project.title}</h1>
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