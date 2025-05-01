'use client'
import { useEffect,useState } from 'react';
import Hero from './Component/Hero/Hero'
import About from './Component/About';
import Skills from './Component/Skills';
import Services from './Component/Services'
import Projects from './Component/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Contact2 from './Component/Contact/index'
import NavCol from './NavCol';
import Loading from './Component/loading/loading';
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     AOS.init({
          duration:1000,
          delay:200,
          once:true
        })
    const timeout = setTimeout(() => setLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  if(loading) return   <Loading />
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
