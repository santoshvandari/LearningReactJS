import React from 'react'
import MainBody from './components/MainBody'
import Title from './components/Title'
import SocialMedia from './components/SocialMedia'

function App() {
  return (
    <>
    <div className="h-screen w-screen bg-[#2c3e50] flex justify-center items-center flex-col">
      
    <MainBody/>
    <Title/>
    <SocialMedia/>

    </div>
    </>
  )
}

export default App
