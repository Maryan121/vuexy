import React from 'react';
import Image from 'next/image';
import arrow from '../../../../../public/images/analytics/table/Icon.svg'
import ArrowsTemplate from './arrowsTemplate';

function TableHead(props) {
    return (
        <thead className='bg-gray-200 rounded-lg'>
            <tr className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 p-1'>
                <th className='flex gap-2 md:gap-10 px-6 text-sm self-center'>#
                    <ArrowsTemplate />
                </th>
                <th className='flex gap-2 md:gap-10 self-center'>
                    <Image src={arrow} alt=''/>
                    <ArrowsTemplate />
                </th>
                <th className='flex gap-3 md:gap-10 capitalize text-primary-heading text-xs md:text-lg self-center '>name 
                    <ArrowsTemplate />
                </th>
                <th className='flex  gap-2 md:gap-10 capitalize text-primary-heading  text-xs md:text-lg self-center'>total
                    <ArrowsTemplate />
                </th>
                <th className='flex hidden sm:table-cell  gap-2 md:gap-10 capitalize text-primary-heading self-center'>balance
                    {/* <ArrowsTemplate /> */}
                </th>
                <th className='hidden lg:table-cell  capitalize text-primary-heading self-center'>actions</th>
            </tr>
        </thead>
    );
}

export default TableHead;