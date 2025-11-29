import React from "react";
import logo from '../../assets/Vector.svg'


 const Nav = () =>{

    
    return(
        <div className="w-full md:py-[4px] py-[4px] flex justify-left md:px-[80px] px-[32px] md:mb-[0px] mb-[0px] bg-transparent -[#343434] ">
             <img src={logo} alt="" className='md:h-[60px] md:w-[60px] w-[50px] h-[50px]  ' />
        </div>
    )
}


export default Nav