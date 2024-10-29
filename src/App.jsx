import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task,setTask] = useState ([])
  return (
    <>
     <h1 className='text-3xl font-bold text-red-500 bg-slate-600'>Hello World</h1>
    </>
  )
  
}

export default App
