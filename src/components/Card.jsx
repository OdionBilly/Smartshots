import React from 'react'

export const Card = (prop) => {
  return (
    <div className=''>
         <div className='w-[500px] flex gap-10'>
               <img src={prop.src} className="card-img-top" alt="image"/>
        </div>
    </div>
  )
}
