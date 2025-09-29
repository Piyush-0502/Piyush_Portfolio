import React, { useContext, useRef } from 'react'
import { navBarContext } from '../../context/NavContext'

const Navbar = () => {
    const navgreenRef = useRef(null)
    const[navOpen , setNavOpen]=useContext(navBarContext)

  return (
    <div className='z-10 flex fixed top-0 w-full items-end justify-between '>
        <div>

        </div>
      <div onClick={()=>{
        setNavOpen(true)
      }} onMouseEnter={()=>{
        navgreenRef.current.style.height='100%'
      }}
      onMouseLeave={()=>{
        navgreenRef.current.style.height='0%'
      }}
      className='lg:h-16 h-17 bg-black lg:w-[16vw] w-20 relative'>
        <div ref={navgreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full '></div>
        <div className='relative py-6 px-5 flex flex-col justify-end items-end gap-2'>
          <div className="lg:w-16 w-10 h-1 bg-white rounded-full"></div>
          <div className="lg:w-9 w-5 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
