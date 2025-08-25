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
            At Crepe Up, we’re reimagining the crepe experience—one bold, savory creation at a time. Gone are the predictable sweet fillings; instead, we craft unexpected, globally inspired flavors that challenge tradition and delight the senses. Using premium, locally sourced ingredients, we fold innovation into every bite, proving that crepes can be adventurous, satisfying, and anything but ordinary. Whether you’re a crepe skeptic or a culinary explorer, we invite you to taste the unexpected at Crepe Up—where every dish is a delicious departure from the norm. 
            <br /><br />
            <span className="italic text-lg text-[#ffffff] mt-2">Prepare to crepe up..</span>
            </p>
          
          </div>
 

  
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
