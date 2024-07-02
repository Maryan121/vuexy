import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/Logo.png'

function Logo(props) {
    return (
        <div className='flex justify-center md:block'>
            <Image src={logo} alt='logo-image' />
        </div>
    );
}

export default Logo;