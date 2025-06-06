import React from 'react'

export const Card = (prop) => {
  return (
    <div className='col mb-5'>
         <div className="card" style={{width: '24rem'}}>
               <img src={prop.src} class="card-img-top" alt="image"/>
        </div>
    </div>
  )
}
