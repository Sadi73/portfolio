import React from 'react';
import { projects } from '../../utils/projects';
import TitleContainer from './TitleContainer';

const Portfolio = () => {
    return (
        <div className='lg:w-9/12 mx-auto space-y-10'>

            <TitleContainer
                title='Portfolio'
                subTitle='Showcasing some of my best work'
            />

            <div className='flex flex-col gap-20 font-montserrat'>
                {projects.map((project, index) =>
                    <div
                        key={project?.id}
                        className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-5`}
                    >
                        <img
                            src={project.image}
                            alt='project image'
                            className='h-64 w-full md:h-96 md:w-1/2 object-cover'
                        />

                        <div className='space-y-2 w-full md:w-1/2'>
                            <p className='text-xl font-thin'>{project?.category}</p>
                            <h1 className='text-lg font-semibold sm:text-3xl'>{project.title}</h1>

                            <div className='border border-[#5a5555] rounded bg-black p-5 text-xs lg:text-sm text-justify'>
                                <p>{project?.description}</p>
                            </div>

                            <ul className='flex flex-wrap gap-5'>
                                {project?.techStacks.map((stack, index) => (
                                    <li key={index}>{stack}</li>
                                ))}
                            </ul>

                            <div className='flex gap-2 text-xs'>
                                <a
                                    className='bg-white text-black hover:bg-black hover:text-white border p-2'
                                    href={project?.liveLink}
                                    target='_blank'
                                >
                                    Live Website
                                </a>

                                {project?.githubClient &&
                                    <a
                                        className='bg-white text-black hover:bg-black hover:text-white border p-2'
                                        href={project?.githubClient}
                                        target='_blank'
                                    >
                                        Frontend Code
                                    </a>
                                }

                                {project?.githubServer && (
                                    <a
                                        className='bg-white text-black hover:bg-black hover:text-white border p-2'
                                        href={project?.githubServer}
                                        target='_blank'
                                    >
                                        Backend Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div>

            </div>

        </div>
    );
};

export default Portfolio;