import React from 'react';
import Link from 'next/link';

function Button({text,onClick,href}) {
    return (
        <div>
            <Link href={href} onClick={onClick} className='text-center bg-primary-purpuleish block text-white  w-full capitalize p-2 mt-3 rounded hover:opacity-80'>{text}</Link>
            {/* <button className='bg-primary-purpuleish block text-white font-bold capitalize p-2 w-full mt-3 rounded hover:opacity-80'>login</button> */}
        </div>
    );
}

export default Button;