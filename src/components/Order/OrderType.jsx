import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveryModal from "../DeliveryModal";


export default function OrderType() {
  const navigate = useNavigate();
  const [showDeliveryModal, setShowDeliveryModal] = useState(false); // ✅ لازم تعريف state

  const handlePickUp = () => {
    navigate('/order/menu?type=pickup');
  };

  const handleDelivery = () => {
    setShowDeliveryModal(true); // ✅ عرض المودال بدل التنقل المباشر
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 🔲 Black Bar */}
      <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">Crepe Up</div>

      </div>

      {/* 🖼️ Hero Image */}
      <div className="relative">
        <img
          src="/assets/FRONT.jpg"
          alt="Hero"
          className="w-full h-72 object-cover"
        />
      </div>
      {/* 📍 Map + PickUp/Delivery Section */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-8 shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Map */}
        <div className="w-full md:w-1/2 h-80 md:h-auto">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1610.5968563079505!2d-86.8011039!3d36.1618405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467674f9e6a91%3A0x9ed36a27636760ad!2sMidtown%20Foods!5e0!3m2!1sar!2seg!4v1754522639708!5m2!1sar!2segg&hl=en"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Info & Buttons */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Order Online</h2>
            <p className="text-gray-600 mb-6">Choose how you’d like to get your food.</p>

            <div className="space-y-4">
              <button
                onClick={handlePickUp}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded"
              >
                Pick Up
              </button>
              <button
                onClick={handleDelivery}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded"
              >
                Delivery
              </button>
            </div>

            {/* ✅ Delivery Modal */}
            <DeliveryModal
              isOpen={showDeliveryModal}
              onClose={() => setShowDeliveryModal(false)}
            />
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Address: <br />
              <span className="font-semibold">614 18th Ave N,Nashville,TN 37203</span>
            </p>
          </div>
        </div>
      </div>

      {/* ⭐ Popular Items */}
      <div className="mt-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Popular Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="text-lg font-semibold">CORDON BLEU</h4>
            <p className="text-sm text-gray-600">
            Chicken Tenders, Ham, Turkey, Green Pepper, Lettuce, Provolone, Mozzarella
            CORDON BLEU
            </p>
            <span className="text-red-600 font-bold block mt-1">$15.99</span>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="text-lg font-semibold">Crispy Overload</h4>
            <p className="text-sm text-gray-600">
            Chicken Tenders (Double Stack), Green Pepper, Olives, Lettuce, Mozzarella
            </p>
            <span className="text-red-600 font-bold block mt-1">$14.99</span>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="text-lg font-semibold">Tender-Dog</h4>
            <p className="text-sm text-gray-600">
            Chicken Tenders, Hot Dogs, Green Pepper, Olives, Lettuce, Mozzarella
            </p>
            <span className="text-red-600 font-bold block mt-1">$14.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}
