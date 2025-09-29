import React from 'react';
import Skillred from '../components/skills/Skillcrd';
import Certificates from '../components/about/Certificates';

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Express.js",
    "Node.js",
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Object-Oriented Programming",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks and Security",
    "Java"
  ];

  return (
    <div>
     
      <div className='p-4'>
        <div className='md:pt-[40vh] md:pt-[20vh] pt-10'>
          <h2 className='font-[font2] text-black md:text-[9vw] text-[15vw] uppercase md:py-0 md:py-10 py-5'>
            skills
          </h2>
        </div>
      </div>

      
      <div className="flex flex-wrap -mx-2">
        {skills.map((elem, id) => (
          <div key={id} className="w-full md:w-1/3 px-2 md:mb-4 mb-2">
            <Skillred skills={elem} />
          </div>
        ))}
      </div>

      
      <div>
        <Certificates />
      </div>
    </div>
  );
};

export default Skills;
