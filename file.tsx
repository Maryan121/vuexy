import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../login/logo';
import mask from '../../../public/images/sidebar/Mask.png';
import SidebarTemplate from './sidebarTemplate';
import home from '../../../public/images/sidebar/home.svg';
import circleIcon from '../../../public/images/sidebar/circle.png';
import downArrow from '../../../public/images/sidebar/downArrow.svg';
import mail from '../../../public/images/mail.png';
import message from '../../../public/images/message.png';
import check from '../../../public/images/check.png';
import calender from '../../../public/images/calender.png';
import dots from '../../../public/images/sidebar/fourDot.svg';
import notes from '../../../public/images/notes.svg';
import file from '../../../public/images/sidebar/file.svg';
import cart from '../../../public/images/navbar/cart.png';
import person from '../../../public/images/sidebar/person.svg';
import backArrow from '../../../public/images/backArrow.png';
import UiElements from './uiElements';
import FormsAndTables from './formaAndTables';

function Sidebar(props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`absolute z-10 md:block bg-white px-6 py-7 rounded shadow shadow-lg sidebar ${isSidebarOpen ? 'block' : 'hidden md:block'}`}>
            <div className='flex justify-between'>
                <Logo />
                <Image src={mask} className='self-center cursor-pointer' alt='mask-icon' onClick={toggleSidebar} />
            </div>
            <div className='bg-primary-bg p-2 mt-4 flex justify-between'>
                <SidebarTemplate text='dashboards' icon={home} style='flex gap-3 text-primary-heading bg-primary-bg capitalize text-sm rounded ' />
                <div className='flex gap-1 self-center'>
                    <span className='self-center text-xs bg-primary-purpuleish rounded-full text-white px-1'>2</span>
                    <Image className='self-center ' src={downArrow} alt='dropdown-arrow' />
                </div>
            </div>

            <SidebarTemplate text='analytics' icon={circleIcon} style='flex gap-3 mt-1 text-white capitalize p-2 px-3 text-sm bg-primary-purpuleish rounded ' />
            <SidebarTemplate text='ecommerce' icon={circleIcon} style='flex gap-3 mt-1 text-primary-heading p-2 px-3 text-sm rounded ' />

            {/* apps section */}
            <h6 className='mt-3 capitalize text-sm text-grayish'>apps</h6>
            <SidebarTemplate text='email' icon={mail} style='flex gap-3 text-xs text-primary-heading capitalize mt-3' />
            <SidebarTemplate text='chat' icon={message} style='flex gap-3 text-xs text-primary-heading capitalize mt-3' />
            <SidebarTemplate text='todo' icon={check} style='flex gap-3 text-xs text-primary-heading capitalize mt-3' />
            <SidebarTemplate text='calender' icon={calender} style='flex text-xs gap-3 text-primary-heading capitalize mt-3' />
            <SidebarTemplate text='kanban' icon={dots} style='flex gap-3 text-xs text-primary-heading capitalize mt-3' />
            <div className='flex justify-between mt-3'>
                <SidebarTemplate text='invoice' icon={notes} style='flex gap-3 text-xs text-primary-heading capitalize' />
                <Image className='self-center rotate-180' src={backArrow} alt='dropdown-arrow' />
            </div>
            <SidebarTemplate text='file manager' icon={file} style='flex gap-3 text-xs text-primary-heading capitalize mt-3' />
            <div className='flex justify-between mt-3'>
                <SidebarTemplate text='ecommerce' icon={cart} style='flex gap-3 text-xs text-primary-heading capitalize' />
                <Image className='self-center rotate-180' src={backArrow} alt='dropdown-arrow' />
            </div>

            <div className='flex justify-between mt-3'>
                <SidebarTemplate text='user' icon={person} style='flex gap-3 text-xs text-primary-heading capitalize ' />
                <Image className='self-center rotate-180' src={backArrow} alt='dropdown-arrow' />
            </div>
            <UiElements />
            <FormsAndTables />
        </div>
    );
}

export default Sidebar;
