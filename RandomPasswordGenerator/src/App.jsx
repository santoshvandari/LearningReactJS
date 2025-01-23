import React, { useCallback, useEffect, useRef, useState } from 'react'




function App() {
  const [length, setLength] = useState(18)
  const [numbers, setNumbers] = useState(false)
  const [characters,setCharacters] = useState(false)
  const [password, setPassword] = useState("")
  const passRef = useRef(null)

  const PasswordGenerator=useCallback(()=>{
    let pass=""
    let strs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers) strs+="0123456789"
    if(characters) strs+="!@#$%^&*()_+-"
    for (let i = 0; i <length; i++) {
        pass+=strs.charAt(Math.floor(Math.random()*strs.length+1))     
    }
    setPassword(pass)
  },[length,numbers,characters,setPassword])

  const CopyToClipBoard=useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
    PasswordGenerator()
  },[length,numbers,characters,setPassword,PasswordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input 
        type="text" 
        className="outline-none w-full py-1 px-3 text-2xl bg-white"
        placeholder="Password" 
        value={password}
        readOnly
        ref={passRef}
        />
        <button className="outline-none bg-blue-500 cursor-pointer hover:bg-blue-400 transition-colors px-3 py-0.5 shrink-0 text-white"
        onClick={CopyToClipBoard}>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-0.5">
          <input type="range" min={1} man={100} className="cursor-pointer w-30" 
          onChange={(e)=>setLength(e.target.value)}

          />
          <label>Length {length}</label>
        </div>
        <div className="flex items-center gap-x-0.5">
          <input type="checkbox" className='cursor-pointer' 
          onChange={()=>setNumbers(numbers=>!numbers)}

          />
          <label>Numbers</label>
        </div>     
        <div className="flex items-center gap-x-0.5">
          <input type="checkbox" className='cursor-pointer' 
            onChange={()=>setCharacters(characters=>!characters)}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
