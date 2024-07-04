import React from 'react';
import Image from 'next/image';

function CommentTemplate({title,name,image,date,comment,reply,icon}) {
    return (
        <main className='py-5 px-5 md:px-10'>
            <h5 className='uppercase my-2 text-grayish text-sm '>{title}</h5>
             <div className='bg-white rounded flex gap-3 py-6 px-5 md:px-10'>
                <Image src={image} width={40} className='self-start' alt='' />
                <div>
                    <h6 className='text-primary-heading capitalize'>{name}</h6>
                    <p className='text-xs capitalize text-primary-parag text-light'>{date}</p>
                    <p className='mt-2 text-primary-parag '>{comment}</p>
                    <div className='flex gap-3 pt-3'>
                        <Image src={icon} alt='' />
                        <button className='capitalize text-primary-purpuleish hover:opacity-80'>{reply}</button>
                    </div>
                </div>
            </div>
        </main>
       
    );
}

export default CommentTemplate;