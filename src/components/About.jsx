import React from 'react';
import TitleContainer from './TitleContainer';
import Introduction from './Introduction';
import Expertise from './Expertise';
import UsedTechnologies from './UsedTechnologies';

const About = () => {
    return (
        <div className='md:w-9/12 mx-auto space-y-10'>

            <TitleContainer
                title='about me'
                subTitle='Get to know me'
            />

            <Introduction />

            <Expertise />

            <UsedTechnologies />

        </div>
    );
};

export default About;