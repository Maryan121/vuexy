import React,{useState} from 'react';
import Image from 'next/image';
import usFlag from '../../../public/images/navbar/usaFlag.png'
import mask from '../../../public/images/navbar/Mask.png'
import cart from '../../../public/images/navbar/cart.png'
import notification from '../../../public/images/navbar/notification.png'
import status from '../../../public/images/navbar/Status.png'

function RightNav(props) {
   
    return (
        <div className='flex gap-4 sm:gap-6'>
            <div className='flex gap-2'>
                <Image src={usFlag} className='self-center' alt='usa-flag' />
                <p className='self-center'>English</p>
            </div>
            <Image src={mask} className='self-center' alt='mask-icon' />
            <div className='relative  self-center'>
                <Image src={cart} alt='cart-icon' />
                <span className='absolute -top-2  -right-1 bg-primary-purpuleish text-white text-xs px-1 rounded-full'>8</span>
            </div>
            <div className='relative  self-center cursor-pointer' onClick={props.toggleCompo}> 
               
                <Image src={notification} alt='notification-icon' />
                <span className='absolute -top-2  -right-1 bg-red text-white text-xs px-1 rounded-full'>4</span>
            </div>
            <div className='flex gap-1 sm:gap-4'>
                <div className='flex flex-col self-center'>
                    <p className='capitalize text-primary-heading text-xs sm:text-sm'>john doe</p>
                    <p className='capitalize text-primary-parag text-xs self-end'>admin</p>
                </div>
                <Image src={status} alt='person-status' className='self-center cursor-pointer'/>
            </div>
        </div>
    );
}

export default RightNav;