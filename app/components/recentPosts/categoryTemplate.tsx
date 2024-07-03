import React from 'react';
import Image from 'next/image';

function CategoryTemplate({text,image,style}) {
    return (
        <div className='flex gap-3 mt-3 '>
            <div className={style}>
                <Image src={image} alt='#'/> 
            </div>
           
            <p className='self-center text-sm text-primary-heading capitalize'>{text}</p>
        </div>
    );
}

export default CategoryTemplate;