import React from "react";
import { useNavigate } from "react-router-dom";


    const Contact = () =>{

         const navigate = useNavigate();
            const goBack = () => {
                navigate(-1);
                console.log("going back");
            }

        return(
            <div className="w-full h-screen flex justify-center flex-col items-center text-white p-8 md:p-0 ">
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
                                    <a
                                    href="https://www.linkedin.com/in/adeolapo-joseph-5b0424273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    aria-label="LinkedIn"
                                    data-social="linkedin"
                                    >
                                    <div class="filled"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-linkedin"
                                        viewBox="0 0 16 16"
                                        xml:space="preserve"
                                    >
                                        <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                                        fill="currentColor"
                                        ></path>
                                    </svg>
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