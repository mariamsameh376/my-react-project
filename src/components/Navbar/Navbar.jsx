// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GiForkKnifeSpoon } from "react-icons/gi";
import { HiHome, HiViewGrid, HiPhone, HiShoppingCart, HiKey, HiMenu, HiX,HiInformationCircle } from "react-icons/hi";
import logo from '../../assets/logo-crepeup.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#47160E] border-b-4 border-[#F79824] sticky top-0 z-50 font-qilka overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Crepe Up Logo" className="h-20 object-contain" />
              <div className="flex flex-col">
                <span className="text-[#F79824] text-2xl font-bold leading-none">CREPE UP</span>
                <span className="text-[#F5B219] text-xs tracking-wider">TASTE ON FIRE</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center text-[#F5B219] font-semibold">
              <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full transition ${isActive ? 'bg-[#F79824]/20 text-white' : 'hover:bg-[#F79824]/20'}`}>
                <HiHome />
                Home
              </NavLink>
              <NavLink to="/menu" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full transition ${isActive ? 'bg-[#F79824]/20 text-white' : 'hover:bg-[#F79824]/20'}`}>
                <HiViewGrid />
                Menu
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full transition ${isActive ? 'bg-[#F79824]/20 text-white' : 'hover:bg-[#F79824]/20'}`}>
                <HiPhone />
                Contact
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full transition ${isActive ? 'bg-[#F79824]/20 text-white' : 'hover:bg-[#F79824]/20'}`}>
              <HiInformationCircle />
                About Us
              </NavLink>
              <NavLink
  to="/orderr"
  className="flex items-center gap-2 bg-[#F79824] text-[#47160E] px-5 py-2 rounded-full shadow hover:bg-[#F5B219] transition"
>
  <GiForkKnifeSpoon />
  Order Online
</NavLink>

            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#F5B219] text-3xl">
                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#47160E] text-[#F5B219] px-6 py-4 space-y-4 font-semibold">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
              <HiHome />
              Home
            </NavLink>
            <NavLink to="/menu" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
              <HiViewGrid />
              Menu
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
              <HiPhone />
              Contact
            </NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
            <HiInformationCircle />
              About Us
            </NavLink>
            <a
      href="/order"
      className="flex items-center gap-2 bg-[#F79824] text-[#47160E] px-5 py-2 rounded-full shadow hover:bg-[#F5B219] transition w-fit"
    >
      <GiForkKnifeSpoon />
      Order Online
    </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
