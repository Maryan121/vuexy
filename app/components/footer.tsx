import React from 'react';
import Image from 'next/image';
import loveIcon from '../../public/loveIcon.svg'

function Footer(props) {
    return (
        <div className='flex justify-between px-16 my-4'>
            <div>
                <p className='uppercase text-primay-heading font-light text-sm'>copyright &copy; 2020 <span className='ml-4 capitalize text-primary-purpuleish font-bold'>pixinvent</span></p>
            </div>
            <div className='flex gap-2'>
                <p className='self-center capitalize text-primary-heading font-light text-sm'>hand-crafted & made with</p>
                <Image src={loveIcon} className='self-center' alt='love-icon' />
            </div>
        </div>
    );
}

export default Footer;