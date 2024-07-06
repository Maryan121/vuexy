import React from 'react';
import Image from 'next/image';
import cubicIcon from '../../../../public/images/analytics/cubic.svg'
import chart from '../../../../public/images/analytics/chart.svg'
import chartLine from '../../../../public/images/analytics/chartLine.svg'


function Orders(props) {
    return (
        <div className='bg-white p-4 relative flex flex-col gap-3 rounded-lg shadow-md px-6 h-60'>
            <Image src={cubicIcon} width={37} className='bg-lightpurple p-2 rounded-full' alt='' />
            <h3 className='font-bold text-3xl text-primary-heading'>38.4K</h3>
            <p className='text-sm text-primary-parag'>Orders Received</p>
            <Image src={chartLine} className='absolute bottom-3 right-0 w-full' alt='' />
            <Image src={chart} className='absolute bottom-0 right-0 w-full' alt='' />
            
        </div>
    );
}

export default Orders;