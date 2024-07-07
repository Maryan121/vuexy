import React, { useState } from 'react';
import Image from 'next/image';
import avatar1 from '../../../../public/images/blocklist/claudia.png'
import avatar2 from '../../../../public/images/blocklist/fred.png'
import avatar3 from '../../../../public/images/analytics/Avatar.svg'
import avatar4 from '../../../../public/images/analytics/avatarPI.svg'
import avatar5 from '../../../../public/images/analytics/Avatarbell.png'
import Button from '../../button';

function Notification(props) {
   
    return (
        <div className={`backdrop-blur-sm absolute h-screen top-0 right-0 z-10 w-full ${props.showCompo? 'block' : 'hidden'}` }>
            <div className='absolute top-20 md:right-32 bg-white ml-10 md:ml-20 lg:ml-96 h-fit shadow-lg mt-5  rounded-lg' onClick={props.toggleCompo}>
                <div className='p-4 flex justify-between'>
                    <h4 className='capitalize text-primary-heading'>notification</h4>
                    <p className='bg-lightpurple text-primary-purpuleish text-xs font-bold capitalize p-1 px-3 rounded-full'>6 new</p>
                </div>
                <hr className=''/>
                <div className='flex gap-4 py-2 px-4'>
                    <Image src={avatar1} width={30} className='self-center' alt='' />
                    <div className='flex flex-col '>
                        <h5 className='text-primary-heading capitalize text-sm'>Congratulate Sam for work update 🎉</h5>
                        <p className='text-grayish text-sm capitalize'>Mar 15 12:50pm</p>
                    </div>
                </div>
                <hr />
                <div className='flex gap-4 py-2 px-4'>
                    <Image src={avatar2} width={30} className='self-center' alt='' />
                    <div className='flex flex-col '>
                        <h5 className='text-primary-heading capitalize text-sm'>New message received</h5>
                        <p className='text-grayish text-sm capitalize'>You have 10 unread messages</p>
                    </div>
                </div>
                <hr />
                <div className='flex justify-between py-2 px-4'>
                    <div className='flex gap-4 '>                    
                        <Image src={avatar3} width={30} className='self-center' alt='' />
                        <div className='flex flex-col '>
                            <h5 className='text-primary-heading capitalize text-sm'>Updates available</h5>
                            <p className='text-grayish text-sm capitalize'>Update Sketch to 69</p>
                        </div>
                    </div>
                    <button className='text-xs border border-primary-purpuleish text-primary-purpuleish rounded-lg p-1 self-center px-3 hover:bg-primary-purpuleish hover:text-white capitalize '>upgrade</button>
                </div>
                <hr />
                {/*  */}
                <div className='flex gap-4 py-2 px-4'>
                    <Image src={avatar4} width={30} className='self-center' alt='' />
                    <div className='flex flex-col '>
                        <h5 className='text-primary-heading capitalize text-sm'>New Customer is registered 👏🏻</h5>
                        <p className='text-grayish text-sm capitalize'>an hour ago</p>
                    </div>
                </div>
                <hr />
                <div className='flex gap-4 py-2 px-4'>
                    <Image src={avatar5} width={30} className='self-center' alt='' />
                    <div className='flex flex-col '>
                        <h5 className='text-primary-heading capitalize text-sm'>Application has been approved</h5>
                        <p className='text-grayish text-sm capitalize'>8 hours ago</p>
                    </div>
                </div>
                <hr />
                <div className='p-4'><Button text='read all notifications' href='#' /></div>
            </div>  
        </div>
        
    );
}

export default Notification;