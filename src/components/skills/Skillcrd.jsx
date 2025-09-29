import React from 'react'

const Skillred = (props) => {
  console.log(props)
  return (
    <>
    <div className='text-black p-4 md:text-[1.5vw] text-[5vw] text-[font2] flex bg-[#faf9f9] rounded-[5px] transform tranisition hover:bg-[#D3FD50] hover:rounded-full mx-3 md:pl-10 pl-13 md:mx-10 hover:scale-110 hover:text-[font1]'>
      {props.skills}
    </div>
    </>
   
  )
}

export default Skillred
