import './Style/index.css'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiJest } from "react-icons/si";
function Services() {
  return (
    <div className='bg-[#0e1538]'>
    <div id="service" className="flex justify-center items-center flex-col  lg:h-[120vh] h-[220vh] pb-5 "
    data-aos="zoom-in"   data-aos-duration="700" data-aos-delay="400">
        <h1 className="text-[#55e6a5]   text-[35px] font-bold pb-5"
       >Services</h1>
        <p className="text-white opacity-[0.6] lg:text-[16px] text-[12px] pb-2 w-[80%]">
          HEY, as a talented frontend devloper i will provide quality web expriance and efficent websites by using React.js ,
          Next.js and additionaly i will provide Testing by react testing software called Jest.
          </p>

        <div className="con lg:h-[50%] h-[80%]  w-[95%] border-2px border-yellow-400 flex lg:flex-row flex-col
         items-center justify-between mt-5 lg:mt-10 gap-y-5">
          {data.map((item,index)=>(
          <div key={index} className="box  lg:w-[30%] w-[70%]  h-[100%] bg-black flex 
          flex-col justify-between items-center 
        ">
          <div className=" text-white lg:text-[23px] text-[18px]  w-full h-[40%] flex items-center
           justify-center gap-5 z-10">
            <div className=""> {item.icons}</div>
            <div className=""> {item.title}</div>
          </div>
          <div className=" text-white md:text-[90%]  text-[80%]  opacity-[0.5] pl-2 w-[90%]
           h-[40%]  z-10">
          {item.discription}
          </div>
         
          <div className="z-10 text-white text-[20px]  w-full h-[20%] flex items-center justify-center">
          <button className='px-[1rem] sm:px-[2rem] hover:bg-[#55e6a5] transition-all duration-200 py-[0.5rem] sm:py-[1rem]
             lg:text-[14px] text-[10px] font-bold uppercase animate-ease border-solid border-[#55e6a5] border-[2px] bg-transparent
             hover:text-black text-white  flex items-center  hover:scale-95'>
              LEARN MORE</button>
          </div>
       </div>
          ))}
        
        </div>
    </div>
    </div>
   
  )
}

export default Services

const data=[
  {
    title:"React.js dev",
    icons:< FaReact color="#5ED4F4" />,
    discription:`AS a react.js dev i will give all the advatage react.js gives like efficency,simplcity and a good documentation with 
    reusable components for later use.`,
    button:"reacd more"
  },
  {
    title:"Next.js dev",
    icons:<RiNextjsFill  color='#00000' />,
    discription:`AS a Next.js dev i will give all new feature next.js come with which is optimazing performance by diffrent ways 
    also helps to better SEO optimezation ` ,
    button:"reacd more"
  },
  {
    title:"Test With Jest",
    icons:<SiJest />,
    discription:`As a jest tester i will make sure the code that is written i react or next doesn't have a bugs or even if that
    code is written in a way to perform better`,
    button:"reacd more"
  }
];