'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { MdFileDownload } from "react-icons/md";
function About() {
    const [click,setClick]=useState(0);
  const handleclick=()=>{
    setClick(1);
  }
  return (
    <div className='bg-[#25283D]'>
     <div className='  h-[130vh] lg:h-[100vh]
     flex justify-center items-center'  id="about" onClick={handleclick}  data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
     
      <div className="flex flex-col gap-[6rem] lg:gap-0 justify-between lg:flex-row w-[80%] items-center">
        <div className="text flex-1 flex flex-col gap-5 "
        >
      <h1 className='text-[25px] font-bold uppercase text-[#55e6a5] mb-[1rem] '>
        About me</h1>
      <h2 className='uppercase text-[15px]  lg:text-[25px] lg:leading-[3rem]
       text-white   '>
        seamiless  <span className='text-yellow-400'>expriance</span> </h2>
      <div className="mid text-white mb-4 flex justify-between items-center">
      <span className='w-[50px]  hidden lg:block h-[5px] bg-slate-400 rounded-sm'>
      </span>
      <p className='text-[10px] lg:text-[14px] text-slate-300 w-[80%]'>
        
      Hellow, my name is Mikiyas Negash ,and i am a passionate front-end web developer<br />

       <br />With my solid skills in Front End Technologies,my goal is to elevate user 
       engagment by delivering high-quality web experiences.  
       
      </p>
      </div>
     
      <button  className='px-[1rem] sm:px-[2rem]  hover:bg-transparent transition-all duration-200 py-[0.5rem] sm:py-[1rem]
            lg:text-[16px] text-[10px] w-[65%] font-bold uppercase bg-[#55e6a5] text-black hover:text-white flex 
            items-center  border border-[#55e6a5]  justify-center gap-5'>
             <MdFileDownload />
             <a href="/updated-cv.pdf" download> DOWNLOAD CV</a> </button>

        </div>
        <div className="lg:w-[300px] lg:h-[300px] lg:mx-[2rem]
         lg:mt-2  w-[250px] h-[250px] relative ">
        <Image 
        src='/Cropped_20241022_094725.jpg'
        alt='user'
        layout='fill'
        objectFit='contain'
        className='relative z-[11] w-[100%] h-[100%] object-contain' />
        <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default About
