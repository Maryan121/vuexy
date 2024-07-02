import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/components/login/logo';
import illustration from '../../../public/images/register/illustration.svg'
import Email from '@/app/components/login/email';
import Password from '@/app/components/password';
import OrComponent from '@/app/components/login/orComponent';
import SocialMedia from '@/app/components/socialMedia';
import Button from '@/app/components/button';

function Register(props) {
    return (
        <div className='bg-white md:bg-primary-bg md:grid md:grid-cols-2 lg:grid-cols-3 '>
            <div className='mt-10 md:mt-0 lg:col-span-2 p-6'>
                <Logo />
                <div className='p-32 mt-12 hidden md:block'><Image src={illustration} alt='illustration'/></div>
            </div>
            <div className='bg-white p-10 md:p-20'>
                <div className='mt-10 lg:mt-56'>
                    <h4 className='text-primary-heading text-lg'>Adventure starts here </h4>
                    <p className='text-primary-parag text-sm pt-3'>Make your app management easy and fun!</p>
                    <div>
                      <Email />  
                    </div>
                    <div className='flex flex-col gap-1 mt-3'>
                        <label className='text-primary-parag text-sm capitalize' >password</label>
                        <Password />
                    </div>
                    <input type="checkbox" className='mt-4'/>
                    <span className=' text-sm text-primary-parag ml-2'>i agree to <span className='text-light text-primary-purpuleish'>privacy policy & terms</span></span>
                    <Button href='#' text='sign up'/>
                    {/* <button className='py-2 bg-primary-purpuleish block text-white font-bold capitalize p-2 w-full mt-3 rounded hover:opacity-80'>sign up</button> */}
                    <div className='flex justify-center mt-4'>
                        <span className='self-center text-primary-parag text-sm  '>Already have an account?</span>
                        <Link href='/' className='self-center ml-2 text-primary-purpuleish text-sm hover:opacity-80 font-light'>Sign in instead</Link> 
                    </div>
                    <OrComponent />
                    <SocialMedia />
                </div>
            </div>  
                     
        </div>
    );
}

export default Register;