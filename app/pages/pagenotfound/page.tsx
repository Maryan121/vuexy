'use client'
import React from 'react';
import Image from 'next/image';
import illustration from '../../../public/images/notFound/Illustration.svg'
import Button from '@/app/components/button';

function PageNotFound(props:any) {
    return (
        <div className='flex flex-col gap-2 text-center my-24 sm:my-28'>
            <h4 className='capitalize text-primary-heading font-bold text-lg'>Page Not Found ⚠️</h4>
            <p className='text-primary-parag text-sm p-3 md:p-0'>The requested URL /error was not found on this server.</p>         
            <div className='self-center mt-3'><Button text='back to home' href='/pages/bloglist' onClick={()=>{}} /> </div>

            <div className='flex justify-center mt-24'><Image src={illustration} alt='illustration' /></div>

        </div>
    );
}

export default PageNotFound;