import React from 'react';
import FeatureCard from './FeatureCard';
import { GrDocumentPdf, GrMultiple } from 'react-icons/gr';
import { FaGoogle } from 'react-icons/fa';
import { MdImportantDevices, MdSupportAgent } from 'react-icons/md';
import { FcOnlineSupport } from 'react-icons/fc';
import { PiToggleRightFill } from 'react-icons/pi';
import { SlSpeedometer } from 'react-icons/sl';

const Features = () => {
    return (
        <div className='bg-[#f8f9fa] p-10 space-y-10 min-h-screen'>
            <h1 className='text-center text-5xl'>Features</h1>

            <div className='grid grid-cols-4 gap-8'>
                <FeatureCard image={<GrDocumentPdf className='text-[#55E6A5] text-6xl' />} title={'Documentation Included'} />
                <FeatureCard image={<FaGoogle className='text-[#55E6A5] text-6xl' />} title={'Google Font'} />
                <FeatureCard image={<MdImportantDevices className='text-[#55E6A5] text-6xl' />} title={'Fully Responsive'} />
                <FeatureCard image={<PiToggleRightFill className='text-[#55E6A5] text-6xl' />} title={'Dark & Light Version'} />
                <FeatureCard image={<GrMultiple className='text-[#55E6A5] text-6xl' />} title={'Multi Page & One Page'} />
                <FeatureCard image={<MdSupportAgent className='text-[#55E6A5] text-6xl' />} title={'Great Support'} />
                <FeatureCard image={<SlSpeedometer className='text-[#55E6A5] text-6xl' />} title={'Fast Performance'} />
            </div>
        </div>
    );
};

export default Features;