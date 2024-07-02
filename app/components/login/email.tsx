import React from 'react';

function Email(props) {
    return (
        <div className='flex flex-col gap-1 text-primary-parag text-sm mt-10'>
            <label className='capitalize'>email</label>
            <input className='outline-none border-2 p-2 rounded' type='email' name='email' placeholder='johndoe@gmail.com'/>
        </div>
    );
}

export default Email;