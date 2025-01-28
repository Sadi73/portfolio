import React from 'react';
import { projects } from '../../utils/projects';
import TitleContainer from './TitleContainer';

const Portfolio = () => {

    const onclickHandler = (path) => {
        window.location.href = path;
    };

    return (
        <div className='md:w-9/12 mx-auto space-y-10'>

            <TitleContainer
                title='Portfolio'
                subTitle='Showcasing some of my best work'
            />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {projects.map(project =>
                    <div key={project?.id} className="image-card" >
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
    );
};

export default Portfolio;