import React from 'react'
import './Counter.css'

const Counter = () => {
  return (
    <div className='container'>
      <p className="count">0</p>
        <div className="btn-wrapper">
            <button>+</button>
            <button>-</button>
        </div>
    </div>
  )
}

export default Counter
