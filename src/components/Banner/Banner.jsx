// src/components/Banner.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* صورة الخلفية */}
      <img
        src="/assets/CrepeUp_Hero_2880x2304.jpg"
        alt="Karmooz Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* طبقة التظليل */}
      <div className="absolute inset-0 bg-[#221101]/60 z-10" />

      {/* المحتوى */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-12">
        <div className="text-center max-w-6xl mx-auto">
          <span className="text-[#F79824] font-montserrat text-lg uppercase tracking-wider">
            Welcome to
          </span>

          <h1 className="text-[#F79824] text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat mt-2">
          CREPE UP
          </h1>



          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              to="/menu"
              className="bg-[#F9B93E] hover:bg-[#DD8E3E] text-[#221101] px-6 py-3 rounded-full font-medium transition"
            >
              View Menu
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
