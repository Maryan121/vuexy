import React from 'react';
import LeftNav from './leftNav';
import RightNav from './rightNav';

function Navbar(props) {
    return (
        <div className='flex justify-between bg-white px-4 py-2 bg-white rounded-md shadow shadow-lg m-4 '>
            <LeftNav />
            <RightNav />
        </div>
    );
}

export default Navbar;