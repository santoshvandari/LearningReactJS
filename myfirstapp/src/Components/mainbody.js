import React from 'react'
import Typing from './typing'

const mainbody = ({imageurl}) => {
  return (
    <div className='imageWrapper'>
      <img src={imageurl} alt="Profilemage" />
      <h1>Santosh Bhandari</h1>
      <p><Typing text='Web Developer' delay={200} infinite={false}/></p>
    </div>
  )
}

export default mainbody