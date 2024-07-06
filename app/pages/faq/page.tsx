import React from 'react';
import Image from 'next/image';
import banner from '../../../public/images/faq/Banner.svg'
// import searchIcon from '../../../public/images'

function page(props) {
    return (
        <div className='mx-4'>
            <div className='relative'>
                <Image src={banner} className='w-full'  alt='banner' />
                <div className='absolute top-32 left-1/3 text-center'>
                    <h3 className='text-primary-purpuleish text-2xl'>Let's answer some questions</h3>
                    <p className='text-sm text-primary-parag my-2'>or choose a category to quickly find the help you need</p>
                    <div className='bg-white p-1 px-3'>
                        <input type="text" className='w-full ' placeholder='ask a question'/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default page;