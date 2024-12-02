"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const CTASection = () => {
    const router = useRouter();
    return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accentColor to-green-700 opacity-95" />
        
        <motion.div 
          className="container relative z-10 mx-auto px-4 sm:px-6 py-20 sm:py-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Top Border Line */}
            <div className="w-24 h-1 bg-white mb-12" />
            
            {/* Main Content */}
            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                Ready to Transform Your Healthcare Solutions?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg text-white/90 max-w-2xl"
              >
                Join leading healthcare institutions in advancing patient care through our innovative pharmaceutical solutions. Our team is ready to support your specific needs.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button 
                  onClick={() => router.push("/contact")}
                  className="group px-8 py-4 bg-white text-accentColor font-semibold 
                           transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                           hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 
                           active:translate-y-0 transform-gpu"
                >
                  <span className="flex items-center justify-center gap-3">
                    Contact Sales
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" 
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
                
                <button 
                  onClick={() => router.push("/about")}
                  className="group px-8 py-4 border-2 border-white text-white
                           font-semibold transition-all duration-300
                           hover:bg-white/10 hover:-translate-y-1 
                           active:translate-y-0 transform-gpu"
                >
                  <span className="flex items-center justify-center gap-3">
                    Learn More
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="square" 
                        strokeLinejoin="miter" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </div>
            
            {/* Bottom Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
            >
              {[
                { number: "2+", label: "Decades of Experience" },
                { number: "1000+", label: "Healthcare Partners" },
                { number: "24/7", label: "Professional Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    )
}
  
export default CTASection;