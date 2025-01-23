import React, { useState } from 'react'


function App() {
  const colorList=["red","green","aqua","yellow","salmon","blue","Olive","silver"]
  const [color,setColor]=useState("gray")
  return (
    <div>
       <div className="w-full h-screen transition-colors" style={{backgroundColor:color}}>
        <div className="py-2 fixed bottom-0 flex items-center w-full justify-center gap-1">

          <div className="rounded-xl px-6 py-8  flex items-center h-14 self-center bg-white justify-center gap-1">
            {colorList.map((color,index)=>(
              <button className="rounded-xl px-5 py-2 text-white font-bold hover:opacity-45 text-[20px] outline-none cursor-pointer capitalize" 
              style={{backgroundColor:color}}
              onClick={()=>setColor(color)}
              >{color}</button>        
            ))}
          </div>
        </div>
       </div>
    </div>
  )
}

export default App
