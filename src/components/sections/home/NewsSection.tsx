"use client";
import Image from "next/image";
import { BsNewspaper } from "react-icons/bs";
import { motion } from "framer-motion";

const newsItems = [
  {
    image: "/images/news1.png",
    title: "Participation in Health Day",
    description: "Today ESKOM, together with the Ministry of Health of the Stavropol Territory...",
    date: "Feb 06, 2024"
  },
  {
    image: "/images/news2.png",
    title: "In Russia",
    description: "The international exhibition-conference InRussia was held in Stavropol...",
    date: "Oct 28, 2023"
  },
  {
    image: "/images/admin-ajax.php.png",
    title: "Community Work",
    description: "On September 30, a city community work day took place in Stavropol...",
    date: "Sep 30, 2023"
  }
];

type CardItemProps = {
  image: string;
  title: string;
  description: string;
  date: string;
};

const CardItem = ({image, title, description, date}: CardItemProps) => {
  return (
    <div className="group h-full bg-white dark:bg-gray-900 
                    shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
                    hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] 
                    transition-all duration-500 hover:-translate-y-1
                    border border-gray-100 dark:border-gray-800">
      <div className="relative h-[250px] overflow-hidden">
        <Image 
          width={400} 
          height={300} 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 
                   group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6 sm:p-8 flex flex-col">
        <span className="text-accentColor dark:text-accentColor/90 font-medium text-sm mb-3">
          {date}
        </span>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 min-h-[3.5rem]">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
        <button 
          className="group inline-flex items-center gap-2 text-accentColor dark:text-accentColor/90 
                   font-semibold mt-auto relative
                   after:absolute after:bottom-0 after:left-0 after:w-0 
                   after:h-0.5 after:bg-accentColor
                   hover:after:w-full after:transition-all after:duration-300"
        >
          Read more
          <svg 
            className="w-5 h-5 transform transition-all duration-300 
                     group-hover:translate-x-1 group-hover:scale-110" 
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
        </button>
      </div>
    </div>
  );
};

const NewsSection = () => {
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
            <BsNewspaper className="text-xl text-accentColor" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 
                         uppercase tracking-wider">
              Latest Updates
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white 
                       text-center">
            Our Latest News
          </h2>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardItem {...item} />
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
          <button 
            className="inline-flex items-center gap-3 bg-white dark:bg-gray-900 text-gray-900 
                     dark:text-white font-semibold py-3 px-8 border-2 border-gray-900 
                     dark:border-gray-700 transition-all duration-300
                     hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 
                     active:translate-y-0 transform-gpu"
          >
            View All News
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
