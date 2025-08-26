import React, { useState } from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const ContactUs = () => {
  // 1. تعريف state لتخزين بيانات الفورم
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // حالة الإرسال

  // 2. دالة تحديث بيانات الفورم عند الكتابة
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. دالة إرسال البيانات عند الضغط على زر الإرسال
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://contact-backend-sooty.vercel.app/send-email', {  // تأكد من عنوان الباك إند الصحيح
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // تفريغ الفورم بعد الإرسال
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
      console.error(error);
    }
  };

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
              <p>614 18th Ave N, Nashville, TN 37203</p> {/* عدل العنوان حسب المطلوب */}
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MdPhone className="text-[#F5B219] text-3xl" />
            <div>
              <h3 className="text-xl text-[#F79824] mb-1">Call Us</h3>
              <p>(615) 810 2558</p> {/* عدل رقم الهاتف حسب المطلوب */}
            </div>
          </div>

          {/* Map Box */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1610.5968563079505!2d-86.8011039!3d36.1618405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467674f9e6a91%3A0x9ed36a27636760ad!2sMidtown%20Foods!5e0!3m2!1sar!2seg!4v1754522639708!5m2!1sar!2segg&hl=en"
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
        <form
          onSubmit={handleSubmit} // ربط حدث الإرسال
          className="space-y-6 bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-md"
        >
          <div>
            <label className="block mb-1 text-[#F79824]">Name</label>
            <input
              type="text"
              name="name" // مهم جدا لعمل handleChange
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F79824]"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-[#F79824]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F79824]"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-[#F79824]">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
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
          {/* عرض حالة الإرسال */}
          {status && <p className="text-center mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
