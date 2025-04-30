import './Style/index.css'
import {  faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faTypo3 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skills() {
  return (
    <div className='bg-[#121121]'>
  <div id='skill' className=' p-2 h-[145vh] md:h-[100vh] flex items-center justify-center '   data-aos="zoom-in"  data-aos-duration="700" data-aos-delay="400">
       <div className="con flex flex-col  md:flex-row justtify-between items-center w-[90%] h-[90%] text-white">
       
        <div className="text flex-1 flex flex-col gap-7">
        <h3 className="font-semi-bold text-[25px] text-yellow-400 uppercase"
        >my skills</h3>
        <h1 className="bold text-white text-[20px] md:text-[25px]">LETS EXPLORE POPULAR <br></br>
        SKILLS AND <span className='text-yellow-400'>EXPRIANCE</span> </h1>
        <p className="text-[12px] opacity-[0.5]" >
        I am highly proficient with a range of modern web development tools and frameworks.
         This includes deep experience with GitHub for version control and collaboration,
         as well as expertise in React, Next.js, TypeScript, Tailwind CSS, JavaScript, and Jest.
         I leverage this robust skill set to efficiently build high-quality, responsive, and performant web applications. 
        </p>
       <button  
        className="w-[50%] h-[24px] md:w-[40%] transition-all duration-200 py-6 hover:bg-yellow-400 border-none text-black flex justify-center items-center bg-[#55e6a5] border-[2px] text-[15px] uppercase font-bold ">LEARN MORE</button>
        </div>
        <div className="icon flex-1 mt-5 ">
        <div className="stage-cube-cont md:mt-[-100px] mt-[40px]" >
            <div className="cube-spiner">
            <div className="cube-spiner">
                <div className="face1">
                    <FontAwesomeIcon icon={faTypo3}
                    color="#007ACC"/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                </div>
               
            </div>
        </div>

        </div>
       </div>
    </div>
    </div>
    </div>
    
  )
}

export default Skills
