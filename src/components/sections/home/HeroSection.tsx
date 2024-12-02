"use client";
import { useRouter } from "next/navigation";
import Image from "next/image"; 
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
import { GiMicroscope } from "react-icons/gi";
import { MdOutlineBiotech, MdHealthAndSafety } from "react-icons/md";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const HeroSection = () => {
    const router = useRouter();
  
    return (
      <section className="relative overflow-hidden pt-16 sm:pt-20">
        <AuroraBackground className="min-h-[calc(100vh-64px)] flex items-center justify-center">
          {/* Background Pattern - more subtle and professional */}
          <div className="absolute inset-0 opacity-[0.03]">
          </div>
          
          <motion.div 
            className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10 flex flex-col md:flex-row 
                       items-center justify-center md:justify-between gap-8 md:gap-20 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Left side - Text Content */}
            <div className="flex-1 flex flex-col items-center md:items-start w-full md:w-1/2 space-y-8 sm:space-y-10 
                           mt-4 sm:mt-0">
              {/* Certification Badge - more corporate style */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-row items-center gap-3 bg-white/95 dark:bg-gray-800/95 
                          backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 border-l-4 border-accentColor
                          shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-full sm:w-auto"
              >
                <AiFillSafetyCertificate className="text-xl sm:text-2xl text-accentColor" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                  GMP Certified Pharmaceutical Company
                </span>
              </motion.div>
  
              {/* Main Heading - more impactful */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white 
                         leading-[1.15] tracking-tight text-center md:text-left"
              >
                Pioneering{' '}
                <span className="text-accentColor dark:text-accentColor/90 relative inline-block">
                  Pharmaceutical Excellence
                  <span className="absolute bottom-2 left-0 w-full h-[6px] bg-accentColor/10"></span>
                </span>
                {' '}in{' '}
                <span className="text-gray-800 dark:text-gray-100">Russia</span>
              </motion.h1>
              
              {/* Trust indicators - improved professional layout */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-6 w-full max-w-xl"
              >
                {[
                  { icon: <GiMicroscope className="w-6 h-6 text-accentColor" />, text: "Advanced Research Facilities" },
                  { icon: <AiFillProduct className="w-6 h-6 text-accentColor" />, text: "Wide Range of Products" },
                  { icon: <MdOutlineBiotech className="w-6 h-6 text-accentColor" />, text: "Modern Technology" },
                  { icon: <MdHealthAndSafety className="w-6 h-6 text-accentColor" />, text: "Quality Assured" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group cursor-pointer"
                  >
                    <div className="p-2 bg-gray-50 dark:bg-gray-800/50 group-hover:bg-white 
                                  rotate-0 group-hover:rotate-6
                                  transition-all duration-300 ease-out">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium group-hover:text-accentColor
                                   transition-colors duration-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
  
              {/* CTA Buttons - sharper, more professional */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
              >
                <button 
                  onClick={() => router.push("/products")}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accentColor text-white
                           text-sm sm:text-base font-semibold transition-all duration-300
                           shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                           hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 
                           active:translate-y-0 transform-gpu"
                >
                  <span className="flex items-center justify-center gap-3">
                    Explore Our Products
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
                <button 
                  onClick={() => router.push("/contact")}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/90 dark:bg-gray-800/90
                           border-2 border-gray-800 dark:border-gray-300
                           text-sm sm:text-base text-gray-800 dark:text-gray-300 font-semibold 
                           transition-all duration-300 backdrop-blur-sm
                           hover:bg-gray-50 hover:-translate-y-1 
                           active:translate-y-0 transform-gpu"
                >
                  <span className="flex items-center justify-center gap-3">
                  Contact Our Experts
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </div>
  
            {/* Right side - Image Showcase with professional presentation */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex-1 w-full md:w-1/2 mt-6 sm:mt-0"
            >
              <div className="relative w-full aspect-[4/3] max-w-xl mx-auto 
                            shadow-[0_8px_32px_rgba(0,0,0,0.15)] 
                            hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] 
                            transition-all duration-500 group
                            before:absolute before:inset-0 
                            before:bg-gradient-to-t before:from-black/40 before:to-transparent
                            before:opacity-0 hover:before:opacity-100 before:transition-opacity
                            before:duration-500">
                <Image
                  src="/images/seventh.png"
                  alt="Advanced Laboratory Equipment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 
                              bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-3 sm:p-4
                              border-t border-gray-100 dark:border-gray-700">
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-medium">
                    Our state-of-the-art research and development facility
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AuroraBackground>
      </section>
    )
  }

export default HeroSection;
