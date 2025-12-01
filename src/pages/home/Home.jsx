import React, { useContext, useEffect, useRef, useState } from "react";
import './home.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MyContext } from "../../../Context";
import { Link } from "react-router-dom";
import ui from '../../assets/cover/ui.png'
import frontend from '../../assets/cover/frontend.png'
import backend from '../../assets/cover/backend.png'
import me from '../../assets/cover/mee.png'

const Home= ()=>{

    const skillsData = {
        'About': {
        title: 'About',
        description: 'I’m a developer who blends design, code, and strategy to create smooth, meaningful digital experiences.',
        icon: '🎨',
        subtitle: 'About Me',
        gradient: 'from-purple-500 to-pink-500',
        link: 'about',
        img: me,

        },
        'ui-ux': {
        title: 'UI/UX DESIGN',
        description: 'I design intuitive, user-centered experiences that balance aesthetics, clarity, and purpose.',
        icon: '🎨',
        subtitle: 'User Experience',
        gradient: 'from-purple-500 to-pink-500',
        link: 'ui_ux',
        img: ui,
        },
        'frontend': {
        title: 'FRONTEND DEV',
        description: 'I craft responsive, accessible, and visually engaging interfaces that turn ideas into seamless user experiences.',
        icon: '💻',
        subtitle: 'React & Next.js',
        gradient: 'from-pink-500 to-red-500',
        link: 'frontend',
        img: frontend,
        },
        'backend': {
        title: 'BACKEND DEV', 
        description: 'I build fast, secure systems that keep everything running flawlessly.',
        icon: '⚙️',
        subtitle: 'Node.js & APIs',
        gradient: 'from-blue-500 to-cyan-500',
        link: 'backend',
        img: backend,
        },
    }

    const skills = Object.entries(skillsData);
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const containerRef = useRef(null);
    const containerReff = useRef(null);
    const navRef = useRef(null);
    const heroContentRef = useRef(null);
    const aboutContentRef = useRef(null);
    //const robotRef = useRef(null);
    //const backgroundRef = useRef(null);
    const {robotRef,backgroundRef,link,setLink} = useContext(MyContext)
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const heroTitleRef = useRef(null);
    const heroDescriptionRef = useRef(null);
    const heroButtonRef = useRef(null);
    const heroDescriptionReff = useRef(null);
    const heroButtonReff = useRef(null);
    const cardsRef = useRef(null);
    const gsapRef = useRef(null);
    const ScrollTriggerRef = useRef(null)

    gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
    gsap.registerPlugin(ScrollTrigger);



    /*useGSAP(()=>{

      const sections = gsap.utils.toArray('.section');

      console.log(sections)

    

  
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerReff.current,
                start: "top top",
                end: "100% 80%",
                scrub: 1.2,
                snap: 1 / (sections - 1)
            }
        })

        tl.to(heroContentRef.current?.querySelector('.hero-title'),{
            opacity: 0,
            y: -30,
            duration: 0.6,

        }, 0.2)
        .to(heroContentRef.current?.querySelector('.hero-description'), {
        opacity: 0,
        y: -30,
        duration: 0.6
      }, 0.3)
        .to(heroContentRef.current?.querySelector('.hero-descriptions'), {
        opacity: 0,
        y: -30,
        duration: 0.6
      }, 0.4)
      .to(heroContentRef.current?.querySelector('.hero-buttons'), {
        opacity: 0,
        y: -30,
        duration: 0.6
      }, 0.5)
      //about section
       .to(aboutContentRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      
    }, 0.5)
    .fromTo(".BACK", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.7,
      ease: "power2.out"
    }, 0.7)
    .fromTo(".nav-arrows", {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, 0.6)
    .fromTo(titleRef.current, {
      opacity: 0,
      y: 50,
      scale: 1.1
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    }, 0.7)
    .fromTo(".skill-card", {
      opacity: 0,
      y: 100,
      rotation: (i) => (i - 1.5) * 10
    }, {
      opacity: 1,
      y: 0,
      rotation: 0,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.1
    }, 0.8)
    .fromTo(".card-indicators", {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, 1)
    .fromTo(descriptionRef.current, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, 1.1)
    .fromTo(".about-buttons", {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, 1.2);

    //paralax
    gsap.to(backgroundRef.current, {
      y: -100,
      scale: 1.05,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5
      }
    });

     gsap.to(robotRef.current, {
      y: 250,
      x: -30,
      rotation: 3,
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom bottom",
        end: "middle middle",
        scrub: 2,
      }
    });
















      const cards = cardsRef.current?.children || [];
      Array.from(cards).forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
          if (index !== currentSkillIndex) {
            gsap.to(card, {
              scale: 1.02,
              y: -5,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          if (index !== currentSkillIndex) {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      });


    })*/
     useGSAP(() => {
    const sections = gsap.utils.toArray('.section');
    
    // GSAP ScrollTrigger with snap
    ScrollTrigger.create({
      trigger: containerReff.current,
      start: "top bottom",
      end: "bottom bottom",
      markers: false,
      snap: {
        snapTo: 1 / (sections.length - 1), // Snap to each section
        duration: 0.2,  // Snap animation duration
        delay: 0,       // Delay before snapping
        //ease: "power2.inOut"               // Easing function
        ease: "linear"               // Easing function
      },
      scrub: 5,
      // markers: true, // Uncomment to debug
    });

    // Hero section animations
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContentRef.current,
        start: "top top",
        end: "bottom bottom",
        //start: "top 80%",
        //end: "top 20%",
        scrub: 1.5,
        markers: false,
      }
    });
    gsap.set(heroButtonRef.current, { pointerEvents: "auto" });
    heroTl
      .to(heroTitleRef.current, { opacity: 0, y: -30, duration: 0.5 }, 0.2)
      .to(heroDescriptionRef.current, { opacity: 0, y: -30, duration: 0.5 }, 0.3)
      .to(heroDescriptionReff.current, { opacity: 0, y: -30, duration: 0.5 }, 0.3)
      .to(heroButtonRef.current, { opacity: 0, y: -30, duration: 0.5 }, 0.4)
      .to(heroButtonReff.current, { opacity: 0, y: -30, duration: 0.5 }, 0.5);

    // About section entrance
    gsap.set(aboutContentRef.current, { opacity: 0 });
    gsap.set('.nav-arrows', { opacity: 0, y: 30 });
    gsap.set(titleRef.current, { opacity: 0, y: 50, scale: 1.1 });
    gsap.set('.skill-card', { opacity: 0, y: 100 });
    gsap.set('.card-indicators', { opacity: 0, y: 20 });
    gsap.set(descriptionRef.current, { opacity: 0, y: 30 });

    // Animate about section on scroll
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutContentRef.current,
        start: "top 100%",
        end: "top top",
        scrub: 1,
        markers: false,
      }
    });

    aboutTl
      .to(aboutContentRef.current, { opacity: 1, duration: 0.5 })
      .to('.nav-arrows', { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
      .to(titleRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.4}, "-=0.15")
      .to('.skill-card', { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.05,
        //ease: "back.out(1.7)"
        ease: "linear"
      }, "-=0.2")
      .to('.card-indicators', { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
      .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2");

        //paralax
    gsap.to(backgroundRef.current, {
      y: -100,
      scale: 1.05,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2
      }
    });

     gsap.to(robotRef.current, {
      y: 250,
      x: -30,
      rotation: 3,
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom bottom",
        end: "middle middle",
        scrub: 2,
      }
    });

  }, { scope: containerRef });

    //not rview

   const animateSkillChange = (newIndex) => {
    if (newIndex === currentSkillIndex) return;

    // Create skill change timeline
    const skillTl = gsap.timeline();

    // Animate cards sliding
    skillTl.to(cardsRef.current, {
      x: -newIndex * 320,
      duration: 0.3,
      ease: "power2.out"
    }, 0);

    // Animate title change
    skillTl.to(titleRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => setCurrentSkillIndex(newIndex)
    }, 0)
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      delay: 0.1
    });

    // Animate description change
    skillTl.to(descriptionRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.out"
    }, 0)
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      delay: 0.15
    });

    // Update active card styling
    gsap.utils.toArray('.skill-card').forEach((card, index) => {
      if (index === newIndex) {
        gsap.to(card, {
          scale: 1.05,
          borderColor: 'rgba(255, 255, 255, 0.6)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          duration: 0.4,
          ease: "back.out(1.7)"
        });
      } else {
        gsap.to(card, {
          scale: 1,
          borderColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: 'none',
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  };

  // Navigation functions
  const navigateSkills = (direction) => {
    const newIndex = currentSkillIndex + direction;
    if (newIndex >= 0 && newIndex < skills.length) {
      animateSkillChange(newIndex);
    }
  };

  const selectSkill = (index) => {
    animateSkillChange(index);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0 && currentSkillIndex < skills.length - 1) {
        navigateSkills(1);
      } else if (distance < 0 && currentSkillIndex > 0) {
        navigateSkills(-1);
      }
    }
  };











useEffect(() => {

 
  

  console.log(link)

}, [currentSkillIndex]);

console.log(skills[currentSkillIndex][1].title)

 const currentSkill = skills[currentSkillIndex][1].link.toLowerCase() ;

 console.log(currentSkill)



    return(
        <div ref={containerReff} className='home-container  ' style={{ scrollBehavior: 'smooth' }}>
            <div ref={heroContentRef} className='section w-full sna-start sna-always pt-[170px] md:pt-[88px]  h-[100vh] px-[24px] md:px-[64px] '>
                <div className='text-center m-auto   '>
                <div className="h-"></div> 
                <h1 ref={heroTitleRef} className="hero-title font-Space text-[#fff] -[16px] md:text-[20px] text-[16px] m-0 p-0 mb-8 block text-lg font-medium" >Hi, My name is Adeolpo Joseph</h1>
                <p ref={heroDescriptionReff} className='hero-description md:tex-[94px] h- tex-[36px] font-bold text-[#fff]  m-0 p-0 mb-2 text-4xl font-medium tracking-tight sm:text-6xl lg:text-8xl '>Frontend Developer</p>
                <svg ref={heroDescriptionRef} width="" height='' className='hero-descriptions h-[36px] w-full md:w-[900px] md:h-[94px] text-[100px] m-auto mb-8 -[32px]  ' viewBox="0 0 510 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="hero-descriptions url(#clip0_3160_3041)">
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] -[100px]  ' d="M14.04 46.0031C11.3947 46.0031 9.06933 45.5338 7.06399 44.5951C5.10133 43.6138 3.56533 42.2271 2.45599 40.4351C1.34666 38.6004 0.791992 36.4244 0.791992 33.9071C0.791992 32.0724 1.11199 30.4724 1.75199 29.1071C2.43466 27.7418 3.35199 26.6111 4.50399 25.7151C5.65599 24.8191 6.93599 24.1578 8.34399 23.7311V22.8351C6.21066 22.1951 4.46133 21.0858 3.09599 19.5071C1.73066 17.9284 1.04799 15.8378 1.04799 13.2351C1.04799 10.6324 1.62399 8.43512 2.77599 6.64312C3.92799 4.85112 5.48533 3.50713 7.44799 2.61112C9.45333 1.67246 11.736 1.20312 14.296 1.20312H21.272V7.85913H15.768C13.848 7.85913 12.248 8.37112 10.968 9.39512C9.73066 10.4191 9.11199 11.9338 9.11199 13.9391C9.11199 15.3471 9.41066 16.4991 10.008 17.3951C10.648 18.2911 11.4587 18.9524 12.44 19.3791C13.464 19.8058 14.5733 20.0191 15.768 20.0191H21.976V14.2591H30.04V20.0191H35.928V26.6751H30.04V46.0031H14.04ZM15.512 39.3471H21.976V26.6751H15.512C13.6347 26.6751 12.056 27.2084 10.776 28.2751C9.49599 29.3418 8.85599 30.9204 8.85599 33.0111C8.85599 35.1444 9.51733 36.7444 10.84 37.8111C12.2053 38.8351 13.7627 39.3471 15.512 39.3471Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M74.5663 46.8991C70.897 46.8991 67.7396 46.2378 65.0943 44.9151C62.4916 43.5498 60.4863 41.6298 59.0783 39.1551C57.713 36.6378 57.0303 33.6724 57.0303 30.2591V1.20312H65.4783V30.5151C65.4783 33.2458 66.2463 35.4004 67.7823 36.9791C69.361 38.5578 71.6223 39.3471 74.5663 39.3471C77.5103 39.3471 79.7503 38.5578 81.2863 36.9791C82.865 35.4004 83.6543 33.2458 83.6543 30.5151V1.20312H92.1023V30.2591C92.1023 33.6724 91.3983 36.6378 89.9903 39.1551C88.625 41.6298 86.6196 43.5498 83.9743 44.9151C81.3716 46.2378 78.2356 46.8991 74.5663 46.8991Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M100.286 46.0031V1.20312H108.734V46.0031H100.286Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M111.913 58.8031L130.729 1.20312H138.793L119.977 58.8031H111.913Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M159.254 46.8991C155.585 46.8991 152.427 46.2378 149.782 44.9151C147.179 43.5498 145.174 41.6298 143.766 39.1551C142.401 36.6378 141.718 33.6724 141.718 30.2591V1.20312H150.166V30.5151C150.166 33.2458 150.934 35.4004 152.47 36.9791C154.049 38.5578 156.31 39.3471 159.254 39.3471C162.198 39.3471 164.438 38.5578 165.974 36.9791C167.553 35.4004 168.342 33.2458 168.342 30.5151V1.20312H176.79V30.2591C176.79 33.6724 176.086 36.6378 174.678 39.1551C173.313 41.6298 171.307 43.5498 168.662 44.9151C166.059 46.2378 162.923 46.8991 159.254 46.8991Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M182.158 46.0031L195.278 23.4111L182.286 1.20312H191.886L200.782 17.3951H201.934L210.83 1.20312H220.43L207.438 23.4111L220.558 46.0031H210.958L201.934 29.4271H200.782L191.758 46.0031H182.158Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M241.131 46.0031V38.5791H247.019V8.62712H241.131V1.20312H259.564C265.58 1.20312 270.145 2.73912 273.259 5.81112C276.417 8.84045 277.995 13.3631 277.995 19.3791V27.8271C277.995 33.8431 276.417 38.3871 273.259 41.4591C270.145 44.4884 265.58 46.0031 259.564 46.0031H241.131ZM255.467 38.3231H259.691C263.105 38.3231 265.601 37.4271 267.18 35.6351C268.758 33.8431 269.547 31.3258 269.547 28.0831V19.1231C269.547 15.8378 268.758 13.3204 267.18 11.5711C265.601 9.77912 263.105 8.88312 259.691 8.88312H255.467V38.3231Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M299.757 46.8954C296.599 46.8954 293.804 46.2341 291.372 44.9114C288.983 43.5461 287.106 41.6474 285.74 39.2154C284.418 36.7407 283.757 33.8394 283.757 30.5114V29.7434C283.757 26.4154 284.418 23.5354 285.74 21.1034C287.063 18.6287 288.919 16.7301 291.309 15.4074C293.698 14.0421 296.471 13.3594 299.628 13.3594C302.743 13.3594 305.452 14.0634 307.757 15.4714C310.06 16.8367 311.852 18.7567 313.132 21.2314C314.412 23.6634 315.052 26.5007 315.052 29.7434V32.4954H291.948C292.034 34.6714 292.844 36.4421 294.38 37.8074C295.916 39.1727 297.794 39.8554 300.012 39.8554C302.274 39.8554 303.938 39.3647 305.004 38.3834C306.071 37.4021 306.882 36.3141 307.436 35.1194L314.029 38.5754C313.431 39.6847 312.556 40.9007 311.404 42.2234C310.295 43.5034 308.802 44.6127 306.924 45.5514C305.047 46.4474 302.658 46.8954 299.757 46.8954ZM292.012 26.4794H306.861C306.69 24.6447 305.943 23.1727 304.62 22.0634C303.34 20.9541 301.655 20.3994 299.564 20.3994C297.388 20.3994 295.66 20.9541 294.38 22.0634C293.1 23.1727 292.311 24.6447 292.012 26.4794Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M335.414 46.8954C331.275 46.8954 327.883 45.9994 325.238 44.2074C322.593 42.4154 320.993 39.8554 320.438 36.5274L327.862 34.6074C328.161 36.1007 328.651 37.2741 329.334 38.1274C330.059 38.9807 330.934 39.5994 331.958 39.9834C333.025 40.3247 334.177 40.4954 335.414 40.4954C337.291 40.4954 338.678 40.1754 339.574 39.5354C340.47 38.8527 340.918 38.0207 340.918 37.0394C340.918 36.0581 340.491 35.3114 339.638 34.7994C338.785 34.2447 337.419 33.7967 335.542 33.4554L333.75 33.1354C331.531 32.7087 329.505 32.1327 327.67 31.4074C325.835 30.6394 324.363 29.5941 323.254 28.2714C322.145 26.9487 321.59 25.2421 321.59 23.1514C321.59 19.9941 322.742 17.5834 325.046 15.9194C327.35 14.2127 330.379 13.3594 334.134 13.3594C337.675 13.3594 340.619 14.1487 342.966 15.7274C345.313 17.3061 346.849 19.3754 347.574 21.9354L340.086 24.2394C339.745 22.6181 339.041 21.4661 337.974 20.7834C336.95 20.1007 335.67 19.7594 334.134 19.7594C332.598 19.7594 331.425 20.0367 330.614 20.5914C329.803 21.1034 329.398 21.8287 329.398 22.7674C329.398 23.7914 329.825 24.5594 330.678 25.0714C331.531 25.5407 332.683 25.9034 334.134 26.1594L335.926 26.4794C338.315 26.9061 340.47 27.4821 342.39 28.2074C344.353 28.8901 345.888 29.8927 346.997 31.2154C348.149 32.4954 348.726 34.2447 348.726 36.4634C348.726 39.7914 347.51 42.3727 345.078 44.2074C342.689 45.9994 339.467 46.8954 335.414 46.8954Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M355.792 46.0007V14.2567H363.857V46.0007H355.792ZM359.824 10.5447C358.374 10.5447 357.136 10.0754 356.112 9.13669C355.131 8.19802 354.641 6.96069 354.641 5.42469C354.641 3.88869 355.131 2.65136 356.112 1.71269C357.136 0.77402 358.374 0.304688 359.824 0.304688C361.318 0.304688 362.555 0.77402 363.536 1.71269C364.518 2.65136 365.008 3.88869 365.008 5.42469C365.008 6.96069 364.518 8.19802 363.536 9.13669C362.555 10.0754 361.318 10.5447 359.824 10.5447Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M371.257 30.2554V29.2314C371.257 25.9034 371.918 23.0661 373.24 20.7194C374.563 18.3301 376.312 16.5167 378.488 15.2794C380.707 13.9994 383.118 13.3594 385.72 13.3594C388.622 13.3594 390.819 13.8714 392.312 14.8954C393.806 15.9194 394.894 16.9861 395.577 18.0954H396.728V14.2554H404.664V51.6314C404.664 53.8074 404.025 55.5354 402.745 56.8154C401.465 58.1381 399.758 58.7994 397.624 58.7994H376.376V51.7594H394.809C396.003 51.7594 396.6 51.1194 396.6 49.8394V41.5834H395.448C395.022 42.2661 394.424 42.9701 393.656 43.6954C392.888 44.3781 391.865 44.9541 390.585 45.4234C389.305 45.8927 387.683 46.1274 385.72 46.1274C383.118 46.1274 380.707 45.5087 378.488 44.2714C376.312 42.9914 374.563 41.1781 373.24 38.8314C371.918 36.4421 371.257 33.5834 371.257 30.2554ZM388.025 39.0874C390.499 39.0874 392.568 38.2981 394.232 36.7194C395.896 35.1407 396.728 32.9221 396.728 30.0634V29.4234C396.728 26.5221 395.896 24.3034 394.232 22.7674C392.611 21.1887 390.542 20.3994 388.025 20.3994C385.55 20.3994 383.48 21.1887 381.816 22.7674C380.152 24.3034 379.32 26.5221 379.32 29.4234V30.0634C379.32 32.9221 380.152 35.1407 381.816 36.7194C383.48 38.2981 385.55 39.0874 388.025 39.0874Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M413.605 45.9982V14.2542H421.541V18.4142H422.693C423.205 17.3049 424.165 16.2595 425.573 15.2782C426.981 14.2542 429.114 13.7422 431.973 13.7422C434.448 13.7422 436.602 14.3182 438.437 15.4702C440.314 16.5795 441.765 18.1369 442.789 20.1422C443.813 22.1049 444.325 24.4089 444.325 27.0542V45.9982H436.261V27.6942C436.261 25.3049 435.664 23.5129 434.469 22.3182C433.317 21.1235 431.653 20.5262 429.477 20.5262C427.002 20.5262 425.082 21.3582 423.717 23.0222C422.352 24.6435 421.669 26.9262 421.669 29.8702V45.9982H413.605Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M467.507 46.8954C464.349 46.8954 461.554 46.2341 459.122 44.9114C456.733 43.5461 454.856 41.6474 453.49 39.2154C452.168 36.7407 451.507 33.8394 451.507 30.5114V29.7434C451.507 26.4154 452.168 23.5354 453.49 21.1034C454.813 18.6287 456.669 16.7301 459.059 15.4074C461.448 14.0421 464.221 13.3594 467.378 13.3594C470.493 13.3594 473.202 14.0634 475.507 15.4714C477.81 16.8367 479.602 18.7567 480.882 21.2314C482.162 23.6634 482.802 26.5007 482.802 29.7434V32.4954H459.698C459.784 34.6714 460.594 36.4421 462.13 37.8074C463.666 39.1727 465.544 39.8554 467.762 39.8554C470.024 39.8554 471.688 39.3647 472.754 38.3834C473.821 37.4021 474.632 36.3141 475.186 35.1194L481.779 38.5754C481.181 39.6847 480.306 40.9007 479.154 42.2234C478.045 43.5034 476.552 44.6127 474.674 45.5514C472.797 46.4474 470.408 46.8954 467.507 46.8954ZM459.762 26.4794H474.611C474.44 24.6447 473.693 23.1727 472.37 22.0634C471.09 20.9541 469.405 20.3994 467.314 20.3994C465.138 20.3994 463.41 20.9541 462.13 22.0634C460.85 23.1727 460.061 24.6447 459.762 26.4794Z" fill="white"/>
                    <path className='hero-descriptions stroke-2 stroke-[#31E1F7] fill-transparent md:text-[64px] text-[32px] ' d="M489.98 45.997V14.253H497.916V17.837H499.068C499.537 16.557 500.305 15.6183 501.372 15.021C502.481 14.4237 503.761 14.125 505.212 14.125H509.052V21.293H505.084C503.036 21.293 501.351 21.8477 500.028 22.957C498.705 24.0237 498.044 25.6877 498.044 27.949V45.997H489.98Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_3160_3041">
                    <rect width="510" height="64" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                


                

                <Link to={"/contactMe"}>
                  <button ref={heroButtonRef} className="Btn-Container ">
                    <span className="text">Contact Me</span>
                    <span className="icon-Container">
                      <svg
                        width="16"
                        height="19"
                        viewBox="0 0 16 19"
                        fill="nones"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                        <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
                      </svg>
                    </span>
                  </button>
                </Link>


               






              <div ref={heroButtonReff} class="absolute md:bottom-[32px] bottom-[16px] left-1/2 transform -translate-x-1/2">

              <button
              
                class="cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
              >
                <svg
                  class="w-5 h-5"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>

              </div>




                
                


                


                </div>
                
            </div>


            <div ref={aboutContentRef}className="BACK h-[100vh] w-full section sna-start sna-always   md:px-[80px] px-[32px] bg-gradient-to-b from-black/40 to-black/80 relative md:py-[32px] py-[16px] ">
                <div className="nav-arrows flex gap-3 mb-4">
                    <button 
                    onClick={() => navigateSkills(-1)}
                    disabled={currentSkillIndex === 0}
                    className="text-black md:w-10 md:h-10 w-8 h-8 rounded-full  bg-white bg-opacity-20 text-white flex items-center justify-center hover:bg-opacity-30 transition-all transform hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                    <i className="fa-solid fa-arrow-left z-10 text-black"></i>
                    </button>
                    <button 
                    onClick={() => navigateSkills(1)}
                    disabled={currentSkillIndex === skills.length - 1}
                    className="text-black  md:w-10 md:h-10 w-8 h-8  rounded-full bg-white bg-opacity-20 text-white flex items-center justify-center hover:bg-opacity-30 transition-all transform hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                    <i className="fa-solid fa-arrow-right z-10 text-black"></i>
                    </button>
                </div>

                {/* Dynamic Title */}
                <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-left text-white mb-6 leading-tight min-h-[120px]">
                    {skills[currentSkillIndex][1].title}
                </h1>
                
                {/* Cards Container */}
                <div 
                    className="skill-card relative h-54 mb-6 overflow-x-hidden  cursor-grab"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div 
                    ref={cardsRef}
                    className="flex gap-8"
                    style={{ transform: 'translateX(0px)', transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                    >
                    {skills.map(([key, skill], index) => (
                        <div
                        key={key}
                        onClick={() => selectSkill(index)}
                        onMouseEnter={() => handleCardHover(index, true)}
                        onMouseLeave={() => handleCardHover(index, false)}
                        className={`flex-shrink-0 w-72 h-48 ${skill.gradient} rounded-2xl p-0 overflow-hidden border-2 cursor-pointer flex flex-col items-center justify-center text-center ${
                            index === currentSkillIndex 
                            ? 'border-white border-opacity-60' 
                            : 'border-white border-opacity-20'
                        }`}
                        style={{
                            transform: index === currentSkillIndex ? 'scale(1.05)' : 'scale(1)',
                            transition: 'all 0.4s ease-out',
                             backgroundImage: `url(${skill.img})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center',
                        }}
                        >
                        <div className={`text-white z-10 bg-url(${skill.img}) bg-cover bg-center w-full h-full flex flex-col items-center justify-center p-4 rounded-2xl `}>
                           
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Card Indicators */}
                <div className="card-indicators flex gap-2 mb-8 justify-center md:justify-start">
                    {skills.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => selectSkill(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSkillIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                    />
                    ))}
                </div>
          
                {/* Dynamic Description */}
                <p ref={descriptionRef} className="text-white text-lg max-w-2xl mb-10 opacity-90 leading-relaxed min-h-[80px] flex items-start text-left">
                    {skills[currentSkillIndex][1].description}
                </p>

                <div className="about-button flex gap-5">
                   <Link to={`/${currentSkill}`}>
                    <button className="bg-white text-black px-10 py-4 rounded-3xl font-medium hover:bg-gray-100 transition-colors">
                        Open Page
                    </button>
                  </Link>
                </div>


                {/* Social Media Icons */}

  <ul className="example-2 absolute md:bottom-[32px] right-[32px] md:right-[80px] bottom-[16px]">
  <li class="icon-content">
      <a href="https://www.linkedin.com/in/adeolapo-joseph-5b0424273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" data-social="linkedin">
      <div class="filled"></div>
      <i class="fa-brands fa-linkedin-in example-2 bi bi-github z-10 md:text-[20px] text-[16px]"></i>
      </a>
      <div class="tooltip">LinkedIn</div>
  </li>
  <li class="icon-content">
    <a href="https://x.com/v_veratti" aria-label="GitHub" data-social="github">
      <div class="filled"></div>
      <i class="fa-brands fa-x-twitter example-2 bi bi-github z-10 md:text-[20px] text-[16px]"></i>
    </a>
    <div class="tooltip">X</div>
  </li>
  <li class="icon-content">
    <a
      href="https://www.instagram.com/"
      aria-label="Instagram"
      data-social="instagram"
    >
      <div class="filled"></div>
       <i className="fa-solid fa-envelope bi bi-instagram z-10  md:text-[20px] text-[16px] "></i>
    </a>
    <div class="tooltip">Gmail</div>
  </li>
  
</ul>



        </div>
            

        </div>
    )
}


export default  Home;


/* <span className="text-5xl mb-4 block">{skill.icon}</span>
                            <div className="text-xl font-bold mb-2">{skill.title.split(' ')[0]} {skill.title.split(' ')[1]}</div>
                            <div className="text-sm opacity-80">{skill.subtitle}</div> <p className="font-Space text-[#fff] -[16px] md:text-[20px] text-[16px] mb-4 leading-relaxed">I love turning ideas into interactive, visually engaging, and user-friendly products that make a real impact.</p>*/