import React from 'react';
import Sidebar from '@/app/components/sidebar/sidebar';
import Navbar from '@/app/components/navbar/navbar';
import Congratulation from './components/congratulation';
import Subscribers from './components/subscribers';
import Orders from './components/orders';

function Analytics(props) {
    return (
        <div className='md:grid md:grid-cols-10 bg-primary-bg'>
            <div>
                <Sidebar />
            </div>
            <div className='md:col-span-9 md:mx-2'>
                <Navbar />
                <section className='grid gap-4 md:grid-cols-2 px-3 mt-4'>
                    <div><Congratulation /></div>
                    <div className='grid md:grid-cols-2 gap-4 md:gap-3'>
                        <Subscribers />
                        <Orders />
                    </div>
                </section>    
            </div>
            
        </div>
    );
}

export default Analytics;