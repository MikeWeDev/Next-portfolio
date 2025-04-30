import {useState} from 'react'
import { CgCloseR } from "react-icons/cg";
import {Link} from 'react-scroll'
interface props {
    nav:boolean,
    closeNav: ()=>void,
}
function MobileNav({nav,closeNav}:props) {
  const navAnimation = nav ?'traslate-x-0' : "translate-x-[-100%]"
     return (
    <div  className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0
    bottom-0 z-[1000] bg-[#09101a]`}  >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
          
            <div className ='nav-link-mobile'>
                <Link to="hero" 
                 spy={true} 
                  smooth={true} 
                 duration={500}
                 offset={-800}
                 onClick={closeNav}> 
                 Home 
                 </Link>
                 </div>
            <div className='nav-link-mobile' >
            <Link to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={0}
                 duration={500}
                 onClick={closeNav}>About</Link>
               </div>


            <div className='nav-link-mobile' >
            <Link to="skill"
               spy={true} 
               smooth={true} 
               duration={500}
               onClick={closeNav} >Skill</Link>
           </div>
            <div className='nav-link-mobile' >
            <Link to="service"
             spy={true} 
             smooth={true}  
             duration={500}
             onClick={closeNav} >Service</Link>
              </div>
            <div className='nav-link-mobile' >
               <Link to="project"
             spy={true} 
             smooth={true}  
             duration={500}
             onClick={closeNav} >Project</Link></div>
            <div className='nav-link-mobile'  >
                <Link to="contact"
             spy={true} 
             smooth={true}  
             duration={500}
             onClick={closeNav} >Contact</Link></div>
           
            <div className="w-[2rem] absolute
             top-[2rem] right-[2rem]   h-[2rem] cursor-pointer text-black" 
           onClick={closeNav} >
               <CgCloseR className='text-[25px] text-yellow-500' />
              </div>
      </div>
    </div>
  )
}

export default MobileNav
