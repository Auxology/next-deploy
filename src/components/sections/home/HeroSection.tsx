"use client";
import { useRouter } from "next/navigation";
import Image from "next/image"; 
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
import { GiMicroscope } from "react-icons/gi";
import { MdOutlineBiotech, MdHealthAndSafety } from "react-icons/md";
import { motion } from "framer-motion";
import { DynamicBackground } from "@/components/ui/dynamic-background";

const HeroSection = () => {
    const router = useRouter();
  
    return (
      <section className="relative overflow-hidden py-20 lg:py-24 min-h-screen flex flex-col items-center justify-center mt-10">
          <DynamicBackground/>
          
          <div className="absolute inset-0 pointer-events-none">
              <motion.div
                  className="absolute w-96 h-96 bg-accentColor/5 blur-[100px]"
                  animate={{
                      x: [0, 100, 0],
                      y: [0, 50, 0],
                      scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div 
                className="text-left space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-5 py-3 border-l-4 border-accentColor shadow-lg"
                >
                  <AiFillSafetyCertificate className="text-2xl text-accentColor" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    GMP Certified Pharmaceutical Company
                  </span>
                </motion.div>

                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Pioneering{' '}
                  <span className="text-accentColor relative">
                    Pharmaceutical Excellence
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-accentColor/10"></span>
                  </span>
                  {' '}in{' '}
                  <span className="text-gray-800 dark:text-gray-100">Russia</span>
                </motion.h1>

                {/* Features Grid */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 gap-4 sm:gap-6"
                >
                  {[
                    { icon: <GiMicroscope className="w-6 h-6 text-accentColor" />, text: "Advanced Research" },
                    { icon: <AiFillProduct className="w-6 h-6 text-accentColor" />, text: "Wide Product Range" },
                    { icon: <MdOutlineBiotech className="w-6 h-6 text-accentColor" />, text: "Modern Technology" },
                    { icon: <MdHealthAndSafety className="w-6 h-6 text-accentColor" />, text: "Quality Assured" },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group cursor-pointer"
                    >
                      <div className="p-2 bg-gray-50 dark:bg-gray-800/50 group-hover:bg-white 
                                    rotate-0 group-hover:rotate-6 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium group-hover:text-accentColor
                                     transition-colors duration-300">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
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
              </motion.div>

              {/* Right Image Section */}
               {/* Right side - Image Showcase with professional presentation */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex-1 h-full"
            >
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full
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
                              bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-4 sm:p-6
                              border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 font-medium">
                    Our state-of-the-art research and development facility
                  </p>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
      </section>
    )
}

export default HeroSection;
