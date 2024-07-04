import React from 'react';
import postImage from '../../../../public/images/blogDetail/postImage.png'
import Image from 'next/image';
import ghaniAvatar from '../../../../public/images/blocklist/ghani.png'
import commentorAvatar from '../../../../public/images/blocklist/claudia.png'
import messageIcon from '../../../../public/images/message.png'
import saveIcon from '../../../../public/images/save.svg'
import ShareIcon from '../../../../public/images/blogDetail/share.svg'
import BlogDetailTemplate from '../blogComponents/blogDetailTemplate';
import CommentTemplate from '../blogComponents/commenTemplate';
import commentImg from '../../../../public/images/blocklist/jorge.png'
import replyIcon from '../../../../public/images/blogDetail/reply.svg'
import LeaveComment from '../blogComponents/leaveComment';

function BlogDetails(props:any) {
    return (   
        <div>
          <BlogDetailTemplate
            image={postImage}
            title='The Best Features Coming to iOS and Web design'
            name='ghani paradita'
            personImg={ghaniAvatar}
            date='jan 10 2020'
            tagName1='gaming' tagStyle1='text-xs text-red bg-lightred font-bold rounded-full p-1 px-4'
            tagName2='video' tagStyle2='text-xs text-orange bg-lightorange font-bold rounded-full py-1 px-4'
            description="Before you get into the nitty-gritty of coming up with a perfect title,
             start with a rough draft: your working title. What is that, exactly? A lot of people
              confuse working titles with topics. Let's clear that Topics are very general and could
               yield several different blog posts. Think 'raising healthy kids,' or 'kitchen storage.'
                A writer might look at either of those topics and choose to take them in very, very different
                directions.A working title, on the other hand, is very specific and guides the creation of 
                a single blog post. For example, from the topic 'raising healthy kids,'' you could derive the 
                following working title See how different and specific each of those is? That's what makes them 
                working titles, instead of overarching topics."
            commentorImg={commentorAvatar}
            commentorName='willie clerk'
            commentorComment='Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends
            through photos and quotes by influential creatives and web designer around the world.'

            commentIcon={messageIcon}
            comment='19.1k'
            saveIcon={saveIcon}
            numSaves='139'
            shareIcon={ShareIcon}
          />

          <CommentTemplate title='comment' name='chad alexander' image={commentImg} 
            date='may 24 2020'
            comment='A variation on the question technique above, the multiple-choice question great way to engage your reader.'
            icon={replyIcon} reply='reply'
          />

          <LeaveComment />
           
        </div> 
          
    );
}

export default BlogDetails;