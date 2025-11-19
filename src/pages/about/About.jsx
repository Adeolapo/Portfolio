import React from 'react'
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
    },
  ];

  

  return (
    <div className='p-8 text-left spac-y-4 '>
      <Star />
      <button onClick={goBack} className='mb-5 cursor-pointer  md:w-12 md:h-12 w-10 h-10 rounded-lg  bg-white  flex items-center justify-center  transition-all transform hover:scale-110 hover:bg-[#31E1F7] sticky top-[20px]'>
        <i className="fa-solid fa-angle-left z-10 text-black md:text-[24px] text-[20px] "></i>
      </button>
      
      <div className='flex flex-col md:flex-row md:items-start justify-between ga-8 mb-20 '> 
        <div className='md:w-[55%] w-full mb-10 md:mb-0 md:sticky md:top-20'>
          <h1 className='text-4xl font-bold mb-10 '>About Me</h1>
          <p className='w-full  '>Hi there 👋🏽<br/>
            I’m Oluwasemilore Toluwanimi Adeolapo — a Frontend Developer and UI/UX Designer with a deep passion for creating digital experiences that connect with people. I love turning ideas into interactive, visually engaging, and user-friendly products that make a real impact.<br/><br/>

            With a strong background in React.js, Tailwind CSS, and Figma, I specialize in building clean, responsive, and accessible interfaces for both web and mobile platforms. Over the past few years, I’ve designed and developed five fully responsive websites for local businesses, helping them strengthen their online presence and achieve up to 30% higher conversion rates through improved user experience and design clarity.<br/><br/>

            My approach blends creativity with logic — I enjoy exploring the “why” behind every design decision and aligning it with a clear user goal. Whether it’s wireframing in Figma, fine-tuning UI interactions, or optimizing front-end performance, I find satisfaction in crafting products that feel smooth, intentional, and enjoyable to use.<br/><br/>

            When I’m not coding or designing, you’ll probably find me learning something new, experimenting with animations, or refining design systems that make teams work faster and smarter.</p>

        </div>
      
        <img src={me} alt="" className=' md:w-[40%] w-full rounded-2xl' />
      </div>

      <div className=' w-full h-[100vh]  '>
      
        
        <h2 className='text-4xl font-bold'>My Ecosystem</h2>

        <div className=" border-none relative flex size-full ma-w-lg items-center justify-center overflow-hidden rounded-lg border w-full h-[300px] mt-10 p-10 m-auto ">
          <IconCloud images={images.map(image => image.src)}  />
         </div>

         
      </div>
        
    </div>
  )
}

export default About