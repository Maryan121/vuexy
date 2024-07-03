import React from 'react';
import Image from 'next/image';

function RecentPostsTemplate({title,date,image}) {
    return (
        <div className='flex gap-4 mt-3'>
            <div>
               <Image src={image} alt='title' />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                    <h4 className='capitalize text-primary-heading text-sm'>{title}</h4>
                    <p className='text-xs text-grayish capitalize'>{date}</p>
                </div>
            </div>
            
        </div>
    );
}

export default RecentPostsTemplate;