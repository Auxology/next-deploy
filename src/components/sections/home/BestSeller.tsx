"use client";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { motion } from "framer-motion";

const cardItems = [
  {
    id: 1,
    image: "/images/product1.png",
    title: "Water for Injection",
    description: "Injection water, solvent for the preparation of dosage forms for injection",
    price: 199.99,
  },
  {
    id: 2,
    image: "/images/product2.png",
    title: "Paracetamol",
    description: "Paracetamol used in the treatment of fever and pain",
    price: 149.99,
  },
  {
    id: 3,
    image: "/images/product3.png",
    title: "Escoseptol Foam (Disinfectant)",
    description: "A drug in the form of a transparent colorless liquid with a characteristic alcohol smell",
    price: 199.99,
  }
];

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
}

const ProductCard = ({ image, title, description }: ProductCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group w-full h-full bg-white dark:bg-gray-900 
                 shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
                 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] 
                 transition-all duration-500 
                 border border-gray-100 dark:border-gray-800
                 hover:-translate-y-1"
    >
      <div className="relative h-[250px] overflow-hidden">
        <Image 
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover object-center transform 
                   transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 dark:bg-gray-900/95 
                      px-3 py-2 border-l-4 border-accentColor shadow-lg">
          <MdVerified className="text-accentColor text-lg" />
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Top Recommendation
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex flex-col h-[calc(100%-250px)]">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2">
          {title}
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <button 
            className="w-full bg-accentColor text-white font-semibold py-3 px-6
                     transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                     hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 
                     active:translate-y-0 transform-gpu overflow-hidden relative
                     after:absolute after:inset-0 after:bg-white/20 
                     after:translate-x-[-100%] hover:after:translate-x-[100%]
                     after:transition-transform after:duration-500"
          >
            <span className="flex items-center justify-center gap-3">
              Contact Sales
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="square" 
                  strokeLinejoin="miter" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const BestSellersSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 mb-6 bg-white dark:bg-gray-900 
                       px-4 py-2 border-l-4 border-accentColor w-fit mx-auto">
            <MdVerified className="text-xl text-accentColor" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 
                         uppercase tracking-wider">
              Featured Products
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white 
                       text-center">
            Recommended Products
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...item} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Looking for specific pharmaceutical products? Our complete catalog includes a wide range of 
            solutions for healthcare professionals.
          </p>
          <button 
            className="inline-flex items-center gap-3 bg-white dark:bg-gray-900 text-gray-900 
                     dark:text-white font-semibold py-3 px-8 border-2 border-gray-900 
                     dark:border-gray-700 transition-all duration-300
                     hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 
                     active:translate-y-0 transform-gpu"
          >
            View Full Catalog
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellersSection;
