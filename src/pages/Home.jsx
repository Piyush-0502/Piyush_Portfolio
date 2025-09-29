import React from 'react'
import Video from '../components/home/Video'
import Hometop from '../components/home/Hometop'
import Homebottom from '../components/home/Homebottom'
const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video/>
      </div>
    <div className='h-screen  w-screen relative flex flex-col justify-between'>
      <Hometop/>
      <Homebottom/>
    </div>

    </div>
  )
}

export default Home
