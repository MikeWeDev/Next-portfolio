'use client'
import {Link} from 'react-scroll'
import React, { useReducer, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
interface props{
  nav:boolean;
  open : ()=> void
}
function Nav({open,nav}:props) {
  return (
    <div className=' w-[100%]  fixed z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%] ">
        
         <h1 className='flex-[0.6] cursor-pointer text-[25px]
           text-white font-bold '>
            <Link to="hero"  spy={true} 
                  smooth={true} 
                 duration={500}
                 offset={-800}> 
                 Mike
            <span className='text-yellow-300' >Dev</span> </Link>
            </h1>
        
        
            <div className="nav-link hidden md:block" >
             <Link to="hero" 
                  spy={true} 
                  smooth={true} 
                  offset={-800}
                 duration={500}>Home</Link> </div>
            <div className='nav-link hidden md:block'>
              <Link to="about"
               spy={true} 
               smooth={true} 
               duration={500} >About</Link>
              </div>
            <div className='nav-link hidden md:block'>
              <Link to="skill"
               spy={true} 
               smooth={true} 
               duration={500} >Skill</Link>
              </div>
            <div className='nav-link hidden md:block'>
            <Link to="service"
             spy={true} 
             smooth={true}  
             duration={500} >Service</Link>
            </div>
            <div className='nav-link hidden md:block'>
            <Link to="project"
             spy={true} 
             smooth={true}  
             duration={500} >Project</Link>
            </div>
            <div className='nav-link hidden md:block'>
            <Link to="contact"
             spy={true} 
             smooth={true}  
             duration={500} >Contact</Link>
            </div>
            <div className=" flex justify-center items-center md:hidden  cursor-pointer text-yellow-300" 
             onClick={open}>
              <GiHamburgerMenu className='text-[25px]' />
              </div>
        </div>
    </div>
  )
}

export default Nav
