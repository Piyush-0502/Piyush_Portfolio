import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import myImage from '../assets/myimg.jpg';
import Aboutcrd from '../components/about/Aboutcrd';

import AboutInfo from '../components/about/AboutInfo';
import Contact from '../components/about/Contact';


const About = () => {
  const educationDetails = [
  {
    level: "10th",
    schoolName: "Sitabai Patvardhan High School, Kurundwad",
    percentage: 96.40,
    year: "2019-2020",
    stream: "MHBHSE"
  },
  {
    level: "12th",
    schoolName: "Ichalkaranji High School & Jr College, Ichalkaranji",
    percentage: 74.33,
    year: "2021-2022",
    stream: "SCIENCE"
  },
  {
    level: "BE",
    schoolName: "Smt.  Kashibai Navale College of Engineering, Pune",
    percentage: 8.85,
    year: "2022-2026",
    stream: "COMPUTER ENGINEERING"
  }
];


  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  

  useGSAP(function(){
    gsap.to(imageDivRef.current , {
      scrollTrigger:{
        trigger:imageDivRef.current,
        start: 'top 24.7%',
        end:'top -75%',
        scrub : true,
        pin: true
      }
    })
  })


  return (
    <>
    <div className='section1 relative py-1 text-black'>
        <div ref ={imageDivRef} className='md:opacity-[100%] opacity-0 absolute overflow-hidden h-[24vw] w-[17vw] rounded-4xl top-50 left-[20vw]'>
          <img className='h-full w-full object-cover' src={myImage} alt="" />

        </div>
         <div  className='md:opacity-0 opacity-[100%] absolute overflow-hidden h-[72vw] w-[51vw] rounded-4xl top-30 left-[25vw]'>
          <img className='h-full w-full object-cover' src={myImage} alt="" />
        </div>

          <AboutInfo/>  
    </div>
    <div className='flex md:flex-row flex-col justify-between border-top md:h-[35vw] h-[20vw] md:mt-20 px-4 md:px-20 '>
      {educationDetails.map(function(elem, id) {
        return (
          <div key={id} className='flex-1 mx-2 gap-2'>
            <Aboutcrd
              level={elem.level}
              school={elem.schoolName}
              percentage={elem.percentage}
              year={elem.year}
              stream={elem.stream}
            />
          </div>
        )
      })}
    </div>


    <div className='md:mt-2 mt-[90vh] pb-7 pt-3'>
      <Contact/>
    </div>
      
    

        
  </>

  )
}

export default About
