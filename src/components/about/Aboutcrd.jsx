import React from 'react'

const Aboutcrd = (props) => {
    console.log(props)
  return (
    <div className='"border-t-2 border-b-2 md:border-none border-[#D3FD50] pt-5 bg-white hover:bg-[#D3FD50] md:h-[25vw] md:p-2 md:mt-[5vw] md:pt-5 items-center md:mb-10 hover:rounded-[30px] transition-all'>
        <div className='text-[font1] md:pt-10 bold text-3xl md:p-2 pl-10 md:pl-10 pt-2 text-black'>
            {props.level}&nbsp;&nbsp;&nbsp;
            {props.stream}
        </div>
        <div className='text-[font2]  bold text-2xl p-2 pl-10 pt-2 text-black'>
            {props.school}
        </div>
        <div className='text-[font2] text-2xl p-2 pl-10 pt-2 text-black'>
            {props.percentage}
        </div>
        <div className='text-[font2] mb-10 text-2xl p-2 pl-10 pt-2 text-black'>
            {props.year}
        </div>
        
    </div>
            
    
  )
}

export default Aboutcrd
