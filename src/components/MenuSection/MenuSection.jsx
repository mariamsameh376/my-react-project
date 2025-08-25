import React from 'react';
import { Link } from 'react-router-dom';

const MenuSection = () => {
  const egyptianDishes = [
    {
      name: "Chicken Tender",
      image: "/assets/CrepeUp_ChickenTender_2880x2304.jpg",
      price: "$13.99"
    },
    {
      name: "Chicken Shesh",
      image: "/assets/CrepeUp_ChickenShesh_2880x2304.jpg",
      price: "$13.99"
    },
    {
      name: "Kofta",
      image: "/assets/CrepeUp_Kofta_2880x2304.jpg",
      price: "$13.99"
    },

  ];

  return (
    <div className="font-sans max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#F79824] mb-4">Crepes</h2>
        
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {egyptianDishes.map((dish, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={dish.image} 
                alt={dish.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-[#F79824]">{dish.name}</h3>
                <span className="bg-[#F79824] text-white px-3 py-1 rounded-full text-sm font-bold">
                  {dish.price}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{dish.description}</p>

            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link 
          to="/Menu"
          className="inline-block bg-[#F79824] hover:bg-[#F79824] text-white px-8 py-3 rounded-full font-bold text-lg transition-colors"
        >
          View Our Full Menu
        </Link>
      </div>
    </div>
  );
};

export default MenuSection;
