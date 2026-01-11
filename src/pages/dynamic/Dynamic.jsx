import React, { use, useEffect, useState } from 'react'
import Masonry from 'react-masonry-css';
import cover1 from '../../assets/cover/cover1.png'
import cover2 from '../../assets/cover/cover2.jpg'
import cover3 from '../../assets/cover/cover3.jpg'
import cover4 from '../../assets/cover/cover4.jpg'
import cover5 from '../../assets/cover/cover5.png'
import cover6 from '../../assets/cover/cover6.png'
import cover7 from '../../assets/cover/cover7.png'
import booksy from '../../assets/cover/Booksy.png'
import segsy from '../../assets/cover/segsy.png'
import avex from '../../assets/cover/Avex.png'
import befit from '../../assets/cover/BeFit.png'
import './dynamic.css'
import { useNavigate } from 'react-router-dom';
import Star from '@/component/background/Star';

const Dynamic = () => {

    const [height, setHeight] = useState([]);

    const heights = [];

    const generateHeight = () => {
        for (let i = 0; i < projects.length; i++) {
            const randomHeight = Math.floor(Math.random() * 200) + 150; // between 150px and 300px
           heights.push(randomHeight);

           setHeight(heights);
            
        }
    }
    const breakpoints = {
    default: 4,
    1024: 3,
    768: 2,
    480: 2,
  };

  


    const projects = [
        {
            
            title: "Avex Fintech App",
            description: "Description for project one.",
            imageUrl: avex,
            view:"www.behance.net/gallery/240868779/Avex-Fintech-App",
            
        },
        {
            
            title: "BeFit Landing Page",
            description: "Description for project one.",
            imageUrl: befit,
            view:"www.behance.net/gallery/241384427/BeFIT-Landing-Page",
            
        },
        {
            
            title: "Booksy Case Study",
            description: "Description for project one.",
            imageUrl: booksy,
            view:"www.behance.net/gallery/238577089/Booksy-Case-Study",
            
        },
        {
            
            title: "Segsy AI Landing Page",
            description: "Description for project one.",
            imageUrl: segsy,
            view:"www.behance.net/gallery/239188485/Segsy-AI-Landing-page",
            
        },
        {
            
            title: "VertAI",
            description: "Description for project one.",
            imageUrl: cover1,
            view:"www.behance.net/gallery/227966759/VertAI",
            
        },
        {
            
            title: "Verty NFT Marketplace",
            description: "Description for project one.",
            imageUrl: cover2,
            view:"www.behance.net/gallery/231313655/Verty-NFT-Marketplace",
            
        },
       
        {
            
            title: "Retro Crocs E-commerce",
            description: "Description for project one.",
            imageUrl: cover4,
            view:"www.behance.net/gallery/220992183/Crocs-e-commerce-web-and-mobile-design",
           
        },
        
        {
            
            title: "Real Estate Landing Page",
            description: "Description for project one.",
            imageUrl: cover6,
            view:"www.behance.net/gallery/234692779/Real-Estate-Landing-Page",
           
        },
        {
            
            title: "Furnicho UI Design",
            description: "Description for project one.",
            imageUrl: cover7,
            view:"www.behance.net/gallery/217731639/Furnicho-UI-design",
           
        },
    ]

    
    console.log(projects)

    useEffect(() => {
        generateHeight();
        console.log(heights);
    }, []);

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
        console.log("going back");
    }
    

  return (
    <div className='p-8 text-left space-y-4 py-8  '>
        <Star />
        <button onClick={goBack} className='mb-5 cursor-pointer  md:w-12 md:h-12 w-10 h-10 rounded-lg  bg-white  flex items-center justify-center  transition-all transform hover:scale-110 hover:bg-[#31E1F7] z-50 sticky top-[20px]'>
            <i className="fa-solid fa-angle-left z-10 text-black md:text-[24px] text-[20px] "></i>
        </button>
        

        <h1 className='md:text-7xl text-4xl font-bold md:mb-10 mb-5 '>UI/UX Projects</h1>
        <p className='md:text-[18px] text-[14px] font-normal md:mb-10 mb-5'>Here are some of my best UI/UX projects</p>
        <div className='w-full bg-[white] rounded-lg flex items-center justify-left mb-10 md:p-5 p-3'>
            <p className='text-base text-[#222]  font-medium'>Here are some of my dynamic projects</p>
        </div>

    <div>
    <Masonry
      breakpointCols={breakpoints}
      className="flex gap-4"
      columnClassName="flex flex-col gap-4"
    >
        

        {projects.map((project,index) => (
            console.log(project.imageUrl),
            <div className="hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div
            key={index}
            style={{ backgroundImage: `url(${project.imageUrl})`,height: `${height[index]}px` }}
            className="relative bg-cover bg-center rounded-lg shadow-md  overflow-hidden p-4 "
            >
            
                <h2 className="text-xl font-semibold text-white">
                    
                </h2>
                <p className="text-gray-200"></p>
                <div className={`absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity w-full h-full duration-300 flex items-center justify-center opacity-100 md:opacity-0`}>
                    <div>
                        <a href={`https://${project.view}`} target="_blank" rel="noopener noreferrer">
                        <div className='rounded-full bg-white md:w-[50px] md:h-[50px] h-[30px] w-[30px] flex items-center justify-center text-gray-700 hover:scale-125 transition-transform duration-300'>
                            <i className="fa-solid fa-eye md:text-2xl text-sm text-[#05080F]"></i>
                        </div>
                        </a>
                        
                    </div>
                </div>
            </div>
            <h2 className="text-[12px] md:text-md font-semibold text-white">{project.title}</h2>
            </div>
        ))}
    </Masonry>


      </div>
      

      
    </div>
  )
}

export default Dynamic


/*<div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 
                      flex justify-center items-center gap-6 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        
        
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 
                        hover:scale-125 transition-transform duration-300">
        
        </div>
        </div>*/