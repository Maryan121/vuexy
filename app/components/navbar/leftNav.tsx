import React from 'react';
import Image from 'next/image';
import check from '../../../public/images/check.png'
import message from '../../../public/images/message.png'
import mail from '../../../public/images/mail.png'
import calender from '../../../public/images/calender.png'
import star from '../../../public/images/star.png'

function LeftNav(props) {
    return (
        <div className='flex gap-4'>
            <Image className='self-center cursor-pointer' src={check} alt='check-icon' />
            <Image className='self-center cursor-pointer' src={message} alt='message-icon' />
            <Image className='self-center cursor-pointer' src={mail} alt='mail-icon' />
            <Image className='self-center cursor-pointer' src={calender} alt='calendar-icon' />
            <Image className='self-center cursor-pointer' src={star} alt='star-icon'/>
        </div>
    );
}

export default LeftNav;