import React from 'react';
import Image from 'next/image';
import ByTemplate from './by';
import Tags from './tags';
import Link from 'next/link';


function BlogDetailTemplate({title,image,name,personImg,date,description,tagName1,tagStyle1,tagName2,tagStyle2,commentIcon,comment,saveIcon,numSaves,shareIcon,commentorImg,commentorName,commentorComment}) {
    return (
        <div className='flex flex-col py-2 px-5 mx:px-10'>
            <div className=''>
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
                <ul className='capitalize text-primary-heading py-4'>Unprecedented Challenge
                    <li className='text-primary-parag text-sm lowercase mt-2'>- Preliminary thinking systems</li>
                    <li className='text-primary-parag text-sm lowercase '>- Bandwidth efficient</li>
                    <li className='text-primary-parag text-sm lowercase '>- Green space</li>
                    <li className='text-primary-parag text-sm lowercase '>- Social impact</li>
                    <li className='text-primary-parag text-sm lowercase '>- Thought partnership</li>
                    <li className='text-primary-parag text-sm lowercase '>- Fully ethical life</li>
                </ul>
                <article className='flex gap-4 py-2'>
                    <Image src={commentorImg} className='self-center' width={70} alt={`${commentorName} image`}/>
                    <div className='self-center flex flex-col gap-1'>
                        <h6 className='capitalize font-bold text-primary-heading'>{commentorName}</h6>
                        <p className='text-primary-parag text-sm'>{commentorComment}</p>
                    </div>
                </article>
                <hr className='my-4' />
                
                <section className='flex justify-between py-2'>
                    <div className='flex gap-4 self-center'>
                        <div className='self-center flex gap-2'>
                            <Image src={commentIcon} className='self-center' alt=''/>
                            <p className='self-center'>{comment}</p>
                        </div>
                        <div className='self-center flex gap-2'>
                            <Image src={saveIcon} className='self-center' alt=''/>
                            <p>{numSaves}</p>
                        </div>
                    </div>
                    <Image src={shareIcon} alt='share-icon' />
                
                </section>
                
            </div>
        </div>
    );
}

export default BlogDetailTemplate;