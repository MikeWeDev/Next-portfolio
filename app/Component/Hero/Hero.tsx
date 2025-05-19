import React from 'react';
import Image from 'next/image';
import SimpleParticles from './Particle';
import ExampleComponent from '../TextEffect';
import { Link } from 'react-scroll';
import { MdFileDownload } from 'react-icons/md';
import {
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaWhatsappSquare
} from 'react-icons/fa';

function Hero() {
  const telegramUserName = 'Mikyyetklyelij';
  const telegramLink = `https://t.me/${telegramUserName}`;
  const linkedinLink = 'https://www.linkedin.com/in/mikyas-negash-01b400263';
  const githubLink = 'https://github.com/Mikyyetklyelij';
  const whatsappLink = 'https://wa.me/qr/3GK62EOD3WVQE1';

  return (
    <section className="relative bg-[#0a0f26] min-h-screen mt-10 flex items-center justify-center overflow-hidden text-white">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <SimpleParticles />
      </div>

      {/* Content Container */}
      <div
        id="hero"
        className="relative z-10 w-[90%] px-6 py-16 flex flex-col lg:flex-row items-center gap-12"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Mikiyas</span>
          </h1>

          <div className="text-2xl font-medium text-gray-300 animate-pulse">
            <ExampleComponent />
          </div>

          <p className="text-base sm:text-lg text-gray-300 max-w-lg bg-white/5 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
            Passionate <span className="text-indigo-400 font-semibold">Front-end Web Developer</span> &amp; 
            <span className="text-indigo-400 font-semibold"> 4th Year CS Student</span> specializing in 
            <span className="text-indigo-400 font-semibold"> Next.js</span>, 
            <span className="text-indigo-400 font-semibold"> React.js</span>, 
            <span className="text-indigo-400 font-semibold"> TypeScript</span>, 
            <span className="text-indigo-400 font-semibold"> Tailwind CSS</span> &amp; 
            <span className="text-indigo-400 font-semibold"> Jest</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="/updated-cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 font-semibold uppercase bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:opacity-90 transition"
            >
              <MdFileDownload size={20} />
              Download CV
            </a>
            <Link
              to="contact"
              smooth
              spy
              className="flex items-center justify-center px-6 py-3 font-semibold uppercase border-2 border-indigo-500 rounded-xl hover:bg-indigo-500 hover:text-white transition"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2 border-2 border-[#0A66C2] rounded-full hover:scale-110 transition"
            >
              <FaLinkedin size={24} className="text-[#0A66C2]" />
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2 border-2 border-[#f59e0b] rounded-full hover:scale-110 transition"
            >
              <FaGithub size={24} className="text-[#f59e0b]" />
            </a>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              className="p-2 border-2 border-[#0088CC] rounded-full hover:scale-110 transition"
            >
              <FaTelegramPlane size={24} className="text-[#0088CC]" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="p-2 border-2 border-[#25D366] rounded-full hover:scale-110 transition"
            >
              <FaWhatsappSquare size={24} className="text-[#25D366]" />
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 hover:scale-105 transition-transform duration-700">
            <Image
              src="/home-right.png"
              alt="Mikiyas Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
