import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from './pages/Skills'
import About from './pages/About'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'

const App = () => {
  


  return (
    <div className='overflow-x-hidden text-white'>
      <Navbar/>
      <FullScreenNav/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
    </div>
  )
}

export default App
