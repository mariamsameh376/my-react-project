import React from 'react'
import MenuDate from '../../components/MenuDate/MenuDate'
import Navbar from '../../components/Navbar/Navbar'; // المسار حسب مكان Navbar فعليًا
import Footer from '../../components/Footer/Footer'; // نفس الشيء

const Menu= () => {
  return (
   <>
   <Navbar/>
   <MenuDate/>
   <Footer/>
   </>
  )
}


export default Menu
