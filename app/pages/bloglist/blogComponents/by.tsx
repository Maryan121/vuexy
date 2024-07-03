import React from 'react';
import Image from 'next/image';

function By({personImg,date,name}) {
    return (
        <div className='flex gap-3 my-3'>
            <Image src={personImg} className='self-center' alt='' />
            <div className='self-center flex gap-2'>
                <span className='text-sm text-grayish self-center'>by</span>
                <p className='text-sm self-center text-primary-heading capitalize font-bold'>{name}</p>   
            </div>
            <hr className='self-center border w-3 rotate-90'/>
            
            <p className='self-center text-sm text-grayish capitalize'>{date}</p>
        </div>
    );
}

export default By;