import React from 'react'

const ProjectCrd = (props) => {
  return (
    <div className="flex md:flex-row flex-col w-full h-full gap-10 px-10">
      
      
      <div className='md:w-1/2 w-full group transition-all relative h-full hover:rounded-4xl overflow-hidden'>
        
        <div className="w-full h-64 md:h-80 overflow-hidden rounded-xl">
          <img 
            className="h-full w-full object-contain p-5 mt-3" 
            src={props.row1.link} 
            alt={props.row1.title} 
          />
        </div>

        
        <div className="md:mt-[3vw] px-[5vw]">
          <h2 className="text-2xl font-bold">{props.row1.title}</h2>
          <p className="text-gray-600 mt-2">{props.row1.description}</p>
          <p className="text-sm text-gray-400 mt-1">Skills: {props.row1.keySkills}</p>
        </div>

        
        <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center'>
          {props.row1.projectLink && (
            <a 
              href={props.row1.projectLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='uppercase text-xl border-2 py-2 px-5 rounded-full bg-white/10 text-white font-semibold'
            >
              Visit Project
            </a>
          )}
        </div>
      </div>

      
      <div className='md:w-1/2 w-full group transition-all relative h-full hover:rounded-4xl overflow-hidden'>
       
        <div className="w-full h-64 md:h-80 overflow-hidden rounded-xl">
          <img 
            className="h-full w-full object-contain p-5 mt-3" 
            src={props.row2.link} 
            alt={props.row2.title} 
          />
        </div>

        
        <div className="md:mt-[3vw] px-[5vw]">
          <h2 className="text-2xl font-bold">{props.row2.title}</h2>
          <p className="text-gray-600 mt-2">{props.row2.description}</p>
          <p className="text-sm text-gray-400 mt-1">Skills: {props.row2.keySkills}</p>
        </div>

        
        <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center'>
          {props.row2.projectLink && (
            <a 
              href={props.row2.projectLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='uppercase text-xl border-2 py-2 px-5 rounded-full bg-white/10 text-white font-semibold'
            >
              Visit Project
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCrd
