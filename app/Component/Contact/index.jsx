'use client';
import React from 'react';
import {
  faTelegram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EMAIL = 'youremail@example.com'; // ← replace with your email
const telegramUserName = 'Mikyyetklyelij';
const telegramLink = `https://t.me/${telegramUserName}`;
const linkedinLink = 'https://www.linkedin.com/in/mikyas-negash-01b400263';
const whatsappLink = 'https://wa.me/qr/3GK62EOD3WVQE1';

export default function Contact2() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-900 text-gray-100 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-4 tracking-wider">GET IN TOUCH</h2>
      <p className="text-center max-w-xl mb-8 px-4">
        Click the button below to send me an email directly, or connect via social
        media.
      </p>

      <a
        href={`mailto:${EMAIL}`}
        className="mb-12 px-8 py-4 bg-blue-600 hover:bg-blue-500 transition rounded-full text-lg font-semibold shadow-lg"
      >
        ✉️ Email Me
      </a>

      <div className="flex space-x-8">
        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#0088CC] rounded-full hover:scale-110 transform transition"
        >
          <FontAwesomeIcon icon={faTelegram} size="2x" className="text-white" />
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#0A66C2] rounded-full hover:scale-110 transform transition"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white" />
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#25D366] rounded-full hover:scale-110 transform transition"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-white" />
        </a>
      </div>
    </section>
  );
}
