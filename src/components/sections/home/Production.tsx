"use client";
import Image from "next/image";
import { MdHealthAndSafety } from "react-icons/md";
import { motion } from "framer-motion";

const cardItems = [
  {
    id: 1,
    image: "/images/research.png",
    title: "Research & Development",
    description: "Advanced laboratories for pharmaceutical innovation",
    subIcons: ["✓", "✓", "✓"],
    subTexts: ["Modern Equipment", "Expert Scientists", "Quality Control"]
  },
  {
    id: 2,
    image: "/images/eight.png",
    title: "Quality Control",
    description: "Rigorous testing and quality assurance protocols",
    subIcons: ["✓", "✓", "✓"],
    subTexts: ["Analytical Testing", "Stability Studies", "Batch Validation"]
  },
  {
    id: 3,
    image: "/images/manufactoring.png",
    title: "Manufacturing Excellence",
    description: "State-of-the-art production facilities, GMP compliant",
    subIcons: ["✓", "✓", "✓"],
    subTexts: ["GMP Compliance", "Automated Systems", "Clean Room Facilities"]
  }
]

const showCase = [
  {
    id: 1,
    title: "Quality Assurance",
    description: "Advanced quality control laboratories with state-of-the-art analytical equipment",
    image: "/images/third.png"
  },
  {
    id: 2,
    title: "Clean Room Technology",
    description: "Clean rooms for sterile manufacturing",
    image: "/images/first.png"
  }
];

type CardItemProps = {
  image: string;
  title: string;
  description: string;
  subIcons: string[];
  subTexts: string[];
};

type ShowCaseItemProps = {
  title: string;
  description: string;
  image: string;
};

const ProductCard = ({image, title, description, subIcons, subTexts}: CardItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
                 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow 
                 border border-gray-100 dark:border-gray-800"
    >
      <div className="relative h-52">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
        <ul className="space-y-3">
          {subIcons.map((icon, index) => (
            <motion.li 
              className="flex items-center gap-3" 
              key={index}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center 
                            bg-accentColor/10 text-accentColor
                            rotate-0 hover:rotate-12 transition-transform duration-300">
                {icon}
              </div>
              <span className="text-gray-600 dark:text-gray-400 text-sm
                             hover:text-accentColor transition-colors duration-300">
                {subTexts[index]}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const ShowCaseItem = ({title, description, image}: ShowCaseItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
                 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow 
                 border border-gray-100 dark:border-gray-800"
    >
      <div className="p-8">
        <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h4>
        <div className="relative h-64 
                      shadow-[0_4px_20px_rgba(0,0,0,0.12)] 
                      hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                      transition-shadow duration-300">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                        flex items-end p-6">
            <p className="text-white text-sm font-medium">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProductionSection = () => {
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
            <MdHealthAndSafety className="text-xl text-accentColor" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 
                           uppercase tracking-wider">
              Pharmaceutical Excellence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white 
                       text-center">
            Advanced Manufacturing & Rigorous Quality Control
          </h2>
        </motion.div>

        {/* Main Facility Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group mb-16 relative overflow-hidden
                     shadow-[0_8px_30px_rgba(0,0,0,0.15)] 
                     hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]
                     transition-all duration-500
                     border border-gray-100 dark:border-gray-800"
        >
          <Image
            src="/images/quaility.png"
            alt="Production Facility"
            width={1200}
            height={500}
            className="w-full object-cover h-[400px] transition-transform duration-700 
                     group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                         flex items-end opacity-90 group-hover:opacity-100 transition-opacity duration-500">
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-3 text-white">
              State-of-the-Art Facilities and Precision Testing for Pharmaceutical Excellence
              </h3>
              <p className="max-w-2xl text-white/90">
              Our EU-GMP-certified facilities utilize the latest automated systems to ensure precision, efficiency, and reliability in manufacturing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {cardItems.map((item, index) => (
            <ProductCard 
              key={item.id} 
              {...item} 
            />
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {showCase.map((item) => (
            <ShowCaseItem 
              key={item.id} 
              {...item} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductionSection;
