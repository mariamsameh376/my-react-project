import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-[#47160E] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-impact tracking-wide mb-4">ABOUT US</h2>

        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-[#d99058] rounded-full mx-1" />
          <div className="w-3 h-1 bg-[#d99058] rounded-full mx-1" />
          <div className="w-16 h-1 bg-[#d99058] rounded-full mx-1" />
        </div>

        <div className="text-left space-y-12 px-4 md:px-0">
          {/* Mission Statement */}
          <div>
            <h3 className="text-2xl text-[#F79824] font-bold mb-2">MISSION STATEMENT:</h3>
            <p className="text-gray-300 leading-relaxed">
            At Oota, we bring the vibrant, authentic flavors of Egyptian street food to Nashville, honoring its rich legacy as the foundation of Mediterranean cuisine. While many know Mediterranean food through its twisted, adapted versions, we proudly showcase the original tastes, spices, and traditions that have influenced the region for millennia.  

Our mission is to educate and delight our guests with bold, time-honored recipes—from crispy falafel succulent hawawshi and aromatic baba ghanouj—all crafted with the freshest ingredients and unwavering authenticity. We celebrate Egypt’s culinary heritage, inviting you to experience the true roots of Mediterranean street food, one unforgettable bite at a time.  

Welcome to where it all began.
            </p>
          </div>

          {/* Story */}
          <div>
            <h3 className="text-2xl text-[#F79824] font-bold mb-2">STORY:</h3>
            <p className="text-gray-300 leading-relaxed">
            From the bustling streets of Cairo to the heart of Nashville, Oota is a love letter to Egypt’s culinary soul—crafted by two lifelong friends on a mission to share the true taste of home.

A real estate visionary and a biotechnologist with a passion for tradition. Though their careers took different paths, their shared childhood memories of vibrant spice markets, sizzling street-side grills, and generations of family recipes bound them together. Years later, they realized something was missing in Nashville’s food scene: the real, unfiltered flavors of Egyptian street food—the foundation of Mediterranean cuisine. Driven by their professional backgrounds, they meticulously pursued the genuine tastes, recipes and quality — with zero compromise!

At Oota, we don’t just serve food—we share a story. One of spice-laden alleyways, generations-old recipes, and the vibrant culture that shaped an entire region. While others adapt, we stay true to the original tastes that have traveled through time. Every bite is an invitation to explore Egypt’s rich legacy, crafted with the freshest ingredients and the warmth of two friends who believe food should be as genuine as the people behind it.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
