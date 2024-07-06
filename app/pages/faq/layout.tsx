'use client'
import React from 'react';
import { useState } from 'react';
import Sidebar from '@/app/components/sidebar/sidebar';
import Navbar from '@/app/components/navbar/navbar';
import Footer from '@/app/components/footer';

function layout({children}) {
    const[isSidebarOpen,setSidebarOpen] = useState(false)
    const toggleMenu = () => {
        setSidebarOpen(!isSidebarOpen)
    }
    return (
        <div className='md:grid grid-cols-8  bg-primary-bg'>
            <div>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleMenu={toggleMenu}/>
            </div>
            <div className='md:col-span-7'>
                <Navbar toggleMenu={toggleMenu}/>
                {children} 

                <Footer />
            </div>
           
            
        </div>
    );
}

export default layout;