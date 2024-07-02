import React from 'react';
import Navbar from '@/app/components/navbar/navbar';
import Sidebar from '@/app/components/sidebar/sidebar';
import SubHeader from '@/app/components/subHeader/subHeader';

function BlogList(props) {
    return (
        <div className='grid grid-cols-8 bg-primary-bg'>
            <div className=''>
                <Sidebar />
            </div>
            <div className='col-span-7 '>
                <Navbar />
                <SubHeader />
            </div>
            
        </div>
    );
}

export default BlogList;