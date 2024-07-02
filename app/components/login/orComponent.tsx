import React from 'react';

function OrComponent(props) {
    return (
        <div className='flex justify-center gap-3 align-middle p-3'>
            <hr className='border w-40 self-center'/>
            <p className='text-primary-parag'>or</p>
            <hr className='border border-primary-gray w-40 self-center'/>
        </div>
    );
}

export default OrComponent;