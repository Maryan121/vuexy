'use client'
import React from 'react';
import Image from 'next/image';
import illustration from '../../../public/images/undermaintenance/Illustration.svg'
import Button from '@/app/components/button';


function PageUndermaintenance(props:any) {
    return (
        <div className='flex flex-col gap-2 text-center my-24 sm:my-28'>
            <h4 className='capitalize text-primary-heading text-lg font-bold'>Under Maintenance! ⚙️</h4>
            <p className='text-sm text-primary-parag p-4 leading-5 md:p-0'>Sorry for the inconvenience but we're performing some maintenance at the moment</p>
            <div className='self-center mt-3'><Button text='back to home' href='/pages/bloglist' onClick={()=>{}} /> </div>
            <div className='flex justify-center mt-24'><Image src={illustration} alt='illustration' /></div>
        </div>
    );
}

export default PageUndermaintenance;