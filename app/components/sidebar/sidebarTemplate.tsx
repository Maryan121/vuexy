import React from 'react';
import Image from 'next/image';

function SidebarHeadingTemplate({text,icon,style}) {
    return (
        <div className={style}>
            <Image src={icon} className='self-center' alt='text'/>
            <h5>{text}</h5>
        </div>
    );
}

export default SidebarHeadingTemplate;