import React from 'react';
import Image from 'next/image';
import loveIcon from '../../public/loveIcon.svg'

function Footer(props) {
    return (
        <div className='flex flex-col gap-3 sm:gap-0 text-center sm:text-left sm:flex-row sm:justify-between sm:px-16 my-4'>
            <div>
                <p className='uppercase text-primay-heading font-light text-xs sm:text-sm'>copyright &copy; 2020 <span className='ml-4 capitalize text-primary-purpuleish font-bold'>pixinvent</span></p>
            </div>
            <div className='flex md:gap-2 justify-center sm:justify-start'>
                <p className='self-center capitalize text-primary-heading font-light text-sm'>hand-crafted & made with</p>
                <Image src={loveIcon} className='self-center' alt='love-icon' />
            </div>
        </div>
    );
}

export default Footer;