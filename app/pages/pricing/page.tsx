'use client'
import React from 'react';
import { useState } from 'react';
import Navbar from '@/app/components/navbar/navbar';
import Sidebar from '@/app/components/sidebar/sidebar';
import pricingdata from './pricingdata';
import Image from 'next/image';
import FreeTrial from './freeTrial';
import Faqs from './faqs';
import Footer from '@/app/components/footer';

function pricing(props:any) {
    const[isSidebarOpen,setSidebarOpen] = useState(false)
    const toggleMenu = () => {
        setSidebarOpen(!isSidebarOpen)
        console.log('hello')
    }
    return (
        <div className='grid lg:grid-cols-9 bg-primary-bg h-screen'>
            <div>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleMenu={toggleMenu}/>
            </div>
            <div className='lg:col-span-8'>
                <Navbar toggleMenu={toggleMenu}/>
                <div className='flex flex-col justify-center text-center mt-10' >
                    <div style={{height:'85vh',overflow:'scroll'}}>
                        <h1 className='text-primary-heading capitalize text-lg'>pricing plans</h1>
                        <p className='text-sm text-primary-parag my-2 leading-6'>All plans include 40+ advanced tools and features to boost your product.
                        Choose the best plan to fit your needs.</p>
                        <div className='flex gap-3 justify-center py-4'>
                            <span className='capitalize text-primary-heading'>monthly</span>
                            <input type="checkbox" />
                            <span className='capitalize text-primary-heading'>annually</span>
                        </div>
                        {/* pricing section */}
                        <section className=' grid md:grid-cols-3 w-2/3 mx-20 md:mx-56 my-4 justify-center gap-5 '>
                            {pricingdata.map((data)=>{
                                return(
                                    <div className={`relative flex flex-col pt-10 gap-2 bg-white px-7 rounded-lg ${data.border}`} key={data.id}>
                                        <span className='absolute top-3 text-primary-purpuleish bg-lightpurple text-xs capitalize font-bold rounded-full right-3'>{data.popular? data.popular : null}</span>    
                                        <Image src={data.potImage} width={36} className='self-center' alt={data.level}/>
                                        <h4 className='capitalize text-primary-heading text-xl'>{data.level}</h4>
                                        <p className='text-sm text-primary-parag'>{data.levelDesc}</p>
                                        <div className='mt-2'>
                                            
                                            <span className='text-primary-purpuleish font-bold text-4xl relative'><span className='text-sm absolute -top-1 -left-1 font-normal'>$</span>{data.price}</span>
                                            <span className='text-primary-parag text-sm'> / month</span>
                                        </div>
                                        <ul className='text-left mt-3' key={data.id}>
                                            {data.list.map((list)=>{
                                                return(<li className='text-primary-parag leading-10 text-sm'><span className='text-md font-bold mr-3'>o</span>{list}</li>)
                                            })}
                                        </ul>
                                        <button className={`capitalize border border-primary-purpuleish text-primary-purpuleish  p-2 px-3 text-sm my-2 rounded-md hover:font-bold hover:opacity-80 ${data.specialStyle}`}>{data.button}</button>
                                    </div>
                                )
                            })}
                        </section>
                        
                   <FreeTrial />
                   <Faqs />
                    </div>
                </div>
                <Footer />
            </div> 
         </div>
    );
}

export default pricing;