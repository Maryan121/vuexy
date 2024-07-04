import React from 'react';
import Navbar from '@/app/components/navbar/navbar';
import Sidebar from '@/app/components/sidebar/sidebar';
import SubHeader from '@/app/components/subHeader/subHeader';
import Footer from '@/app/components/footer';
import RecentPostsSec from '@/app/components/recentPosts/recentPostsSec';

function BlogListLayout({children,navbar,sidebar}) {
    return (
        <div className='grid grid-cols-8  bg-primary-bg'>
            <div>
                <Sidebar />
            </div>
            <div className='col-span-7'>
               <Navbar />
               <SubHeader />
               <div className='grid grid-cols-5 gap-4 px-7 '>
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