import React from 'react';
import postImage1 from '../../../public/images/blocklist/postImage1.png'
import postImage2 from '../../../public/images/blocklist/postImage2.png'
import postImage3 from '../../../public/images/blocklist/postImage3.png'
import postImage4 from '../../../public/images/blocklist/postImage4.png'
import postImage5 from '../../../public/images/blocklist/postImage5.png'
import postImage6 from '../../../public/images/blocklist/postImage6.png'
import Template from './blogComponents/template';
import ghaniAvatar from '../../../public/images/blocklist/ghani.png'
import jorgeAvatar from '../../../public/images/blocklist/jorge.png'
import messageIcon from '../../../public/images/message.png'
import fred from '../../../public/images/blocklist/fred.png'
import billy from '../../../public/images/blocklist/billy.png'
import fredboone from '../../../public/images/blocklist/fredboone.png'
import claudia from '../../../public/images/blocklist/claudia.png'


function BlogList(props:any) {
    return (
        <div className='grid grid-cols-2'>       
            <Template image={postImage1} name='chani paradita'
             title='The Best Features Coming to iOS and Web design' 
             personImg={ghaniAvatar} description='Cupcake ipsum dolor. Amet dessert donut candy chocolate bar cotton dessert candy.'
             tagName1='qoute' tagStyle1='text-xs bg-lightblue p-1 rounded-full px-4 font-bold text-blueish capitalize ' tagName2='fashion'
             tagStyle2='text-xs bg-lightpurple p-1 rounded-full px-4 font-bold text-primary-purpuleish capitalize'
              date='jan 10 2020'
              commentIcon={messageIcon} comment='76 comment' readmoreLink='/pages/bloglist/blogdetails'
            />
            <Template image={postImage2} name='jorge griffin'
             title='Latest The Quirky Funny Opening Sentence or Paragraph' 
             personImg={jorgeAvatar} description='Cupcake ipsum dolor. Amet dessert donut candy chocolate bar cotton dessert candy.'
             tagName1='gaming' tagStyle1='text-xs bg-lightred p-1 rounded-full px-4 font-bold text-red capitalize ' tagName2='video'
             tagStyle2='text-xs bg-lightorange p-1 rounded-full px-4 font-bold text-orange capitalize'
              date='jan 10 2020'
              commentIcon={messageIcon} comment='2.1k comment' readmoreLink='/pages/bloglist/blogdetails'
            />
            <Template image={postImage3} name='claudia neal'
            title='Share a Shocking Fact or Statistic' 
            personImg={claudia} description='Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate'
            tagName1='gaming' tagStyle1='text-xs bg-lightred p-1 rounded-full px-4 font-bold text-red capitalize ' tagName2='food'
            tagStyle2='text-xs bg-lightpurple p-1 rounded-full px-4 font-bold text-primary-purpuleish capitalize'
             date='jan 10 2020'
             commentIcon={messageIcon} comment='243 comment' readmoreLink='/pages/bloglist/blogdetails'
            />
            <Template image={postImage4} name='fred boone'
            title='Ask a Thought-Provoking Question' 
            personImg={fred} description='A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose now and again.'
            tagName1='video' tagStyle1='text-xs bg-lightorange p-1 rounded-full px-4 font-bold text-orange capitalize ' 
             date='jan 10 2020'
             commentIcon={messageIcon} comment='10 comment' readmoreLink='/pages/bloglist/blogdetails'
            />
            <Template image={postImage5} name='billy french'
            title='Practice Writing Blog Titles' 
            personImg={billy} description='A variation on the question technique above, the multiple-choice question great way to engage your reader.'
            tagName1='qoute' tagStyle1='text-xs bg-lightblue p-1 rounded-full px-4 font-bold text-blueish capitalize ' tagName2='fashion'
            tagStyle2='text-xs bg-lightpurple p-1 rounded-full px-4 font-bold text-primary-purpuleish capitalize'
             date='jan 10 2020'
             commentIcon={messageIcon} comment='243 comment' readmoreLink='/pages/bloglist/blogdetails'
            />
            <Template image={postImage6} name='fred boone'
            title='Design Liberalized Exchange Rate Management' 
            personImg={fredboone} description='A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.'
            tagName1='fashion' tagStyle1='text-xs bg-lightpurple p-1 rounded-full px-4 font-bold text-primary-purpuleish capitalize ' tagName2='video'
            tagStyle2='text-xs bg-lightorange p-1 rounded-full px-4 font-bold text-orange capitalize'
             date='jan 10 2020'
             commentIcon={messageIcon} comment='2.3k comment' readmoreLink='/pages/bloglist/blogdetails'
            />       
        </div>    
       
    );
}

export default BlogList;