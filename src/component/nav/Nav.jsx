import React from "react";
import logo from '../../assets/Vector.svg'


 const Nav = () =>{

    
    return(
        <div className="w-full py-4 flex justify-left md:px-[80px] px-[32px] md:mb-[64px] mb-[150px] ">
             <img src={logo} alt="" className='md:h-[60px] md:w-[60px] w-[50px] h-[50px]  ' />
        </div>
    )
}


export default Nav