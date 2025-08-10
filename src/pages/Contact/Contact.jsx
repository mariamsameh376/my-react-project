import React from 'react'
import Navbar from '../../components/Navbar/Navbar'; // المسار حسب مكان Navbar فعليًا
import Footer from '../../components/Footer/Footer'; // نفس الشيء
import ContactUs from'../../components/ContactUS/ContactUS';

const Contact = () => {
    return (
        <>
        <Navbar/>
        <ContactUs/>
        <Footer/>
        </>
       )
     }
     
export default Contact
