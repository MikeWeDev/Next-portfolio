import React from 'react'
import Image from 'next/image'
import Particle from './Particle'
import ExampleComponent from '../TextEffect'
import {Link} from 'react-scroll'
import { MdFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
function Hero() {
  const telegramUserName = '@Mikyyetklyelij';
  const telegramLink = `https://t.me/${telegramUserName}`;
  const linkdinUserName = 'https://www.linkedin.com/in/mikyas-negash-01b400263';
  const gitublink="https://github.com/dashboard";
  const whatsapplink="https://wa.me/qr/3GK62EOD3WVQE1"

  return (
    <div  className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] animate-gradient-x min-h-screen flex items-center justify-center" >
  <div id="hero "   data-aos="zoom-in"  data-aos-duration="1000" data-aos-delay="400"
     className="overflow-hidden mt-[12vh] bg-center h-[145vh] lg:h-[88vh] flex justify-center items-center">
        <Particle   />
     <div className="con mt-10 flex lg:flex-row flex-col justify-center
     w-[95%] items-center h-[90%] lg:h-auto gap-3 ">
      
      <div className="ml-[20px] lg:ml-2  text-white
       flex flex-col flex-1  gap-y-5  " >
        <h1 className='text-bold text-[40px] font-serif ' >HY , I AM
         <span className='text-[#3e64ff]' > MIKE</span></h1>
        <h2 className='textarea '>
        <ExampleComponent />
          </h2>
      
        <p className='text-[11px] lg:text-[15px] font-bold  font-serif  text-white'>
                Passionate Front-end Web Devloper and 4th Year Cs Student at Aau . I specialize in utilizing the following tech stacks:
               Next.js | React.js | Typescript | Tailiwind css And Jest For Testing . Transforming Ideas Into 
               Seamless Web Expriance.
             
                 </p>
          <div className="flex justify-start gap-10 items-center 
       ">
            <button  
            className='px-[1rem] sm:px-[2rem]  hover:bg-transparent transition-all duration-200 py-[0.5rem] sm:py-[1rem]
            lg:text-[16px] text-[10px]  font-bold uppercase bg-[#3e64ff] text-white hover:text-black rounded-xl  flex 
            items-center  border-[2px] border-[#3e64ff]  justify-between gap-5 hover:scale-95'>
             <MdFileDownload />
             <a href="/updated-cv.pdf" download> DOWNLOAD CV</a> </button>
            <button  
            id="hero" className='px-[1rem] sm:px-[2rem] hover:bg-[#3e64ff] rounded-xl transition-all duration-200 py-[0.5rem] sm:py-[1rem]
             lg:text-[16px] text-[10px] font-bold uppercase animate-ease border-solid border-[#3e64ff] border-[2px] bg-transparent
             hover:text-white text-black  flex items-center  hover:scale-95'>
             <Link to="contact" spy={true} 
               smooth={true} >CONTACT ME</Link> 
                </button>
          </div>
          <div className="social-links flex justify-start mt-[14px]  lg:mt-[0.5rem] gap-5 items-center" >
            <div   className=' text-[16px]  rounded-lg flex justify-center text-[#0A66C2]  items-center border-solid 
            border-[#0A66C2] border-[2px] p-[4px] lg:P-1  cursor-pointer  
             hover:scale-[1.2] transition-all duration-200 '>
            <a href={linkdinUserName}><FaLinkedin/></a>
           
            </div>
           <div  className=' text-[16px]  rounded-lg flex justify-center text-[orange]    items-center border-solid 
            border-[orange] border-[2px] p-[4px] lg:P-1  cursor-pointer  hover:scale-[1.2] transition-all duration-200'>
             <a href={gitublink}> <FaGithub /></a>
             
              </div>
              <div  className=' text-[16px]  rounded-lg flex justify-center text-[#0088CC] items-center border-solid 
            border-[#0088CC] border-[2px]    p-[4px] lg:P-1  cursor-pointer  hover:scale-[1.2] transition-all duration-200'>
              <a  href={telegramLink}> <FaTelegramPlane /></a>
             
              </div>
              <div  className=' text-[16px]  rounded-lg flex justify-center text-[#25D366] items-center border-solid 
            border-[#25D366] border-[2px] p-[4px]    cursor-pointer  hover:scale-[1.2] transition-all duration-200'>
              <a href={whatsapplink}> <FaWhatsappSquare /></a>
            
              </div>
           
          </div>
      </div>
     
     <div className="flex-1 relative  lg:h-[80vh] h-[70vh] lg:w-[50vw] w-[85vw]" >
        <Image 
        src='/home-right.png'
        alt='user'
        layout='fill'
        className='rounded-full h-[100%] lg:h-[90%] ' />
      </div>
     </div>
    </div>
    </div>
   

  )
}

export default Hero
