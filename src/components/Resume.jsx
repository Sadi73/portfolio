import { Steps } from 'antd';
import React from 'react';
import { skills } from '../../utils/skills';

const Resume = () => {
    return (
        <div className='md:w-9/12 mx-auto space-y-10 mt-10'>
            <div className='text-[#f0f0f0]'>
                <p className='md:text-lg text-center'>Check out my resume</p>
                <h1 className='text-2xl md:text-5xl text-center'>RESUME</h1>
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
                    {skills.map(skill => <div key={skill?.id} className='relative flex items-center justify-center'>
                        <img src={skill.background} alt="" />
                        <div className='absolute flex flex-col justify-center items-center'>
                            <img className='w-12' src={skill.logo} alt="" />
                            <h3 className=''>{skill.name}</h3>
                        </div>
                    </div>)}
                </div>
            </div>

        </div>
    );
};

export default Resume;