import React from 'react';
import Navbar from '@/app/components/navbar/navbar';
import Sidebar from '@/app/components/sidebar/sidebar';
import SubHeader from '@/app/components/subHeader/subHeader';
import RecentPostsSec from '@/app/components/recentPosts/recentPostsSec';
import postImage1 from '../../../public/images/blocklist/postImage1.png'
import postImage2 from '../../../public/images/blocklist/postImage2.png'
import postImage3 from '../../../public/images/blocklist/postImage3.png'
import postImage4 from '../../../public/images/blocklist/postImage4.png'
import postImage5 from '../../../public/images/blocklist/postImage5.png'
import postImage6 from '../../../public/images/blocklist/postImage6.png'
// import Template from './blogComponents/template';
import ghaniAvatar from '../../../public/images/blocklist/ghani.png'
import jorgeAvatar from '../../../public/images/blocklist/jorge.png'
import messageIcon from '../../../public/images/message.png'
import fred from '../../../public/images/blocklist/fred.png'
import billy from '../../../public/images/blocklist/billy.png'
import fredboone from '../../../public/images/blocklist/fredboone.png'
import claudia from '../../../public/images/blocklist/claudia.png'
import Footer from '@/app/components/footer';


function BlogDetails(props:any) {
    return (
        // <BlogLayout>
         <div className='grid grid-cols-8  bg-primary-bg'>
            <div className='shadow-xl md:shadow-none lg:flex'>
                <Sidebar />
            </div>
            <div className='col-span-7'>
                <Navbar />
                <SubHeader />
                 <div className='grid grid-cols-5 gap-4 px-7 '>
                    <section className='col-span-4 py-4 grid grid-cols-2' style={{height:"80vh",overflow:'scroll'}}>

                    </section>
                    <section>
                        <RecentPostsSec />
                    </section>
                   
                </div> 
                <Footer />
            </div>
            
        </div>
        // </BlogLayout>
    );
}

export default BlogDetails;