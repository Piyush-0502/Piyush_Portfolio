import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay loop muted src='../../../public/homebg.mp4'></video>
    </div>
  )
}

export default Video
