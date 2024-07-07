import React from 'react';
import Image from 'next/image';
import icon from '../../../../public/images/analytics/userTimeline/⭐️ Icon.svg'
import salesChart from '../../../../public/images/analytics/userTimeline/salesChart.svg'

function Sales(props) {
    return (
        <div className='bg-white p-3 rounded-lg shadow-md py-7 px-6'>
            <div className='flex justify-between'>
                <h4 className='capitalize text-primary-heading text-2xl'>sales</h4>
                <Image src={icon} alt='' />
            </div>
            <p className='capitalize text-sm text-primary-parag'>last 8 months</p>
            <div className='my-4 flex gap-5'>
                <div className='flex gap-2'><span className='text-primary-purpuleish text-xl self-center font-bold'>o</span> <p className='self-center text-primary-heading capitalize'>sales</p></div>
                <div className='flex gap-2'><span className='text-blueish text-xl self-center font-bold'>o</span> <p className='self-center text-primary-heading capitalize'>visits</p></div>
            </div>
            <div className='flex justify-center '><Image src={salesChart} width={400}  alt='sales-chart' /></div>
        </div>
    );
}

export default Sales;