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
            <h1 className='text-5xl font-semibold text-center my-10'>Our Projects</h1>

            <div className='grid grid-cols-4 gap-5'>
                {
                    projects.map((project, index) =>
                        <PorjectCard
                            key={index}
                            image={project?.image}
                            title={project?.title}
                            description={project?.description}
                            additionalInfo={project?.additionalInfo}
                        />

                    )
                }
            </div>

        </div>
    );
};

export default Portfolio;