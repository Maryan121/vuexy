import React from 'react';
import Image from 'next/image';
import Logo from '../login/logo';
import mask from '../../../public/images/sidebar/Mask.png'

function Sidebar(props) {
    return (
        <div className='bg-white px-6 py-7 rounded shadow shadow-lg' style={{height:'100vh'}}>
            <div className='flex justify-between'>
                <Logo />
                <Image src={mask} className='self-center' alt='mask-icon' />
            </div>
        </div>
    );
}

export default Sidebar;