import React from 'react';
import Image from 'next/image';
import peopleIcon from '../../../../public/images/analytics/people.svg'
import chart from '../../../../public/images/analytics/Path 2.svg'
import chartLine from '../../../../public/images/analytics/Path 1.svg'

function Subscribers(props) {
    return (
        <div className='bg-white p-4 flex flex-col relative gap-3 rounded-lg shadow-md px-6 h-60'>
            <Image src={peopleIcon} width={37} className='bg-lightpurple p-2 rounded-full' alt='' />
            <h3 className='font-bold md:text-3xl text-primary-heading'>92.6k</h3>
            <p className='text-sm text-primary-parag mb-7'>Subscribers Gained</p>
              
            <Image src={chartLine} className='absolute bottom-7 right-0 w-full' alt='' />
            <Image src={chart} className='absolute bottom-0 right-0 w-full' alt='' />
            
        </div>
    );
}

export default Subscribers;