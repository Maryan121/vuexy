import React,{useState} from 'react';
import LeftNav from './leftNav';
import RightNav from './rightNav';
import Logo from '../login/logo';
import {FaBars} from 'react-icons/fa'

function Navbar(props) {
    
    return (
        <div className='flex justify-between  bg-white px-3 py-2 bg-white rounded-md shadow shadow-lg md:m-4 '>
            <div className='self-center  md:hidden cursor-pointer' onClick={props.toggleMenu}><FaBars /></div>
            <LeftNav />
            <RightNav toggleCompo = {props.toggleCompo}/>
        </div>
    );
}

export default Navbar;