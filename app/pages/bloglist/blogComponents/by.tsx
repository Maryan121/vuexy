import React from 'react';
import Image from 'next/image';

function By({personImg,name,date}) {
    return (
        <div className='flex gap-3 my-2'>
            <Image src={personImg} className='self-center' alt='' />
            <div className='flex gap-2'>
                <span className='text-sm self-center text-grayish'>by</span>
                <p className='text-sm self-center capitalize text-primary-heading font-bold'>{name}</p>
                <p className='text-sm self-center capitalize text-grayish'>{date}</p>
            </div>
            
        </div>
    );
}

export default By;