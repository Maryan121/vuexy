'use client'
import React,{useState} from 'react';
import Navbar from '@/app/components/navbar/navbar';
import Sidebar from '@/app/components/sidebar/sidebar';
import SubHeader from '@/app/components/subHeader/subHeader';
import Footer from '@/app/components/footer';
import RecentPostsSec from '@/app/components/recentPosts/recentPostsSec';

function BlogListLayout({children}) {
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
               <SubHeader />
               <div className='lg:grid grid-cols-5 gap-4 md:px-7 '>
                    <section className='col-span-4' style={{height:"80vh",overflow:'scroll'}}>
                        {children} 
                    </section>
                    <section>
                        <RecentPostsSec />
                    </section>
               </div>
                
                <Footer />
            </div>
            
        </div>
    );
}

export default BlogListLayout;