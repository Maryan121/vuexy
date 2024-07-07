import React from 'react';
import Image from 'next/image';
import decorLeft from '../../../../public/images/analytics/decore-left.svg'
import decorRight from '../../../../public/images/analytics/decore-right.svg'
import shape from '../../../../public/images/analytics/Shape.svg'

function Congratulation(props:any) {
    return (
        <div className=' bg-gradient-to-r from-primary-purpuleish to-gradient text-white  flex flex-col gap-2 justify-center h-60 p-3 lg:p-9 py-10 rounded-lg relative'>
            <Image src={shape} className='self-center my-4' alt=''/>
            <h3 className='self-center capitalize text-3xl'>Congratulations John,</h3>
            <p className='self-center text-sm md:px-32 text-center leading-5'>You have done <span className='font-bold'>57.6%</span> more sales today. Check your new badge in your profile.</p>
            <Image src={decorLeft} className='absolute top-0 left-0' alt='lef-decor' />
            <Image src={decorRight} alt='right-decor' className='absolute top-0 right-0' />
        </div>
    );
}

export default Congratulation;