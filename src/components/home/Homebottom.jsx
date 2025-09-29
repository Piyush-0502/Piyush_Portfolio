import React from 'react'
import { Link } from 'react-router-dom'

const Homebottom = () => {
  return (
    <div className='font-[font2] flex lg:flex-row flex-col items-center justify-center gap-3 mb-2'>
          <Link className="lg:text-[3vw] text-[8vw] border-2 lg:border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-24 h-18 leading-[5.5vw] border-white lg:pt-1 pt-6 pb-2 rounded-full lg:px-14 px-12 uppercase" to='/skills'>skills</Link>
          <Link className="lg:text-[3vw] text-[8vw] border-2 lg:border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-24 h-18 leading-[5.5vw] border-white lg:pt-1 pt-6 pb-2 rounded-full lg:px-14 px-12 uppercase" to='/projects'>projects</Link>
          <Link className="lg:text-[3vw] text-[8vw] border-2 lg:border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-24 h-18 leading-[5.5vw] border-white lg:pt-1 pt-6 pb-2 rounded-full lg:px-14 px-12 uppercase" to='/about'>about</Link>
    </div>
  )
}

export default Homebottom
