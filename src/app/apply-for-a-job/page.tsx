"use client"
import Image from "next/image";
import CoffeeBreak from "@/../public/CoffeeBreak.svg";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/footer";
import { DynamicBackground } from "@/components/ui/dynamic-background";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


const benefits = [
  {
    title: "Culture",
    description: "Remote-friendly workspace with flexible hours",
    icon: "🏠"
  },
  {
    title: "Benefits",
    description: "Competitive packages and wellness programs",
    icon: "🎯"
  },
  {
    title: "Growth",
    description: "Continuous learning and career development",
    icon: "📈"
  }
];

export default function ApplyForAJobPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <NavBar />
      <main className="flex-1 relative pt-24 md:pt-32">
        <DynamicBackground />
        
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center justify-center text-center space-y-12">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-b from-accentColor/10 via-white/5 to-transparent rounded-full" />
                <div className="relative w-full h-full p-4">
                  <Image
                    src={CoffeeBreak}
                    alt="Coffee Break Illustration"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-6 max-w-2xl">
                <span className="inline-block px-4 py-1 bg-accentColor/10 text-accentColor rounded-full text-sm font-medium">
                  Career Opportunities
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  We're Brewing <span className="text-accentColor">Something Special</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  While we don't have any openings right now, great opportunities are cooking! 
                  Want to be the first to know when we're hiring?
                </p>
              </div>

              <div className="flex flex-col gap-4 ">
                <button onClick={() => window.open('https://t.me/escomgroup', '_blank')} className="flex-1 px-10 py-3  bg-accentColor text-white rounded-lg
                               font-semibold transition-all duration-300
                               hover:bg-opacity-90 hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center justify-center gap-2">
                    Join Telegram
                    <span className="group-hover:translate-x-1">→</span>
                  </span>
                </button>
                
                <button onClick={() => window.open('https://www.linkedin.com/company/escom-group/', '_blank')} className="flex-1 px-8 py-3 border-2 border-accentColor text-accentColor rounded-lg
                               font-semibold transition-all duration-300
                               hover:bg-accentColor hover:text-white hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center justify-center gap-2">
                    Follow LinkedIn
                    <span className="group-hover:translate-x-1">→</span>
                  </span>
                </button>
              </div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg
                             border border-gray-100 dark:border-gray-700
                             hover:-translate-y-2 transition-all duration-300"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="text-4xl mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-center">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}