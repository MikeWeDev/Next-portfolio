'use client'
import { useEffect } from 'react';
import Hero from './Component/Hero/Hero'
import About from './Component/About';
import Skills from './Component/Skills';
import Services from './Component/Services'
import Projects from './Component/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Contact2 from './Component/Contact/index'
import NavCol from './NavCol';
//import expriance from './Component/expriance/expriance';

export default function Render() {
 useEffect(()=>{
    AOS.init({
      duration:1000,
      delay:200,
      once:true
    })
  },[])
 
  return (

    <div className="overflow-x-hidden" > 
    <NavCol />
    <Hero />
    <About />
  {/*  <expriance /> */} 
    <Skills />
    <Services />
    <Projects />
     {/*--<Contact />-- */} 
    <Contact2 />
    </div>
  ); 
}
