'use client'
import React from 'react';
import Button from '@/app/components/button';

function LeaveComment(props:any) {
    return (
        <div className='px-5 md:px-10'>
            <h5 className='uppercase my-2 text-grayish text-sm '>leave a comment</h5>
            <form className='bg-white p-7 rounded'>
                <div className='flex flex-col gap-3 md:grid grid-cols-2 gap-5'>
                    <input type="text" className='outline-none border text-primary-heading p-3 px-4 rounded-md' placeholder='placeHolder'/>
                    <input type="text" className='outline-none border text-primary-heading p-3 px-4 rounded-md' placeholder='placeHolder'/>
                    <input type="text" className='outline-none border text-primary-heading p-3 px-4 rounded-md' placeholder='placeHolder'/>
                </div>
                <textarea className='w-full resize-none text-primary-heading outline-none border rounded-md p-3 mt-5' placeholder='comment' name="comment" rows={10} id="comment"></textarea>
                <div className='my-3'>
                    <input type="checkbox" className="w-4 h-4"/>
                    <span className='ml-2 text-primary-parag text-sm'>Save my name,email and website in this browser for the next time i comment.</span>  
                </div>
                <button className='text-white bg-primary-purpuleish py-2 px-3 rounded-md text-sm capitalize my-3 hover:opacity-80'>post comment</button>
            </form>
        </div>
    );
}

export default LeaveComment;