import React from 'react'
import ProjectCrd from '../components/projects/ProjectCrd'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'  


const Projects = () => {
    const projects = [
  {
    row1: {
      title: "travelX",
      description: "Developed a complete responsive website to describe tourist places where users can add, update, delete places, and post reviews. Added authorization and authentication for CRUD operations.",
      keySkills: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Bootstrap, EJS, MVC",
      projectLink: "https://travelx-zwg4.onrender.com",
      link: "https://lilacinfotech.com/lilac_assets/images/blog/how-to-build-a-travel-app.jpg"
       
    },
    row2: {
      title: "Weather-App",
      description: "Developed a weather app showing current temperature, weather condition, humidity, and wind speed for searched cities. Handles errors for invalid city names.",
      keySkills: "React.js, Node.js, CSS, JavaScript, Web API",
      projectLink: "https://github.com/Piyush-0502/Weather-App.git",
      link:"https://thumbs.dreamstime.com/b/weather-app-interface-displayed-mobile-phone-sun-clouds-temperature-seventeen-degrees-displays-smiling-fluffy-395545724.jpg"
       
    }
  },
  {
    row1: {
      title: "Personal Portfolio",
      description: "Developed a personal portfolio website to showcase skills, projects, and experience. Responsive layout with clean design and interactive elements.",
      keySkills: "HTML, CSS, JavaScript, Bootstrap, Web Design",
      projectLink: "https://github.com/Piyush-0502/Piyush-0502.github.io.git",
      link:"https://c8.alamy.com/comp/2PT2G4Y/personal-portfolio-with-profile-data-resume-or-self-improvement-to-attract-clients-and-employers-in-flat-cartoon-hand-drawn-templates-illustration-2PT2G4Y.jpg"
       
    },
    row2: {
      title: "Blood Bank Management",
      description: "Developed a web app to manage blood group data, including user registration, inventory tracking, and real-time updates. Implemented secure access for donors and medical staff with efficient search and notification systems.",
      keySkills: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
      projectLink: "",
      link:"https://media.istockphoto.com/id/1491193279/vector/professional-phlebotomist-collecting-human-blood-from-iv.jpg?s=612x612&w=0&k=20&c=FoQPwY9sPwrcLl1W-6IyJlWFHnamIp_4mDlxlveKoY8="
    }
  },
  {
    row1: {
      title: "Simon Says Game",
      description: "Developed a simple Landing page of website using HTML and CSS in which the data is represented in the page.",
      keySkills: "HTML, CSS",
      projectLink: "",
      link:"https://m.media-amazon.com/images/I/61MHBFYV0mL.png"
    },
    row2: {
      title: "Temperature Converter",
      description: "Developed a Temperature converter using HTML, CSS, and JavaScript where users can input values in Celsius or Kelvin and get conversions.",
      keySkills: "HTML, CSS, JavaScript",
      projectLink: "",
      link:"https://ucarecdn.com/555c0661-e108-40d6-b038-82b8259d5e11/"
    }
  },
  {
    row1: {
      title: "Portfolio",
      description: "Developed a Portfolio in HTML and CSS to showcase my skills and projects. Various sections present and can add new fields as well.",
      keySkills: "HTML, CSS",
      projectLink: "",
      link:"https://c8.alamy.com/comp/2PT2G4Y/personal-portfolio-with-profile-data-resume-or-self-improvement-to-attract-clients-and-employers-in-flat-cartoon-hand-drawn-templates-illustration-2PT2G4Y.jpg"
    },
    row2: {
      title: "SoundScape",
      description: "Developed a simple responsive E-Commerce Website page using HTML and CSS to sell headphones.",
      keySkills: "HTML, CSS",
      projectLink: "",
      link:"https://media.istockphoto.com/id/905214218/vector/cartoon-headhpones-playing-music.jpg?s=612x612&w=0&k=20&c=zvr8HHXVjLSFLgSO4fwT83ZhJfGLm7tySR1aNm8aXHc="
 }
  }
];


  gsap.registerPlugin(ScrollTrigger)  
  useGSAP(() => {
    gsap.from('.hero', {
      height: "100px",
      stagger:{
        amount:0.2
      },
      scrollTrigger: {
        trigger: '.heropar',
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })

  return (
    <div className='p-2'>
      <div className='lg:pt-[45vh] pt-[20vh] mb-7'>
        <h2 className='font-[font2] text-black lg:text-[9vw] text-[15vw] uppercase lg:py-0 py-10'>projects</h2>
      </div>
      
      <div className='-mt-10 heropar '>
        {projects.map(function(elem , idx){
          return (
           <div key={idx} className='hero w-full md:h-[85vh] h-[140vh] md:mb-20 mb-10 lg:flex-row flex-col lg:gap-5 gap-1 '>
            <ProjectCrd row1={elem.row1} row2={elem.row2}/>
           </div>
          )
        })}
      </div>

    </div>
  )
}

export default Projects
