import React from 'react';
import PorjectCard from './PorjectCard';

const projects = [
    {
        image: 'https://i.ibb.co/nDD34Mb/jute1.jpg',
        title: 'Project Title',
        description: 'Project Description',
        additionalInfo: 'Project Details'
    },
    {
        image: 'https://i.ibb.co/nDD34Mb/jute1.jpg',
        title: 'Project Title',
        description: 'Project Description',
        additionalInfo: 'Project Details'
    },
    {
        image: 'https://i.ibb.co/nDD34Mb/jute1.jpg',
        title: 'Project Title',
        description: 'Project Description',
        additionalInfo: 'Project Details'
    },
    {
        image: 'https://i.ibb.co/nDD34Mb/jute1.jpg',
        title: 'Project Title',
        description: 'Project Description',
        additionalInfo: 'Project Details'
    },
    {
        image: 'https://i.ibb.co/nDD34Mb/jute1.jpg',
        title: 'Project Title',
        description: 'Project Description',
        additionalInfo: 'Project Details'
    },
    {
        image: 'https://i.ibb.co/nDD34Mb/jute1.jpg',
        title: 'Project Title',
        description: 'Project Description',
        additionalInfo: 'Project Details'
    },
]

const Portfolio = () => {
    return (
        <div className='min-h-screen w-[80%] mx-auto'>
            <h1 data-aos="" className='text-5xl font-semibold text-center my-10'>Our Projects</h1>

            {
                projects.map((project, index) =>
                    <div
                        data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}
                        className={`flex ${index % 2 === 0 ? 'flex-col-reverse' : ''} my-10`}
                    >
                        <div className='grow h-20'>
                            {/* DESIGN PURPOSE ONLU */}
                        </div>

                        <div className=''>
                            <PorjectCard
                                key={index}
                                image={project?.image}
                                title={project?.title}
                                description={project?.description}
                                additionalInfo={project?.additionalInfo}
                            />
                        </div>
                    </div>

                )
            }
            {/* </div> */}

        </div>
    );
};

export default Portfolio;