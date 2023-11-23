import { React, useState,useEffect } from "react"
import './Button.css'


const Button = () => {
   const [count, setCount] = useState(0)
    const Counter = () => {
        setCount(count + 1)
    }
    useEffect(()=>{
        document.title = `Counter(${count})`;
},[count])

  return (
    <div className="btn-wrapper">
        <p className="data">{count}</p>
      <button onClick={Counter}>Count</button>
    </div>
  )
}

export default Button
