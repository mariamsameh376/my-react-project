import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // ✅ إضافة التوستر

import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';



import About from "./pages/About/About";
import OrderType from './components/Order/OrderType';
import PickupMenu from './pages/PickupMenu';
import Orderr from './pages/Orderr/Orderr';

const App = () => {
  return (
    <>
      {/* ✅ هذا يجعل إشعارات التوست تظهر في أي صفحة */}
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      
        <Route path='/orderr' element={<Orderr />} />
        
        <Route path="/order" element={<OrderType />} />
        <Route path="/order/menu" element={<PickupMenu />} />
      </Routes>
    </>
  );
};

export default App;
