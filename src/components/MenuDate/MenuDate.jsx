import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const menuData = {
  CREPES: {
    description: "(DOUBLE CHEESE FOR $1.99)",
    items: [
      { name: "CORDON BLEU", price: "$15.99", description: "Chicken Tenders, Ham, Turkey, Green Pepper, Lettuce, Provolone, Mozzarella" },
      { name: "Crispy Overload", price: "$14.99", description: "Chicken Tenders (Double Stack), Green Pepper, Olives, Lettuce, Mozzarella" },
      { name: "Tender-Dog", price: "$14.99", description: "Chicken Tenders, Hot Dogs, Green Pepper, Olives, Lettuce, Mozzarella" },
      { name: "CHICKEN SHESH", price: "$13.99", description: "Chargrilled Marinated Chicken, Green Pepper, Lettuce, Mozzarella" },
      { name: "KOFTA", price: "$13.99", description: "Egyptian Kabob, Green Pepper,Onion, Lettuce, Mozzarella" },
      { name: "Chicken Tenders", price: "$13.99", description: "Chicken Tenders, Green Pepper, Olives, Lettuce, Mozzarella" },
      { name: "Hot Dog", price: "$11.99", description: "Hot Dogs, Green Pepper, Olives,Lettuce, Mozzarella" }
    ]
  },

  SIDES: {
    description: "",
    items: [
      { name: "CHEESE TENDER (2)", price: "$5.99", },
      { name: "CHEESY FRIES", price: "$5.99", },
      { name: "FRIES", price: "$4.49", }
    ]
  },

  BEVERAGES: {
    description: "",
    items: [
      { name: "COKE PRODUCTS", price: "$2.99",  }
    ]
  },

  DESSERTS: {
    description: "",
    items: [
      { name: "TIRAMISU", price: "$7.99",  },
      { name: "CHEESECAKE", price: "$6.99",  },
      { name: "SAWABE", price: "$6.99", description: "Fried Semolina Dough" }
    ]
  }
};

const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const MenuItem = ({ name, price, description }) => {
  return (
    <li className="flex flex-col">
      <div className="flex justify-between items-center">
        <span>{name}</span>
        <span className="text-[#F79824]">${price.replace("$", "")}</span>
      </div>
      {description && (
        <p className="text-xs italic text-gray-600 mt-1">{description}</p>
      )}
    </li>
  );
};

const MenuPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 py-10 text-[#47160E]"
      style={{ backgroundImage: "url('/assets/MENU CARD-02.jpg')" }}
    >
      <div className="max-w-6xl mx-auto bg-white/70 rounded-3xl p-4 sm:p-6 md:p-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#47160E] font-['Qilka']">
          CREPE UP <span className="text-[#F79824]">MENU</span>
        </h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(menuData).map(([sectionName, sectionData], index) => (
            <AnimatedSection key={sectionName} delay={0.1 * (index + 1)}>
              <div className="hover:scale-[1.02] transition-transform duration-300 bg-white rounded-xl border border-[#F79824] overflow-hidden">
                <h2 className="text-xl font-bold bg-[#F79824] text-white px-4 py-2 font-['Qilka']">
                  {sectionName}
                </h2>
                <div className="p-4">
                  {sectionData.description && (
                    <p className="text-sm italic text-[#47160E]">{sectionData.description}</p>
                  )}
                  <ul className="mt-2 space-y-2 text-sm sm:text-base">
                    {sectionData.items.map((item, idx) => (
                      <MenuItem
                        key={idx}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
