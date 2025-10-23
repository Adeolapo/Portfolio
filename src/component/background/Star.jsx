import React, { useContext } from "react";
import './star.css'
import rock from '../../assets/rock.svg'

import { useEffect, useState } from "react"
import { MyContext } from "../../../Context";

const Star = () => {

    const [stars,setStars]= useState([]);
    const [meteors,setMeteors]= useState([]);
    const {robotRef,backgroundRef} = useContext(MyContext)


   

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);


        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y:  Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
                
            });
            
        }

         setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4


        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y:  Math.random() * 30,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
                
            });
            
        }

         setMeteors(newMeteors);
    };


    useEffect(()=>{
        generateStars()
        generateMeteors()

        const handleResize = () =>{
            window.addEventListener('resize', handleResize)

            return()=> window.removeEventListener("resize",handleResize)
        }
       
    },[])



    


    return (
        <div className="fixed inset-0 overflow-hidden ">
        <div ref={backgroundRef} className="fixed inset-0 overflow-hidden pointer-events-none z-10 bg-[#05080F
] px-[80px]">
            {stars.map((star)=>(
                <div key={star.id} className="star absolute rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.4)] animate-[pulse_ease-in-out_infinite] " style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: `${star.opacity}`,
                    animationDuration: `${star.animationDuration}s`

                }}></div>
            ))}
            {meteors.map((meteors)=>(
                <div key={meteors.id} className=" meteor animate-meteor  absolute rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] bg-linear-to-r from-white via-white to-transparent  " style={{
                    width: `${meteors.size * 50}px`,
                    height: `${meteors.size}px`,
                    left: `${meteors.x}%`,
                    top: `${meteors.y}%`,
                    animationDelay: `${meteors.delay}`,
                    animationDuration: `${meteors.animationDuration}s`

                }}></div>
            ))}

            

        </div>
        
        
        </div>
    );

}

export default Star