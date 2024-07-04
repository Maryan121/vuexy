import React from 'react';
import Image from 'next/image';
import down from '../../../../public/images/down.svg'
import up from '../../../../public/images/up.svg'
import lines from '../../../../public/images/lines.svg'
import linkIcon from '../../../../public/images/link.svg'

function Content(props:any) {
    return (
        <div>
            <h6 className='text-sm text-primary-heading py-1 capitalize'>content</h6>
            <div className='border rounded-md py-5 px-4 md:px-7'>
                <div className='flex gap-2 md:gap-5'>
                    <div className='flex gap-3'>
                        <h6 className='self-center capitalize text-xs  text-primary-heading font-bold'>normal:</h6>
                        <div className='flex flex-col gap-1 self-center'>
                            <Image src={down} alt='down-arrow' />
                            <Image src={up} alt='up-arrow' />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <h6 className='self-center capitalize text-xs text-primary-heading font-bold'>Sailec Light</h6>
                        <div className='flex flex-col gap-1 self-center'>
                            <Image src={down} alt='down-arrow' />
                            <Image src={up} alt='up-arrow' />
                        </div>
                    </div>
                    <button className='uppercase text-primary-parag font-bold text-lg'>b</button>
                    <button className=' text-primary-parag italic font-bold text-lg'>i</button>
                    <button className='uppercase text-primary-parag underline font-bold text-lg'>u</button>
                    <button className='uppercase text-primary-parag font-bold text-lg'>T</button>
                    <Image src={lines} alt='' />
                    <Image src={linkIcon} alt='' />
                </div>
                <p className='text-sm text-primary-parag my-4 leading-6'>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. 
                    Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. 
                    Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.
                </p>
                <p className='text-sm text-primary-parag my-2 leading-6'>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>
            </div>
        </div>
    );
}

export default Content;