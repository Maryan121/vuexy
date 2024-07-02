import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import backArrow from '../../../public/images/backArrow.png'
import illustration from '../../../public/images/forgotPassword/Illustration.svg'
import Logo from '@/app/components/login/logo';
import Email from '@/app/components/login/email';
import Button from '@/app/components/button';

function ForgotPassword(props) {
    return (
        <div className='bg-white md:bg-primary-bg grid md:grid-cols-2 lg:grid-cols-3'>
            <div className='mt-10 md:mt-0 lg:col-span-2 p-6'>
                <Logo />
                <div className='p-32 mt-12 hidden md:block'><Image src={illustration} alt='forgot-password-illustration'/></div>
            </div> 
            <div className='bg-white p-10 md:p-20'>
                <div className='mt-10 md:mt-56'>
                    <h4 className='text-primary-heading capitalize '>forgot password ?</h4>
                    <p className='text-primary-parag text-sm pt-3'>Enter your email and we'll send you instruction to reset your password.</p>
                    <Email />
                    <Button text='send reset link' href='/pages/resetpassword' />
                    {/* <Link href='/pages/resetPassword' className='text-center py-2 bg-primary-purpuleish block text-white capitalize p-2 w-full mt-5 rounded hover:opacity-80'>send reset link</Link> */}
                    <div className='flex justify-center gap-2 mt-5'>
                        <Image src={backArrow} className='self-center' alt='back-arrow' />
                        <Link href='/' className='text-primary-purpuleish text-sm hover:opacity-80'>Back to login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;