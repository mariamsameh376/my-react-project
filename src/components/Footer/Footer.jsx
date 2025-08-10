import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="relative bg-[#47160E] border-t-8 border-[#F79824]/30 text-white font-['Qilka_Bold'] pt-16 pb-10 px-6 sm:px-10 md:px-20 mt-16">

      {/* خط علوي مزخرف */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
        <div className="h-[6px] bg-gradient-to-r from-transparent via-[#F79824]/50 to-transparent shadow-[0_0_20px] shadow-[#F5B219]/30" />
      </div>

      {/* المحتوى */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm relative z-10">

        {/* عن المطعم */}
        <div className="text-center sm:text-left">
          <h2 className="text-[#F5B219] font-semibold mb-4 tracking-wide text-lg">ABOUT CREPE UP</h2>
          <p className="text-white/80 leading-relaxed">
          Crepe Up offers you delicious crepes and snacks with a modern Egyptian twist.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-5">
            {[ FaFacebookF, FaInstagram].map((Icon, index) => (
              <div
                key={index}
                className="bg-[#F79824] text-[#47160E] p-2 rounded-full hover:bg-white hover:text-[#47160E] transition text-lg"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* لوجو */}
        <div className="flex flex-col items-center justify-center text-center relative group">
          <div className="absolute -inset-4 bg-[#F79824]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img src="/logo-crepeup.png" alt="Crepe Up Logo" className="w-32 sm:w-36 object-contain mb-2 hover:rotate-3 transition" />
          <h3 className="text-3xl text-[#F5B219] font-bold tracking-wide">CREPE</h3>
          <p className="text-xl text-white -mt-1 tracking-wide">UP</p>

        </div>

        {/* التواصل */}
        <div className="text-center sm:text-left">
          <h2 className="text-[#F5B219] font-semibold mb-4 tracking-wide text-lg">CONTACT US</h2>
          <ul className="text-white/80 space-y-4">
            <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 items-center justify-center sm:justify-start">
              <MdLocationOn className="text-xl text-[#F79824]" />
              <span>614 18th Ave N, Nashville, TN 37203</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <MdPhone className="text-xl text-[#F79824]" />
              <span>(615) 810 2558</span>
            </li>

            
          </ul>
        </div>
      </div>

      {/* السطر الأخير */}
      <div className="mt-10 border-t border-[#F79824]/30 pt-4 text-center text-white/70 text-xs tracking-wide">
        <span>© 2025 Crepe Up. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
