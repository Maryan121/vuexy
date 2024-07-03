import React from 'react';
import RecentPostsTemplate from './recentsPostsTemplate';
import blogImage1 from '../../../public/images/recentPosts/postImage1.png'
import blogImage2 from '../../../public/images/recentPosts/postImage2.png'
import blogImage3 from '../../../public/images/recentPosts/postImage3.png'
import blogImage4 from '../../../public/images/recentPosts/postImage4.png'
import watch from '../../../public/images/recentPosts/watch.svg'
import cart from '../../../public/images/recentPosts/cart.svg'
import gaming from '../../../public/images/recentPosts/gaming.svg'
import hash from '../../../public/images/recentPosts/hash.svg'
import video from '../../../public/images/recentPosts/video.svg'
import CategoryTemplate from './categoryTemplate';


function RecentPostsSec(props) {
    return (
        <div className='p-3'>
            <input className='outline-none text-sm p-2 capitalize  rounded border-2 w-full ' type="text" placeholder='placeHolder'/>
            <h4 className='text-grayish uppercase mt-7 text-xs'>recent posts</h4>
            <div className='flex flex-col gap-3'>
                <RecentPostsTemplate title='why should forget facebook?' image={blogImage1} date='jan 14 2020' />
                <RecentPostsTemplate title='Publish your passions, your way' image={blogImage2} date='mar 04 2020' />
                <RecentPostsTemplate title='The Best Ways to Retain More' image={blogImage3} date='feb 18 2020' />
                <RecentPostsTemplate title='Share a Shocking Fact or Statistic' image={blogImage4} date='oct 08 2020' />
            </div>

            <h4 className='text-grayish uppercase mt-9 text-xs'>categories</h4>
            <CategoryTemplate image={watch} text='fashion' style='self-center p-2 rounded bg-lightpurple'/>
            <CategoryTemplate image={cart} text='food' style='self-center p-2 rounded bg-lightgreen' />
            <CategoryTemplate image={gaming} text='gaming' style='self-center p-2 rounded bg-lightred' />
            <CategoryTemplate image={hash} text='qoute' style='self-center p-2 rounded bg-lightblue'/>
            <CategoryTemplate image={video} text='video' style='self-center p-2 rounded bg-lightorange'/>
        </div>
    );
}

export default RecentPostsSec;