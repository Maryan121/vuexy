import React from 'react';
import LeftNav from './leftNav';
import RightNav from './rightNav';
import Logo from '../login/logo';

function Navbar(props) {
    return (
        <div className='flex justify-end sm:justify-between bg-white px-3 py-2 bg-white rounded-md shadow shadow-lg md:m-4 '>
            <div className='self-center mr-5 md:hidden cursor-pointer' onClick={props.toggleMenu}><Logo /></div>
            <LeftNav />
            <RightNav />
        </div>
    );
}

export default Navbar;