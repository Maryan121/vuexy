import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/components/login/logo';
import illustration from '../../../public/images/resetPassword/Illustration.svg'
import backArrow from '../../../public/images/backArrow.png'
import Password from '@/app/components/password';
import Button from '@/app/components/button';

function ResetPassword(props) {
    return (
        <div className='bg-white md:bg-primary-bg grid md:grid-cols-2 lg:grid-cols-3'>
            <div className='mt-10 md:mt-0 lg:col-span-2 p-6'>
                <Logo />
                <div  className='p-32 mt-12 hidden md:block'><Image src={illustration} alt='illustration' /></div>
            </div>
            <div className='bg-white p-10 sm:p-20'>
                <div className='mt-10 lg:mt-56'>
                    <h4 className='text-primary-heading capitalize '>reset password </h4>
                    <p className='text-primary-parag text-sm pt-3 '>Your new password must be different from previously used passwords </p>
                    <div className='flex flex-col gap-2 mt-5'>
                        <label className='text-primary-parag capitalize text-sm'>new password</label>
                        <Password />
                    </div>
                    <div className='flex flex-col gap-2 mt-3'>
                        <label className='text-primary-parag capitalize text-sm'>confirm password</label>
                        <Password />
                    </div>
                    <Button text='set new password' href='#'/>
                    {/* <button className='py-2 bg-primary-purpuleish block text-white capitalize p-2 w-full mt-5 rounded hover:opacity-80'>set new password</button> */}
                    <div className='flex justify-center gap-2 mt-5'>
                        <Image src={backArrow} className='self-center' alt='back-arrow' />
                        <Link href='/' className='text-primary-purpuleish text-sm hover:opacity-80'>Back to login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;