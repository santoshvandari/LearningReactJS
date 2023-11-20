import React from 'react'

const mainbody = ({imageurl}) => {
  return (
    <div className='imageWrapper'>
      <img src={imageurl} alt="Profilemage" />
      <h1>Santosh Bhandari</h1>
      <p>Web Developer</p>
    </div>
  )
}

export default mainbody