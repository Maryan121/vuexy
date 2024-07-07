import React from 'react';
import Image from 'next/image';
import TableHead from './tableHead';
import shapeIcon from '../../../../../public/images/analytics/table/Shape.svg'
import eyeIcon from '../../../../../public/images/analytics/table/eye.svg'
import icon from '../../../../../public/images/analytics/table/⭐️ Icon.svg'
import tableData from './tableData';
import arrow from '../../../../../public/images/down.svg'
import arrowLeft from '../../../../../public/images/up.svg'

function Table(props) {
    return (
        <table className='my-5 bg-white w-full rounded-lg'>
            <TableHead />
            <tbody>
                {
                    tableData.map((data)=>{
                        return(
                            <tr className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 p-1 py-3 border-b'>
                                <td className='text-primary-purpuleish text-sm px-6 self-center'>#{data.id}</td>
                                <td className={data.iconStyle}><Image src={data.icon} alt=''/>  </td>
                                <td className='flex gap-3 self-center'>
                                        <Image src={data.image} width={30} className='self-center' alt='' />
                                        <div>
                                            <p className='text-primary-heading text-xs md:text-sm font-bold capitalize'>{data.name}</p>
                                            <p className='text-grayish text-xs md:text-sm'>{data.email}</p>
                                        </div>
                                    </td> 
                                    <td className='  self-center text-sm text-primary-parag'>${data.total}</td>
                                    <td className={`hidden md:table-cell text-xs lg:ml-10 xl:ml-28 ${data.balanceStyle}`}><span>{data.balance}</span></td>
                                    {/* <td className='hidden md:table-cell capitalize border-4 bg-lightgreen text-green text-xs self-center w-fit p-1  font-bold rounded-full'>paid</td> */}
                                    <td className='hidden lg:table-cell self-center lg:ml-10 xl:ml-28'>
                                        <div className='flex gap-3'>
                                            <Image src={shapeIcon} alt=''/>
                                            <Image src={eyeIcon} alt='' />
                                            <Image src={icon} alt=''/>
                                        </div>
                                    
                                    </td>
                            </tr>
                        )
                    })
                }
                
             <tr className='flex flex-col gap-3 justify-center md:flex-row justify-between   py-2 md:px-6'>
                <td className='text-primary-parag capitalize text-xs self-center text-md'>showing 1 to 7 of 100 enteries</td>
                <td className='flex gap-2 self-center'>
                    <Image src={arrowLeft} className='rotate-90 bg-lightpurple p-1 rounded-full cursor-pointer hover:opacity-80' width={20} alt='' />
                    <div className='px-4 bg-lightpurple rounded-full flex gap-2'>
                        <p className='text-xs text-primary-parag self-center cursor-pointer hover:text-primary-purpuleish font-bold'>1</p>
                        <p className='text-xs text-primary-parag self-center cursor-pointer hover:text-primary-purpuleish font-bold'>2</p>
                        <p className='text-xs text-primary-parag self-center cursor-pointer hover:text-primary-purpuleish font-bold'>3</p>
                        <p className='text-xs bg-primary-purpuleish self-center cursor-pointer p-1 rounded-full px-3 hover:opacity-80 text-white font-bold'>4</p>
                        <p className='text-xs text-primary-parag self-center cursor-pointer hover:text-primary-purpuleish font-bold'>5</p>
                        <p className='text-xs text-primary-parag self-center cursor-pointer hover:text-primary-purpuleish font-bold'>6</p>
                        <p className='text-xs text-primary-parag self-center cursor-pointer hover:text-primary-purpuleish font-bold'>7</p>
                    </div>
                    <Image src={arrow} className='rotate-90 bg-lightpurple p-1 rounded-full cursor-pointer hover:opacity-80' width={20} alt='' />
                </td>
             </tr>
                
            </tbody>
            
        </table>
    );
}

export default Table;