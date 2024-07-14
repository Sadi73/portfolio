import { Button, Drawer, Space, Steps } from 'antd';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import bg1 from '../../../assets/icons/red.svg';
import bg2 from '../../../assets/icons/red2.svg';
import bg3 from '../../../assets/icons/black.svg';
import bg4 from '../../../assets/icons/blue1.svg';
import bg5 from '../../../assets/icons/blue2.svg';
import bg6 from '../../../assets/icons/blue3.svg';
import bg7 from '../../../assets/icons/green1.svg';
import bg8 from '../../../assets/icons/green2.svg';
import bg9 from '../../../assets/icons/yellow1.svg';
import bg10 from '../../../assets/icons/yellow2.svg';
import htmlLogo from '../../../assets/icons/html.png';
import cssLogo from '../../../assets/icons/css.png';
import tailwindLogo from '../../../assets/icons/tailwind.svg';
import javascriptLogo from '../../../assets/icons/javascript.svg';
import reactLogo from '../../../assets/icons/react.svg';
import nextLogo from '../../../assets/icons/next.jpeg';
import mongodbLogo from '../../../assets/icons/mongodb.svg';
import expressLogo from '../../../assets/icons/express.svg';
import firebaseLogo from '../../../assets/icons/firebase.svg';

const skills = [
    { name: 'HTML', background: bg1, logo: htmlLogo },
    { name: 'CSS', background: bg4, logo: cssLogo },
    { name: 'JavaScript', background: bg9, logo: javascriptLogo },
    { name: 'Tailwind CSS', background: bg5, logo: tailwindLogo },
    { name: 'React', background: bg4, logo: reactLogo },
    { name: 'Next', background: bg3, logo: nextLogo },
    { name: 'Express', background: bg7, logo: expressLogo },
    { name: 'MongoDb', background: bg7, logo: mongodbLogo },
    { name: 'Firebase', background: bg9, logo: firebaseLogo },
]

const Resume = ({ openDrawer, setOpenDrawer }) => {

    const onClose = () => {
        setOpenDrawer(null);
    };

    return (
        <>

            <Drawer
                // title='Resume'
                placement="bottom"
                size='large'
                className='text-white'
                onClose={onClose}
                open={openDrawer === 'resume'}
                extra={
                    <Space>
                        <button className='text-2xl' onClick={onClose}><IoMdClose /></button>
                    </Space>
                }
            >
                <div className='md:w-9/12 mx-auto space-y-10'>
                    <div>
                        <p className='text-lg text-center'>Check out my resume</p>
                        <h1 className='text-5xl text-center'>RESUME</h1>
                    </div>

                    <div className='md:flex gap-10'>
                        <div className='md:w-1/2 space-y-4'>
                            <h3 className='text-3xl font-semibold'>Experience</h3>
                            <div className='bg-[#161616] py-5 pl-5'>
                                <Steps
                                    progressDot
                                    current={3}
                                    direction="vertical"
                                    items={[
                                        {
                                            title: 'Associate Software Engineer (Trainee)',
                                            description: 'July 2023 - Oct 2023',
                                        },
                                        {
                                            title: 'Software Engineer I',
                                            description: 'Oct 2023 - July 2024',
                                        },
                                        {
                                            title: 'Software Engineer II',
                                            description: 'July 2024 - Current',
                                        },
                                    ]}
                                />
                            </div>
                        </div>

                        <div className='md:w-1/2 space-y-4'>
                            <h3 className='text-xl font-semibold'>Education</h3>
                            <div className='bg-[#161616] py-5 pl-5'>
                                <Steps
                                    progressDot
                                    current={3}
                                    direction="vertical"
                                    items={[
                                        {
                                            title: 'SSC',
                                            description: 'Rajshahi Collegiate School',
                                        },
                                        {
                                            title: 'HSC',
                                            description: 'New Govt. Degree College',
                                        },
                                        {
                                            title: 'B. Sc. (Engineering)',
                                            description: 'Rajshahi University of Engineering & Technology',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-3xl font-semibold'>My Skills</h3>
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-5 mt-10'>
                            {skills.map(skill => <div className='relative flex items-center justify-center'>
                                <img src={skill.background} alt="" />
                                <div className='absolute flex flex-col justify-center items-center'>
                                    <img className='w-12' src={skill.logo} alt="" />
                                    <h3 className=''>{skill.name}</h3>
                                </div>
                            </div>)}
                        </div>
                    </div>

                </div>
            </Drawer>
        </>
    );
};
export default Resume;