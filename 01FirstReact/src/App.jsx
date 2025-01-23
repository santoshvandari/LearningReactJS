import { useState } from 'react'
import './App.css'

function App() {
  let [value,setValue]=useState(0)
  const addValue=()=>{
    if (value<20){
        setValue(value+1)
      }
    }
    const removeValue=()=>{
      if (value>0){
        setValue(value-1)
    }
  }
  return(
    <>
      <h1>Counter</h1>
      <h3>Value : {value}</h3>
      <button onClick={addValue}>+</button> <button onClick={removeValue}>-</button>
    </>
  )
}

export default App
