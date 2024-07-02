import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import facebook from '../../public/images/socialMedia/facebook.png'
import twitter from '../../public/images/socialMedia/twitter.png'
import mail from '../../public/images/socialMedia/mail.png'
import github from '../../public/images/socialMedia/gtihub.png'

function SocialMedia(props) {
    return (
        <div className='flex gap-3 justify-center mt-5'>
          <Link href='#' className='bg-facebook p-2 rounded-md hover:opacity-80'><Image src={facebook} alt='facebook-icon'/></Link> 
          <Link href='#' className='bg-twitter p-2 rounded-md hover:opacity-80'><div><Image src={twitter} alt='twitter-icon'/></div></Link>
          <Link href='#' className='bg-mail p-2 rounded-md hover:opacity-80'><Image src={mail} alt='mail-icon' /></Link>
          <Link href='#' className='bg-github p-2 rounded-md hover:opacity-80'><Image src={github} alt='github-icon' /></Link> 
        </div>
    );
}

export default SocialMedia;