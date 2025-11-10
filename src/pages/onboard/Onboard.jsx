import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";

    
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Star from '@/component/background/Star';

gsap.registerPlugin(DrawSVGPlugin);

const Onboard = () => {
    useGSAP(()=>{
        //draws all elements with the "draw-me" class applied 
        gsap.fromTo(".logo", {drawSVG: "0"}, {duration: 6, drawSVG: "100%",});
        gsap.to('.blu ', {fill: '#31E1F7', duration: 2, delay: 6,  stroke: '#31E1F7' })
        gsap.to('.whit ', {fill: '#fff', duration: 2, delay: 6,  stroke: '#222222' })
        /*gsap.to(".logo", {
        duration:1,
        //drawSVG: "100%",
        opacity: 2,
        rotation: 360,
        });*/
    })
    return (
    <div>
        <div className=' b-[url(/Rectangle232.svg)] b-cover h-[100vh] w-[100vw] flex items-center justify-center '>
        <Star />
        
            <svg  className=' ' width="200" height="200" stroke='' viewBox="0 0 111 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3142_3044)">
                <path className='logo blu  stroke-2 stroke-[#fff] fill-transparent ' d="M33.1 71.9016C29.5 71.9016 27.1 70.2683 25.9 67.0016L0.5 1.60156C1.23333 1.20156 2.2 0.868229 3.4 0.601562C4.66667 0.268229 5.83333 0.101562 6.9 0.101562C12.6333 0.101562 16.3 2.40156 17.9 7.00156L32.3 47.4016L29.8 54.2016L31 54.7016L48.2 7.00156C49.9333 2.40156 53.6 0.101562 59.2 0.101562C60.2667 0.101562 61.4 0.268229 62.6 0.601562C63.8667 0.868229 64.8667 1.20156 65.6 1.60156L40.3 67.0016C39.1 70.2683 36.7 71.9016 33.1 71.9016Z" fill="#31E1F7"/>
                <path className='logo whit stroke-2 stroke-[#31E1F7] fill-transparent' d="M71.6 12.7H47.5C47.5 4.23333 51.3333 0 59 0H110.3C110.3 8.46667 106.467 12.7 98.8 12.7H86.3V60.3C86.3 63.7667 85.0333 66.4 82.5 68.2C80.0333 70 76.4 70.9 71.6 70.9V12.7Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_3142_3044">
                <rect width="111" height="72" fill="white"/>
                </clipPath>
                </defs>
            </svg>

            <circle r='42'></circle>
        </div>
      
    </div>
  )
}

export default Onboard
