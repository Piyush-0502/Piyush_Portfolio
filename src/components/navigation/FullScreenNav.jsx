import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import {navBarContext} from '../../context/NavContext'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {

   const fillNvaLinksRef = useRef(null)
  const fullscreennav = useRef(null)

   const [navOpen,setNavOpen] =useContext(navBarContext)

  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.fullscreennav',{
        display: 'block'
      })
    tl.to('.stairings', {
      height: "100%",
      stagger: {
        amount: -0.2
      }
    })
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.1
      }
    })
    tl.to(".navLink" , {
      opacity:1
    })
  }

  function gsapreverseAnimation() {
    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1
      }
    })
    
    tl.to('.stairings', {
      height: 0,
      stagger: {
        amount: -0.1
      }
    })
    
    tl.to(".navLink" , {
      opacity:0
    })
    tl.to('.fullscreennav',{
        display: 'none',
      })
  }

  useGSAP(function(){
    if(navOpen){
      gsapAnimation()
    }else{
      gsapreverseAnimation()
    }
  }, [navOpen])


  return (
    <div ref={fullscreennav} id='fullscreennav' className=' fullscreennav z-50 hidden h-screen overflow-x-hidden overflow-y-hidden w-full  absolute bg-black text-white'>
      <div  className='h-screen w-full fixed'>
          <div className='h-full w-full flex fixed z-20 top-0'>
          <div  className='stairings h-full w-1/5 bg-black'></div>
          <div  className='stairings h-full w-1/5 bg-black'></div>
          <div  className='stairings h-full w-1/5 bg-black'></div>
          <div  className='stairings h-full w-1/5 bg-black'></div>
          <div  className='stairings h-full w-1/5 bg-black'></div>
        </div>
      </div>

      <div ref={fillNvaLinksRef} className='relative'>
            <div className="navLink flex w-full justify-between items-start ">
        <div></div>
        <div onClick={()=>{
        setNavOpen(false)
      }}


       className="md:h-25 md:w-25 h-12 w-12 mx-2 my-2  relative cursor-pointer">
          <div className="md:h-35 h-16 w-0.5 -rotate-45 origin-top bg-[#D3FD50] absolute"></div>
          <div className="md:h-35 h-16 w-0.5 right-0 rotate-45 origin-top bg-[#D3FD50]  absolute"></div>
          <div>

          </div>
        </div>
      </div>
        <div className="md:pt-10 pt-50">
          <Link to='/projects'>
          <div className='link relative origin-top'onClick={()=>{
                setNavOpen(false)
                }}>
            <h1 className='font-[font2]  border-t-1 border-white py-7 md:leading-[0.8] leading-[1.5] pt-5 text-center text-[7vw] uppercase'>projects</h1>
          <div>
            <div className='moveLink pt-0 absolute bg-[#D3FD50] text-black flex top-0'>
              <div className='flex  items-center moveX '>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit projects &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit projects &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit projects &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit projects &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit projects &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit projects &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit projects &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit projects &nbsp; </h2>
              </div>
            </div>
          </div>
          </div>
          </Link>


          <Link to='/skills'>
          <div className='link relative origin-top ' onClick={()=>{
                  setNavOpen(false)
                }}>
            <h1 className='font-[font2]  border-t-1 border-white py-7 md:leading-[0.8] leading-[1.5] pt-5 text-center text-[7vw] uppercase'>skills</h1>
            <div>
            <div className='moveLink pt-0 absolute bg-[#D3FD50] text-black flex top-0'>
              <div className='flex  items-center moveX '>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> explore skills &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> explore skills &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> explore skills &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> explore skills &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> explore skills &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> explore skills &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> explore skills &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> explore skills &nbsp; </h2>
              </div>
              
            </div>
          </div>
          </div>
          </Link>


          <Link to='/about'>
          <div className='link relative origin-top'  onClick={()=>{
                  setNavOpen(false)
                }}>
            <h1 className='font-[font2]  border-t-1 border-white py-7 md:leading-[0.8] leading-[1.5] pt-5 text-center text-[7vw] uppercase'>about me</h1>
          <div>
            <div className='moveLink pt-0 absolute bg-[#D3FD50] text-black flex top-0'>
              <div className='flex  items-center moveX '>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> about me &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> about me &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> about me &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> about me &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> about me &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> about me &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> about me &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> about me &nbsp; </h2>
              </div>
              
            </div>
          </div>
          </div>
          </Link>


          <Link to='/'>
          <div className='link relative origin-top'  onClick={()=>{
                  setNavOpen(false)
                }}>
            <h1 className='font-[font2]  border-y-1 border-white py-7 md:leading-[0.8] leading-[1.5] pt-5 text-center text-[7vw] uppercase'>home</h1>
          <div>
            <div className='moveLink pt-0 absolute bg-[#D3FD50] text-black flex top-0'>
              <div className='flex  items-center moveX '>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit home &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit home &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit home &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit home &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit home &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit home &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit home &nbsp; </h2>
                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-[15vw] uppercase'> visit home &nbsp; </h2>
              </div>
              
            </div>
          </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav
