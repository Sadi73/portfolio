import React from 'react';
import PorjectCard from './PorjectCard';
import projectImage1 from '../../assets/projects/1.png'
import projectImage2 from '../../assets/projects/2.png'
import projectImage3 from '../../assets/projects/3.png'
import projectImage4 from '../../assets/projects/4.png'
import projectImage5 from '../../assets/projects/5.png'
import bgImage from '../../assets/projects/backgroundImage.jpg'

const projects = [
    {
        image: projectImage1,
        title: 'Project Title',
        description: 'Project Description',
        additionalInfo: 'Project Details'
    },
    {
        image: projectImage2,
        title: 'Project Title',
        description: 'Project Description',
        additionalInfo: 'Project Details'
    },
    {
        image: projectImage3,
        title: 'Project Title',
        description: 'Project Description',
        additionalInfo: 'Project Details'
    },
    {
        image: projectImage4,
        title: 'Project Title',
        description: 'Project Description',
        additionalInfo: 'Project Details'
    },
    {
        image: projectImage5,
        title: 'Project Title',
        description: 'Project Description',
        additionalInfo: 'Project Details'
    },
]

const Portfolio = () => {
    return (
        <div className='max-w-[70%] mx-auto min-h-screen bg-[#E0E0E7] bg-opacity-50 px-20 py-10'
        >
            <h1 data-aos="" className='text-5xl font-semibold text-center my-10 text-black'>Recent Works</h1>

            {
                projects.map((project, index) =>
                    <div
                        data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}
                        className={`my-10 flex ${index % 2 === 0 ? 'flex-col-reverse' : ''} `}
                    >
                        <div className='grow max-h-10'>
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

        </div>
    );
};

export default Portfolio;