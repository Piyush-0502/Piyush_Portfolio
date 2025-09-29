import React from 'react'
import javaC from '../../assets/JAVA.png'
import MernC from '../../assets/MERN.png'

const Certificates = () => {
  return (
    <div className='mb-20 md:mt-0 pt-15'>
        <div><h2 className='text-[font-2] bold md:text-[7vw] text-[10vw] text-black uppercase p-5 md:ml-10'>certificates</h2></div>
        <div className='md:pb-40'>
            <div className="certificates md:h-[30vw] h-[50vw] flex md:flex-row flex-col space-between md:pl-20">
                <img className="h-full md:pl-7 pl-5 mb-5 transform transition duration-300 hover:scale-110" src={MernC} alt="" />
                <img className="h-full md:pl-7 pl-5 mb-5 transform transition duration-300 hover:scale-110" src={javaC} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Certificates
