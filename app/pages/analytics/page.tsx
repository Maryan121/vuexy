'use client'
import React,{useState} from 'react';
import Sidebar from '@/app/components/sidebar/sidebar';
import Navbar from '@/app/components/navbar/navbar';
import Congratulation from './components/congratulation';
import Subscribers from './components/subscribers';
import Orders from './components/orders';
import AvgSessions from './components/avgSessions';
import SupportTracker from './components/supportTracker';
import UserTime from './components/userTime';
import Table from './components/table/table';
import Notification from '@/app/components/navbar/dropDowns/notification';

function Analytics(props) {
    const[isSidebarOpen,setSidebarOpen] = useState(false)
    const toggleMenu = () => {
        setSidebarOpen(!isSidebarOpen)
    }
    const[showCompo,setShowCompo] = useState(false)
    function toggleCompo(){
        setShowCompo(!showCompo)
    }
    return (
        <div className='grid md:grid-cols-10 bg-primary-bg' style={{overflowX:'hidden'}}>
            <div>
                <Sidebar  isSidebarOpen={isSidebarOpen} toggleMenu={toggleMenu}/>
            </div>
            <div className='md:col-span-9 lg:mx-2'>
                <Navbar toggleMenu={toggleMenu} toggleCompo={toggleCompo}/>
                {/* dropdowns */}
                <Notification toggleCompo = {toggleCompo} showCompo={showCompo}/>
                <div className='lg:mx-6 mt-4'  style={{height:'90vh', overflow:'scroll'}}>
                    <section className='grid gap-4 md:grid-cols-2'>
                        <div><Congratulation /></div>
                        <div className='grid md:grid-cols-2 gap-4 md:gap-3'>
                            <Subscribers />
                            <Orders />
                        </div>
                        <AvgSessions />
                        <SupportTracker />
                    </section>  
                    <UserTime />
                    <Table />
                </div>
                  
                
            </div>
            
        </div>
    );
}

export default Analytics;