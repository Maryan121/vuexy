import React from 'react';

function Tags({text,style}) {
    return (
        <div className='my-4 '>
            <button className={style}>{text}</button>
        </div>
    );
}

export default Tags;