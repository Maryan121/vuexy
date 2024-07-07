import React from 'react';
import Image from 'next/image';
import lines from '../../../../public/images/analytics/avgsessions/lines.svg'
import blueDot from '../../../../public/images/analytics/userTimeline/blueDot.svg'
import orangeDot from '../../../../public/images/analytics/userTimeline/orangeDot.svg'
import purpleDot from '../../../../public/images/analytics/userTimeline/purpleDot.svg'
import redDot from '../../../../public/images/analytics/userTimeline/redDot.svg'
import fileIcon from '../../../../public/images/analytics/userTimeline/file.svg'
import jorgeAvatar from '../../../../public/images/blocklist/jorge.png'
import claudiaAvatar from '../../../../public/images/blocklist/claudia.png'
import fredAvatar from '../../../../public/images/blocklist/fred.png'
import fredbooneAvatar from '../../../../public/images/blocklist/fredboone.png'
import Sales from './sales';
import AppDesign from './appDesign';



function UserTime(props) {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-10'>
            <div className='bg-white p-3 rounded-lg shadow-md py-7 px-6'>
                <div className='flex gap-4'>
                    <Image src={lines} alt=''/>
                    <h5 className='capitalize text-primary-heading'>user timeline</h5>
                </div>
                <section>
                    <div className='flex my-7 gap-3'>
                        <Image src={purpleDot} className='self-start' alt='' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-primary-heading'>12 Invoices have been paid</p>
                            <p className='text-primary-parag text-sm'>Invoices have been paid to the apple</p>
                            <div className='flex gap-3'>
                                <Image src={fileIcon} alt='file-icon' />
                                <p className='text-primary-parag text-sm'>data.json</p>
                            </div>
                        </div>

                    </div>
                    {/* two */} 
                    <div className='flex my-7 gap-3'>
                        <Image src={orangeDot} className='self-start' alt='' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-primary-heading'>Client Meeting</p>
                            <p className='text-primary-parag text-sm'>Project meeting with john @10:15am</p>
                            <div className='flex gap-3 my-2'>
                                <Image src={jorgeAvatar} className='self-center' width={30} alt='file-icon' />
                                <div>
                                    <p className='capitalize text-primary-heading '>John Doe (Client)</p>
                                    <p className='text-primary-parag text-sm'>CEO of Infibeam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* three */}
                    <div className='flex my-7 gap-3'>
                        <Image src={blueDot} className='self-start' alt='' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-primary-heading'>Create a new project for client</p>
                            <p className='text-primary-parag text-sm'>Add files to new design folder</p>
                            <div className='flex my-2'>
                                <Image src={jorgeAvatar} className='self-center' width={40} alt='' />
                                <Image src={claudiaAvatar} className='self-center -ml-2' width={40} alt='' />
                                <Image src={fredAvatar} className='self-center -ml-2' width={40} alt='' />
                                <Image src={fredbooneAvatar} className='self-center -ml-2' width={40} alt='' />
                            </div>
                        </div>
                    </div>
                    {/* four */}
                    <div className='flex my-7 gap-3'>
                        <Image src={redDot} className='self-start' alt='' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-primary-heading'>Create a new project for client</p>
                            <p className='text-primary-parag text-sm'>Add files to new design folder</p>
                        </div>
                    </div>
                </section>
               
                
               
            </div>

            <Sales />
            <AppDesign />
        </div>
    );
}

export default UserTime;