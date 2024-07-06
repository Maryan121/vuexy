import React from 'react';
import Image from 'next/image';
import illustration from '../../../public/images/pricing/Illustration.svg'
import Button from '@/app/components/button';

function FreeTrial(props) {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:justify-around text-start px-5 md:px-0 my-10' style={{backgroundColor:'#BABFC71F'}}>
            <div className='self-center flex flex-col gap-1'>
                <h3 className='text-primary-purpuleish p-4 md:text-2xl'>Still not convinced? Start with a 14-day FREE trial!</h3>
                <p className='text-primary-parag text-sm'>You will get full access to with all the features for 14 days.</p>
                <div className='self-start'><Button text='start 14-day FREE trial'  href='#'/></div>
            </div>
            <Image src={illustration} className='self-start md:-mt-12' alt='illustration'/>
            
        </div>
    );
}

export default FreeTrial;