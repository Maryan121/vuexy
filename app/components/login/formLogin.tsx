import React from 'react';
import Link from 'next/link';
import Email from './email';
import Password from '../password';
import OrComponent from './orComponent';
import SocialMedia from '../socialMedia';
import Button from '../button';

function FormLogin(props) {
    return (
        <div className='mt-4 md:mt-56'>
            <div>
                <h4 className='text-primary-heading text-lg'>Welcome to Vuexy! 👋</h4>
                <p className='text-primary-parag text-sm pt-3'>please sign-in to your account and start the adventure </p>
                <div><Email /></div>
                <div className='flex flex-col gap-2' >
                    <div className='flex justify-between pt-3 capitalize'>
                        <label className='text-primary-parag text-sm'>password</label>
                        <Link href='/pages/forgotpassword' className='text-primary-purpuleish text-sm hover:opacity-80 font-light' >forgot password</Link>
                    </div>
                    <Password />
                </div>
                <input type="checkbox" className='mt-4'/>
                <span className='capitalize text-sm text-primary-parag ml-2'>remember me</span>
                <Button href='#' text='login' onClick={console.log('clicked')}/>
                <div className='flex justify-center mt-4'>
                    <span className='self-center text-primary-parag text-sm  '>New On Our platform?</span>
                    <Link href='/pages/register' className='self-center ml-2 text-primary-purpuleish text-sm hover:opacity-80 font-light'>Create new account</Link> 
                </div>
                <OrComponent /> 
                <SocialMedia />
            </div>
        </div>
    );
}

export default FormLogin;