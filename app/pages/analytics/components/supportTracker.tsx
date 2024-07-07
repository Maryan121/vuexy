import React from 'react';
import Image from 'next/image';
import cart from '../../../../public/images/analytics/support/Cart.svg'

function SupportTracker(props) {
    return (
        <div className='bg-white p-3 rounded-lg shadow-md p-4 px-6 relative'>
            <div className='flex justify-between'>
                <h4 className='text-xl font-bold text-primary-heading capitalize'>support tracker</h4>
                <p className='text-sm text-primary-parag capitalize'>last 7 days</p>
            </div>
            <div>
                <div className='flex flex-col gap-1 my-3'>
                    <h3 className='text-2xl text-primary-heading font-bold'>163</h3>
                    <span className='text-primary-parag text-sm capitalize'>tickets</span>
                </div>
                {/* <Image src={cart} alt='' /> */}
                <div className='text-center my-10'>
                    <p className='text-primary-heading capitalize md:text-2xl'>completed tickets</p>
                    <h4 className='text-primary-heading font-bold text-2xl'>83%</h4>
                </div>
                <section className='grid grid-cols-3 md:absolute left-10 bottom-5 ' style={{width:'90%'}}>
                    <div className='flex flex-col gap-2'>
                        <p className='capitalize text-primary-heading text-xs md:text-2xl'>new tickets</p>
                        <span className='text-primary-heading font-bold text-2xl md:ml-14'>29</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='capitalize text-primary-heading text-xs md:text-2xl'>open tickets</p>
                        <span className='text-primary-heading font-bold text-2xl md:ml-14'>63</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='capitalize text-primary-heading text-xs md:text-2xl'>response time</p>
                        <span className='text-primary-heading font-bold text-2xl md:ml-14'>1d</span>
                    </div>
                </section>
            </div>
           
            
        </div>
    );
}

export default SupportTracker;