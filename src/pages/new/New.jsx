import Star from "../../component/background/Star";
import React from "react";


const New = () => { 
    return (
        <div className="h-[100vh] w-full px-8 flex flex-col    ">
            <Star />
            <h1 className="md:text-2xl text-[16px] text-[#fff] mb-2 md:mb-4">Hi there, I'm</h1>
            <h2 className="text-[40px] md:text-7xl font-bold text-[#31E1F7] mb-2 md:mb-4  ">Adeolapo Joseph</h2>
            <h3 className="text-[#fff] mb-2 md:mb-6 text-[16px]">A Frontend Developer, UI/UX Designer and backend Developer </h3>
        </div>
    )
}

export default New;