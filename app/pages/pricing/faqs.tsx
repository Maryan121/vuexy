import React from 'react';
import loveIcon from '../../../public/images/pricing/love.svg'
import icon from '../../../public/images/pricing/Mask.svg'
import shape from '../../../public/images/pricing/Shape.svg'
import Image from 'next/image';
import downArrow from '../../../public/images/down.svg'


function Faqs(props) {
    return (
        <div className='mt-20'>
            <h4 className='uppercase text-2xl text-primary-heading'>faq's</h4>
            <p className='text-primary-parag text-sm my-1'>Let us help answer the most common questions.</p>
            <div className='flex flex-col gap-3 mx-2 md:mx-56 my-10'>
                <div className='bg-white flex md:gap-10 justify-between p-4 rounded-md' >
                    <div className='flex gap-3 self-start'>
                        <Image src={loveIcon} alt='love-icon'/>
                        <p className='text-primary-heading'>Does my subscription automatically renew?</p>
                    </div>
                    <Image src={downArrow} width={15} alt='arrow'/>
                </div>
                <section className='bg-white p-4 rounded-md'>
                    <div className='flex gap-10 justify-between ' >
                        <div className='flex gap-3'>
                            <Image src={icon} alt='love-icon'/>
                            <p className='text-primary-heading'>Can I store the item on an intranet so everyone has access?</p>
                        </div>
                        <Image src={downArrow} className='rotate-180' width={15} alt='arrow'/>
                    </div>  
                    <p className='text-left mt-3 text-sm md:w-2/4 text-primary-parag'>Tiramisu marshmallow dessert halvah bonbon cake gingerbread. Jelly beans chocolate pie powder. Dessert pudding chocolate cake bonbon bear claw cotton candy cheesecake. Biscuit fruitcake macaroon carrot cake. Chocolate cake bear claw muffin chupa chips pudding.</p>
                </section>
                <div className='bg-white flex gap-10 justify-between p-4 rounded-md' >
                    <div className='flex gap-3'>
                        <Image src={shape} alt='love-icon'/>
                        <p className='text-primary-heading'>Am I allowed to modify the item that I purchased?</p>
                    </div>
                    <Image src={downArrow} width={15} alt='arrow'/>
                </div>
            </div>
        </div>
    );
}

export default Faqs;