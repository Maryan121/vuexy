import React from 'react';
import Image from 'next/image';
import lineChart from '../../../../public/images/analytics/avgsessions/Chart.svg'
import Button from '@/app/components/button';
import blueChart from '../../../../public/images/analytics/avgsessions/Progress(2).svg'
import orangeChart from '../../../../public/images/analytics/avgsessions/Progress.svg'
import greenChart from '../../../../public/images/analytics/avgsessions/Progress(1).svg'
import redChart from '../../../../public/images/analytics/avgsessions/Progress(3).svg'

function AvgSessions(props) {
    return (
        <div className='bg-white p-3 rounded-lg shadow-md p-4 px-6 pb-10'>
            <div className='flex justify-between'>
               <div className='flex flex-col gap-3'>
                    <h3 className='text-primary-heading text-2xl font-bold'>2.7k</h3>
                    <p className='text-primary-parag capitalize'>Avg sessions</p>
                    <span> <span className='text-green-400'>+5.2%</span> vs last 7 days</span>
                </div>
                <p className='text-primary-parag capitalize'>last 7 days</p>  
            </div>
            <div className='flex justify-between align-middle'>
                <div className='self-end'><Button text='view details' href='#' /></div>
                <Image src={lineChart} className='self-center' alt=''/>
            </div>
            <hr className='my-6'/>
           <div className='grid grid-cols-2 gap-7'>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-primary-heading'>Goal: $100000</p>
                    <Image src={blueChart} alt=''/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-primary-heading'>Users: 100K</p>
                    <Image src={orangeChart} alt=''/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-primary-heading'>Retention: 90%</p>
                    <Image src={redChart} alt=''/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-primary-heading'>Duration: 1yr</p>
                    <Image src={greenChart} alt=''/>
                </div>
           </div>
            
        </div>
    );
}

export default AvgSessions;