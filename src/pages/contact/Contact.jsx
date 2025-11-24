import React from "react";
import { useNavigate } from "react-router-dom";


    const Contact = () =>{

         const navigate = useNavigate();
            const goBack = () => {
                navigate(-1);
                console.log("going back");
            }

        return(
            <div className="w-full h-screen flex justify-center flex-col items-center text-white p-8 md:p-0 relative">
                <button onClick={goBack} className='mb-5 cursor-pointer  md:w-12 md:h-12 w-10 h-10 rounded-lg  bg-white  flex items-center justify-center  transition-all transform hover:scale-110 hover:bg-[#31E1F7] z-50 absolute top-[20px] left-[32px] md:top-[32px] md:left-[80px] '>
                    <i className="fa-solid fa-angle-left z-10 text-black md:text-[24px] text-[20px] "></i>
                </button>

                <h1 className="mb-4 text-4xl font-bold">Let Us Connect</h1>
                <p className="md:text-xl text-[14px] text-[#B0B0B0] md:mb-2  mb-8 ">Whether you have a project in mind or just want to say hi, I'd love to hear from you!</p>
                <div>
                    <div>
                        <p className="hidden text-xl text-[#B0B0B0] mb-8 md:block ">You can contact me at any of my socials</p>

                        
                            <ul className="example-2  md:bottom-[32px] right-[32px]">
                               
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
                                <li class="icon-content">
                                    <a
                                    href="https://github.com/Adeolapo"
                                    aria-label="github"
                                    data-social="github"
                                    >
                                    <div class="filled"></div>
                                  <i class="fa-brands fa-github example-2 bi bi-github z-10 md:text-[20px] text-[16px]"></i>
                                    </a>
                                    <div class="tooltip">GitHub</div>
                                </li>
                                
                            </ul>
                            
            
                    </div>
                    
                </div>
            </div>
        )
    }

export default Contact;