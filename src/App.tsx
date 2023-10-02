
import React from 'react'
import InputField from './Components/InputField'

const App:React.FC = () => {
    
  return (
    <div className='bg-[#2f74c0]  font-[neucha] w-[100vw] h-[100vh] pt-4 flex flex-col space-y-4'>
        <h1 className=" text-3xl text-center text-white   font-semibold md:font-bold md:text-5xl">Taskify</h1>
        <InputField/>
        
      
    </div>
  )
}

export default App

