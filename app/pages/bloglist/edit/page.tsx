'use client'
import React from 'react';
import Image from 'next/image';
import avatar from '../../../../public/images/blocklist/jorge.png'
import Tags from '../blogComponents/tags';
import Content from './content';
import Featured from './featured';

function Edit(props:any) {
    return (
        <div className='bg-white p-6 rounded-md shadow-sm'>
           <div className='flex gap-3'>
                <Image src={avatar} width={30} className='self-center' alt='' />
                <div>
                    <p className='text-primary-heading text-sm capitalize'>chad alexander</p>
                    <p className='text-primary-parag text-xs uppercase font-light'>may 24 2020</p>
                </div>
           </div>
           <form className='grid md:grid-cols-2 gap-5 py-4'>
                <div className='flex flex-col gap-2'>
                    <label className='text-primary-heading text-sm capitalize'>title</label>
                    <input className='outline-none border p-2 px-3 text-sm text-primary-parag rounded-md' type="text" placeholder='The Best Features Coming to iOS and Web design' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-primary-heading text-sm capitalize'>category</label>
                    <div className='shadow-sm rounded-md flex gap-2 px-3'>
                        <div className='relative'>   
                            <Tags text='fashion' style='capitalize self-start text-white bg-primary-purpuleish text-sm rounded p-1 px-2 pr-5'/>
                            <span className='absolute top-4 cursor-pointer text-lg right-2 hover:text-red'>x</span>
                        </div>
                     
                        <div className='relative'>   
                            <Tags text='gaming' style='capitalize self-start text-white bg-primary-purpuleish text-sm rounded p-1 px-2 pr-5'/>
                            <span className='absolute top-4 cursor-pointer text-lg right-2 hover:text-red'>x</span>
                        </div>                    
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-primary-heading text-sm capitalize'>slug</label>
                    <input className='outline-none border p-2 px-3 text-sm text-primary-parag rounded-md'  type="text" placeholder='the-best-features-coming-to-ios-and-web-design' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-primary-heading text-sm capitalize'>status</label>
                    <select name="status" className='bg-transparent border p-2 px-3 text-sm text-primary-parag rounded-md font-bold capitalize'><option>published</option></select>
                </div>
           </form>
            <Content />
            <Featured />
            <div className='mt-10 flex gap-5'>
                <button className='bg-primary-purpuleish text-white rounded-md py-2 px-5 hover:opacity-80'>save changes</button>
                <button className='text-primary-purpuleish border border-primary-purpuleish py-1 px-4 rounded-md font-bold hover:opacity-80'>cancel</button>
            </div>
        </div>
    );
}

export default Edit;