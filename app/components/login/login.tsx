import React from 'react';
import Image from 'next/image';
import illustration from '../../../public/images/login/Illustration.svg'
import Logo from './logo';
import FormLogin from './formLogin';

function Login(props) {
    return (
        <div className='bg-white md:bg-primary-bg md:grid md:grid-cols-2 lg:grid-cols-3 mt-20 md:mt-0 '>
            <div className='md:col-span-1 lg:col-span-2 p-6'>
                <Logo />
                <div className='p-32 mt-20 hidden md:block'><Image src={illustration} alt='illustration'/></div>
            </div>
            <div className='bg-white flex justify-center p-10'>
                <FormLogin />
            </div>  
                     
        </div>
    );
}

export default Login;