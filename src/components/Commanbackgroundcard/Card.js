import React from 'react';
import './Card.css'

const card = ({text}) => {
    console.log(text);
  return (
    <div className='w-full h-500px image '>
        <div className='w-full h-full contentdiv p-10 flex flex-col-reverse'>
            <div className='title'>{text}</div>
        </div>
    </div>
  )
}

export default card