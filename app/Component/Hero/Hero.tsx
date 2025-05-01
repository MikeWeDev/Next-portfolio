import React from 'react';
import Image from 'next/image';
import SimpleParticles from './Particle';
import ExampleComponent from '../TextEffect';
import { Link } from 'react-scroll';
import { MdFileDownload } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaTelegramPlane, FaWhatsappSquare } from 'react-icons/fa';

function Hero() {
  const telegramUserName = 'Mikyyetklyelij';
  const telegramLink = `https://t.me/${telegramUserName}`;
  const linkedinLink = 'https://www.linkedin.com/in/mikyas-negash-01b400263';
  const githubLink = 'https://github.com/Mikyyetklyelij';
  const whatsappLink = 'https://wa.me/qr/3GK62EOD3WVQE1';

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] animate-gradient-x min-h-screen flex items-center justify-center text-white font-sans">
      <div
        id="hero"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="relative overflow-hidden mt-12 sm:mt-16 w-full min-h-[100vh] sm:h-[145vh] lg:h-[88vh] flex justify-center items-center py-8 sm:py-12 lg:py-10"
      >
        <div className="absolute inset-0 -z-10">
          <SimpleParticles />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full gap-8 z-10 px-4 sm:px-8 lg:px-16">
          {/* Left Section */}
          <div className="text-white flex flex-col flex-1 gap-y-6 px-4 lg:px-10 py-6">
            {/* Name and Title */}
            <h1 className="font-serif font-extrabold text-4xl leading-snug tracking-tight text-center sm:text-left">
              Hi, I AM <span className="text-[#60a5fa]">MIKIYAS</span>
            </h1>

            {/* Typing Component */}
            <div className="text-xl lg:text-2xl font-medium text-gray-300 animate-pulse text-center sm:text-left">
              <ExampleComponent />
            </div>

            {/* Bio Description */}
            <p className="text-sm lg:text-base text-gray-300 max-w-2xl backdrop-blur-sm bg-white/5 p-3 rounded-lg shadow-md mx-auto sm:mx-0">
              Passionate <span className="text-[#60a5fa] font-semibold">Front-end Web Developer</span> and
              <span className="text-[#60a5fa] font-semibold"> 4th Year CS Student at AAU</span>. I specialize in
              <span className="text-[#60a5fa] font-semibold"> Next.js</span>,
              <span className="text-[#60a5fa] font-semibold"> React.js</span>,
              <span className="text-[#60a5fa] font-semibold"> TypeScript</span>,
              <span className="text-[#60a5fa] font-semibold"> Tailwind CSS</span>, and
              <span className="text-[#60a5fa] font-semibold"> Jest</span>. Turning ideas into elegant web experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-3 justify-center w-full">
              <a
                href="/updated-cv.pdf"
                download
                className="flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-2.5 text-sm sm:text-base font-semibold uppercase bg-[#60a5fa] text-white rounded-lg hover:bg-transparent border-2 border-[#60a5fa] hover:text-[#60a5fa] transition-all duration-300"
              >
                <MdFileDownload size={18} />
                Download CV
              </a>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                className="cursor-pointer flex items-center justify-center w-full sm:w-auto px-5 py-2.5 text-sm sm:text-base font-semibold uppercase border-2 border-[#60a5fa] text-white hover:bg-[#60a5fa] hover:text-white rounded-lg transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-5 justify-start">
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="text-[#0A66C2] hover:scale-110 transition-transform duration-200 rounded-full border-2 border-[#0A66C2] p-2"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="text-[#f59e0b] hover:scale-110 transition-transform duration-200 rounded-full border-2 border-[#f59e0b] p-2"
              >
                <FaGithub size={26} />
              </a>
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
                className="text-[#0088CC] hover:scale-110 transition-transform duration-200 rounded-full border-2 border-[#0088CC] p-2"
              >
                <FaTelegramPlane size={26} />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="text-[#25D366] hover:scale-110 transition-transform duration-200 rounded-full border-2 border-[#25D366] p-2"
              >
                <FaWhatsappSquare size={26} />
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex-1 relative lg:h-[80vh] h-[60vh] lg:w-[50vw] w-[70vw] mb-6 sm:mb-0">
            <Image
              src="/home-right.png"
              alt="Mike's Profile"
              layout="fill"
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
