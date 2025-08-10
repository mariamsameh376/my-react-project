// src/pages/ContactUs.jsx
import React from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const ContactUs = () => {
  return (
    <div className="bg-[#47160E] text-white font-['Qilka_Bold'] pt-20 px-6 sm:px-10 lg:px-32 pb-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#F79824] mb-2">Contact Us</h1>
        <p className="text-white/80 text-lg">
          We’d love to hear from you! Whether you have questions, feedback, or just want to say hi.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section: Contact Info + Map */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MdLocationOn className="text-[#F5B219] text-3xl" />
            <div>
              <h3 className="text-xl text-[#F79824] mb-1">Our Address</h3>
              <p>614 18th Ave N, Nashville, TN 37203</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MdPhone className="text-[#F5B219] text-3xl" />
            <div>
              <h3 className="text-xl text-[#F79824] mb-1">Call Us</h3>
              <p>(615) 810 2558</p>
            </div>
          </div>
    

          {/* Map Box */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1610.5968563079505!2d-86.8011039!3d36.1618405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467674f9e6a91%3A0x9ed36a27636760ad!2sMidtown%20Foods!5e0!3m2!1sar!2seg!4v1754522639708!5m2!1sar!2segg"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-md"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form className="space-y-6 bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-md">
          <div>
            <label className="block mb-1 text-[#F79824]">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F79824]"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-[#F79824]">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F79824]"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-[#F79824]">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F79824]"
              placeholder="Type your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F79824] to-[#F5B219] text-[#47160E] py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
