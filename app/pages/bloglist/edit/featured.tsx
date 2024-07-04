import React from 'react';
import Image from 'next/image';
import featuredImg from '../../../../public/images/blocklist/postImage4.png'
import Link from 'next/link';

function Featured(props:any) {
    return (
        <div className='border py-4 px-6 my-5 rounded-md'>
            <h4 className='capitalize text-primary-heading text-lg'>featured image</h4>
            <div className=' md:flex gap-5 mt-3'>
                <Image src={featuredImg} width={190} className='rounded-md' alt='featured-image' />
                <div className='self-start'>
                    <h6 className='capitalize text-primary-heading'>main image:</h6>
                    <p className='capitalize text-grayish text-sm my-1'>required image resolution 800x400, image size 10mb</p>
                    <Link href='https://pixinvent.com/images/banner.jpg' className='text-primary-purpuleish mt-3 '>https://pixinvent.com/images/banner.jpg</Link>
                    <div >
                        <input type="text" placeholder='choose file' className=' outline-none border md:rounded-l-md p-1 px-2 text-primary-parag' />
                        <button className='capitalize bg-primary-purpuleish text-white md:rounded-r-md p-1 px-3 hover:opacity-80'>browse</button>
                    </div>
                </div>
            </div>
            
              
          
           
        </div>
    );
}

export default Featured;