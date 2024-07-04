import React from 'react';
import Image from 'next/image';
import fourDot from '../../../public/images/fourDot.svg'
import home from '../../../public/images/subHeader/home.svg'
import backArrow from '../../../public/images/backArrow.png'

function SubHeader(props) {
    return (
        <div className='flex justify-between p-1 md:px-4 m-4'>
            <div className='flex md:gap-5'>
                <h5 className='capitalize text-primary-heading md:text-xl'>details</h5>
                <div className='flex gap-1 sm:gap-2'>
                    <Image src={home} className='self-center' alt='home-icon'/>
                    <Image src={backArrow} className='self-center rotate-180' alt='back-arrow' />
                </div>
                <div className='flex gap-1'>
                    <p className='capitalize text-primary-purpuleish self-center font-light text-sm'>pages</p>
                    <Image src={backArrow} className='self-center rotate-180' alt='back-arrow' />    
                </div>
                <div className='flex gap-1'>
                    <p className='capitalize text-primary-purpuleish self-center font-light text-sm'>user</p>
                    <Image src={backArrow} className='self-center rotate-180' alt='back-arrow' />    
                </div>
                <p className='self-center text-primary-heading capitalize text-sm'>user sethings</p>
            </div>
            <div className='self-center bg-primary-purpuleish p-1 md:p-2 rounded-md'>
                <Image src={fourDot} alt='icon' />
            </div>
        </div>
    );
}

export default SubHeader;