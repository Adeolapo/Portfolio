import React, { useEffect } from 'react'
import me from '../../assets/about/Me.jpg'
import './about.css'
import { IconCloud } from "@/components/ui/icon-cloud"
import css from  '../../assets/skill-icons-main/icons/CSS.svg'
import html from  '../../assets/skill-icons-main/icons/HTML.svg'
import js from  '../../assets/skill-icons-main/icons/JavaScript.svg'
import reactt from  '../../assets/skill-icons-main/icons/React-Light.svg'
import tailwind from  '../../assets/skill-icons-main/icons/TailwindCSS-Light.svg'
import figma from  '../../assets/skill-icons-main/icons/Figma-Light.svg'
import firebase from  '../../assets/skill-icons-main/icons/Firebase-Light.svg'
import github from  '../../assets/skill-icons-main/icons/Github-Light.svg'
import nodejs from  '../../assets/skill-icons-main/icons/NodeJS-Light.svg'
import redux from  '../../assets/skill-icons-main/icons/Redux.svg'
import typescript from  '../../assets/skill-icons-main/icons/TypeScript.svg'
import next from  '../../assets/skill-icons-main/icons/NextJS-Light.svg'



import Star from '../../component/background/Star'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const goBack = () => {
    navigate(-1);
    console.log("going back");
  }

  const images = [
    {
      src: css,
      alt: 'CSS3 Logo',
      name: 'CSS3',

    },
    {
      src: html,
      alt: 'HTML5 Logo',
      name: 'HTML5',
    },
    {
      src: js,
      alt: 'JavaScript Logo',
      name: 'JavaScript',
    },
    {
      src: reactt,
      alt: 'React Logo',
      name: 'React',
    },
    {
      src: tailwind,
      alt: 'Tailwind CSS Logo',
      name: 'Tailwind CSS',
    },
    {
      src: figma,
      alt: 'Figma Logo',
      name: 'Figma',
    },
    {
      src: firebase,
      alt: 'Firebase Logo',
      name: 'Firebase',
    },
    {
      src: github,
      alt: 'GitHub Logo',
      name: 'GitHub',
    },
    {
      src: nodejs,
      alt: 'Node.js Logo',
      name: 'Node.js',
    },
    {
      src: redux,
      alt: 'Redux Logo',
      name: 'Redux',
    },
    {
      src: typescript,
      alt: 'TypeScript Logo',
      name: 'TypeScript',
    },
    {
      src: next,
      alt: 'Next.js Logo',
      name: 'Next.js',
    },
  ];

  

  return (
    <div className=' md:text-left space-y-4 text-center relative py-8  '>
      <Star />
      <button onClick={goBack} className='mb-5 cursor-pointer  md:w-12 md:h-12 w-10 h-10 rounded-lg  bg-white  flex items-center justify-center  transition-all transform hover:scale-110 hover:bg-[#31E1F7] sticky top-[20px]  md:ml-[80px] ml-8'>
        <i className="fa-solid fa-angle-left z-10 text-black md:text-[24px] text-[20px] "></i>
      </button>
      
      <div className='flex flex-col md:flex-row md:items-start justify-between items-center gap-8 mb-[100px] p-8 md:px-20  w-full pt-[32px]'> 
        <div className='md:w-[55%] w-full mb-10 md:mb-0 md:top-20 h-full '>
          <h1 className='text-4xl font-bold mb-10 '>About Me</h1>
          <p className='w-full  '>Hi there 👋🏽<br/>

I’m Oluwasemilore Toluwanimi Adeolapo, a Frontend Developer and UI/UX Designer focused on building clean, responsive, and user-centered digital experiences.

I’ve designed and developed multiple responsive websites for local businesses, improving their online presence and boosting conversions through clearer design and better usability.

I combine creativity with logic, always digging into the “why” behind each design choice.</p>

        </div>
      
        <img src={me} alt="" className=' md:w-[35%] md:h-[400px] w-full rounded-2xl' />
      </div>

      <div className=' w-full   '>
      
        
        <h2 className='text-4xl font-bold md:ml-[80px] ml-8'>My Ecosystem</h2>

        <div className=" border-none relative flex size-full ma-w-lg items-center justify-center overflow-hidden rounded-lg border w-full h-[300px] mt-10 p-10 m-auto mb-[100px] ">
          <IconCloud  images={images.map(image => image.src)}  />
         </div>

         <div className='flex gap-4 items-center justify-center flex-wrap mt-10 '>
            {images.map((image, index) => (
              <div key={index} className=' flex gap-2 items-center hover:scale-110 bg-[#333333] p-4 rounded-lg '>
                <img src={image.src} alt={image.alt} className='md:w-[24px] md:h-[24px] w-[16px] h-[16px] m-auto ' />
                <p className='md:text-lg text-sm text-[#fcfcfc] '>{image.name}</p>
              </div>
            ))}
         </div>

         
      </div>
        
    </div>
  )
}

export default About