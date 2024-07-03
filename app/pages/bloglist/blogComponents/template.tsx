import React from 'react';
import Image from 'next/image';
import ByTemplate from './by';
import Tags from './tags';
import Link from 'next/link';


function Template({title,image,name,personImg,date,description,tagName1,tagStyle1,tagName2,tagStyle2,commentIcon,comment,readmoreLink}) {
    return (
        <div className='flex flex-col py-2 px-10'>
            <div >
                <Image className='w-full' src={image} alt=''/>
            </div>
            <div className='bg-white p-4 px-6 rounded-md'>
                <h3 className='text-primary-heading capitalize text-lg'>{title}</h3>
                <ByTemplate personImg={personImg} name={name}  date={date}/>
                <div className='flex gap-3'>
                    <Tags text={tagName1}  style={tagStyle1}/>
                    {/* style='text-xs bg-lightblue p-1 rounded-full px-4 font-bold text-blueish capitalize ' */}
                    <Tags text={tagName2} style={tagStyle2}/>
                    {/* <Tags text='fashion' style='text-xs bg-lightpurple p-1 rounded-full px-4 font-bold text-primary-purpuleish capitalize ' />  */}
                </div>
                <p className='text-sm text-primary-parag leading-6 my-2'>{description}</p>
                <hr className='my-4' />
                
                <div className='flex justify-between'>
                    <div className='self-center flex gap-4'>
                        <Image src={commentIcon} className='self-center' alt='comment-icon' />
                        <p className='self-center'>{comment}</p>
                    </div>
                    <Link href={readmoreLink} className='self-center capitalize text-primary-purpuleish font-bold'>read more</Link>
                </div>
            </div>
        </div>
    );
}

export default Template;