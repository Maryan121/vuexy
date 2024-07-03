import React from 'react';
import SidebarTemplate from './sidebarTemplate';
import Image from 'next/image';
import backArrow from '../../../public/images/backArrow.png'
import tIcon from '../../../public/images/sidebar/uiElements/t.svg'
import ovalIcon from '../../../public/images/sidebar/uiElements/oval.svg'
import penIcon from '../../../public/images/sidebar/uiElements/pen.svg'
import cardIcon from '../../../public/images/sidebar/uiElements/card.svg'
import bagIcon from '../../../public/images/sidebar/uiElements/bag.svg'
import cubeIcon from '../../../public/images/sidebar/uiElements/cube.svg'

function UiElements(props) {
    return (
        <div className='mt-2'>
             <h6 className='mt-2 capitalize text-sm text-grayish'>ui elements</h6>
             <SidebarTemplate text='typography' icon={tIcon} style='flex gap-3 text-xs text-primary-heading capitalize mt-3'/>
             <SidebarTemplate text='colors' icon={ovalIcon} style='flex gap-3 text-xs text-primary-heading capitalize mt-3'/>
             <SidebarTemplate text='feather' icon={penIcon} style='flex gap-3 text-xs text-primary-heading capitalize mt-3'/>
             <div className='flex justify-between mt-3'>
                <SidebarTemplate text='card' icon={cardIcon} style='flex gap-3 text-xs text-primary-heading capitalize '/>
                <button className='self-center bg-orange text-xs px-3 py-1 font-bold rounded-full capitalize text-white hover:opacity-80 btn-small'>new</button>
             </div>
             <div className='flex justify-between mt-3'>
                <SidebarTemplate text='components' icon={bagIcon} style='flex gap-3 text-xs text-primary-heading capitalize'/>
                <Image src={backArrow} className='self-center rotate-180' alt='back-arrow' />
             </div>
             <div className='flex justify-between mt-3'>
                <SidebarTemplate text='extra components' icon={cubeIcon} style='flex gap-3 text-xs text-primary-heading capitalize'/>
                <Image src={backArrow} className='self-center rotate-180' alt='back-arrow' />
             </div>
        </div>
    );
}

export default UiElements;