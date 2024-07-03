import React from 'react';
import SidebarTemplate from './sidebarTemplate';
import Image from 'next/image';
import backArrow from '../../../public/images/backArrow.png'
import copyIcon from '../../../public/images/sidebar/forms/copy.svg'
import notesIcon from '../../../public/images/notes.svg'
import shapeIcon from '../../../public/images/sidebar/forms/Shape.svg'
import tableIcon from '../../../public/images/sidebar/forms/table.svg'
import checkIcon from '../../../public/images/check.png'
import dots from '../../../public/images/sidebar/fourDot.svg'

function  FormsAndTables(props) {
    return (
        <div >
             <h6 className='mt-3 capitalize text-sm text-grayish'>forms & tables</h6>
             <div className='flex justify-between mt-3'>
                <SidebarTemplate text='form elements' icon={copyIcon} style='flex gap-3 text-xs text-primary-heading capitalize'/>
                <Image src={backArrow} className='self-center rotate-180' alt='back-arrow' />
             </div>
             <SidebarTemplate text='form layout' icon={notesIcon} style='flex gap-3 text-xs text-primary-heading capitalize mt-3'/>
             <SidebarTemplate text='form wizard' icon={shapeIcon} style='flex gap-3 text-xs text-primary-heading capitalize mt-3'/>

             <SidebarTemplate text='form validation' icon={checkIcon} style='flex gap-3 text-xs text-primary-heading capitalize mt-3'/>
             <SidebarTemplate text='table' icon={tableIcon} style='flex gap-3 text-xs text-primary-heading capitalize mt-3'/>
             <SidebarTemplate text='datatable' icon={dots} style='flex gap-3 text-xs text-primary-heading capitalize mt-3'/>
             <SidebarTemplate text='agGrid table' icon={dots} style='flex gap-3 text-xs text-primary-heading capitalize mt-3'/>
        </div>
    );
}

export default FormsAndTables;