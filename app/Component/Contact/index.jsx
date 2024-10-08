'use client'
import Image from 'next/image'
import './contact2.scss'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact2(){
  const telegramUserName = '@Mikyyetklyelij';
  const linkdinUserName = 'https://www.linkedin.com/in/mikyas-negash-01b400263';
  const whatsapplink="https://wa.me/qr/3GK62EOD3WVQE1"
  const telegramLink = `https://t.me/${telegramUserName}`;


  const letters = ['S', 'A', 'Y', '-', 'H', 'Y']
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_uk7hzdl', 'template_0fnzi45', form.current, {
        publicKey: 're8UOJpBf_mKVPA23',
  
      })
      .then(
        () => {
          alert('SUCCESSFULLY SENT!');
          form.current.reset();
        },
        (error) => {
          alert('FAILED...', error.text);
        }
      );
  };

    return<>
    <div className="flex justify-center items-center flex-col" id='contact'>
    <h1 className="heading text-black"
        >
          {letters.map((i, index) => {
            return (
              <span key={index}  className="father">
                {i}
              </span>
            );
          })}
        </h1>
        <p className="paragraph text-black">
          IF YOU WANT TO CONTACT ME. PLEASE USE THE FOLLOWING ADDRESSES
        </p>
    </div>
   
    <div className="flex justify-center items-center w-[100vw] h-[85vh] md:h-[100vh] md:mb-5 ">
   
    <div className=" flex justify-center mt-10 md:mt-0   md:flex-row  items-start md:items-center w-[90%] h-[100%] md:gap-x-5 ">
       
         <div className="relative w-full h-[90%] flex-1  hidden md:block ">
          <Image
           src="/photo_2024-08-25_15-36-15.jpg"
           alt="user"
           layout="fill"
           className="absolute top-0 bottom-0 right-0 left-0  "
          />
          </div>

          <div className="md:flex-1 w-[90%]  md:h-[80%]  h-[60%]  ">
             
             <form action=""  ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-2 ">
               <div className=" w-full border border-black">
                 <input type="text" className=" w-full  p-2" placeholder="Your Name" />
               </div>
               <div className=" w-full border-black border">
                 <input type="text" className="w-full  p-2" placeholder="Your Email" required />
               </div>
               <div className=" w-full border border-black">
                 <input type="text" className="w-full p-2" placeholder="Subject"  />
               </div>
               <div className=" w-full border border-black ">
                 <textarea name="" id="" cols="  w-full m-2 p-2" rows="7" className="w-full p-2" placeholder="Message"></textarea>
               </div>
              
               <div className=" w-full">
                 <input type="submit" value="Send Message" className="btn m-2 bg-blue-500 hover:scale-95 hover:cursor-pointer text-white rounded-md py-3 px-5" />
               </div>
               <div className="social-link" >
              <a href={telegramLink} className="social">
                <FontAwesomeIcon className="linkt" icon={faTelegram} color="#" />
              </a >
              <a href={linkdinUserName} className="social" >
                <FontAwesomeIcon className="linkf" icon={faLinkedin} color="#"/>
              </a>
              <a href={whatsapplink} className="social">
                <FontAwesomeIcon className="linkv" icon={faWhatsapp}color="#"/>
              </a>
            </div>
             </form>
           
           
           </div>

        </div>
    </div>
      
    </>
      
}

export default Contact2