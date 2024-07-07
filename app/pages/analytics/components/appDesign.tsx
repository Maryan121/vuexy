import React from 'react';
import Image from 'next/image';
import Tags from '../../bloglist/blogComponents/tags';
import jorge from '../../../../public/images/blocklist/jorge.png'
import ghani from '../../../../public/images/blocklist/ghani.png'
import claudia from '../../../../public/images/blocklist/claudia.png'
import Button from '@/app/components/button';


function AppDesign(props) {
    return (
        <div className='bg-white p-3 rounded-lg shadow-md py-7 px-6 relative'>
            <div className='flex'><p className='text-primary-purpuleish text-xs bg-lightpurple font-bold p-1 px-2 rounded capitalize '>03, sep, 20</p></div>
            <h4 className='capitalize text-primary-heading text-xl my-3'>app design</h4>
            <p className='text-primary-parag text-sm capitalize leading-5'>You can Find Only Post and Quotes Related to IOS like ipad app design, iphone app design</p>
        
            {/* team */}
            <div className='mt-6'>
                <h5 className='uppercase text-grayish text-sm'>team</h5>
                <div className='flex gap-3'>
                    <Tags text='figma' style='bg-lightorange text-orange p-1 px-3 font-bold text-xs capitalize rounded'/>
                    <Tags text='reframe' style='bg-lightpurple text-primary-purpuleish p-1 px-3 font-bold text-xs capitalize rounded'/>
                </div>
            </div>

            {/* members */}
            <div className='mt-5'>
                <h5 className='uppercase text-grayish text-sm'>members</h5>
                <div className='flex my-2 gap-2'>
                    <Image src={jorge} className='self-center'  alt=''/>
                    <p className='text-red bg-lightred px-2 text-xs self-center p-1 uppercase rounded-full font-bold'>pi</p>
                    <Image src={ghani} className='self-center '  alt=''/>
                    <Image src={claudia} className='self-center'  alt='' />
                    <p className='text-primary-parag bg-gray-200 px-2 text-xs self-center p-1 uppercase rounded-full font-bold'>all</p>
                </div>
            </div>

            {/* due date */}

            <div className='grid grid-cols-3 gap-3 mt-10'>
                <div className='bg-gray-100 p-1 rounded-lg text-center'>
                    <h5 className='text-grayish capitalize text-sm'>due date</h5>
                    <p className='text-sm text-primary-heading capitalize'>april 12, 8</p>
                </div>
                <div className='bg-gray-100 p-1 rounded-lg text-center'>
                    <h5 className='text-grayish capitalize text-sm'>budget</h5>
                    <p className='text-sm text-primary-heading capitalize'>$49251.91</p>
                </div>
                <div className='bg-gray-100 p-1 rounded-lg text-center'>
                    <h5 className='text-grayish capitalize text-sm'>cost</h5>
                    <p className='text-sm text-primary-heading capitalize'>$840.99</p>
                </div>
            </div>

            <div className='mt-28 mx-6'><Button text='join team' href='#'/></div>
        </div>
    );
}

export default AppDesign;