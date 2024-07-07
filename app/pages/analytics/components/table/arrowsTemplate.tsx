import React from 'react';
import Image from 'next/image';
import upArrow from '../../../../../public/images/up.svg'
import downArrow from '../../../../../public/images/down.svg'

function ArrowsTemplate(props) {
    return (
        <div className='flex flex-col gap-1 self-center'>
            <Image src={downArrow} alt='down-arrow' />
            <Image src={upArrow} alt='up-arrow' />
        </div>
    );
}

export default ArrowsTemplate;