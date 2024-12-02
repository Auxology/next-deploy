import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { BsClockHistory } from "react-icons/bs";
import { GiWaterDrop } from "react-icons/gi";
import { MdHealthAndSafety, MdOutlineSanitizer, MdOutlineBiotech } from "react-icons/md";
import { TbPill, TbVaccine } from "react-icons/tb";
import { TbChartHistogram } from "react-icons/tb";
 import { motion } from "framer-motion";


const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false
});

const WhoAreWe = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start max-w-xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6 bg-gray-50 px-4 py-2 border-l-4 border-accentColor">
            <BsClockHistory className="text-xl text-accentColor" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              26 Years of Excellence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">About ESCOM Group</h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About ESCOM */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] 
                     transition-shadow border border-gray-100"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">ESCOM</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
              ESCOM Group is a leading pharmaceutical company in Russia, 
              specializing in the production of infusion solutions and injectable drugs.
              As the sole manufacturer of these products in Southern Russia, 
              we are dedicated to delivering effective and accessible medications that meet the highest quality standards.
              </p>

              <div className="mt-auto border-t border-gray-100 pt-6">
                <div className="flex items-center gap-4">
                  <TbChartHistogram className="text-2xl text-accentColor" />
                  <h4 className="text-lg font-medium">More than 375M units per year</h4>
                </div>
              </div>

              <div className="mt-4 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-4">
                  <TbPill className="text-2xl text-accentColor" />
                  <h4 className="text-lg font-medium">Producing effective and affordable medications</h4>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Safety and Quality */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] 
                     transition-shadow border border-gray-100"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 mb-6">
                <MdHealthAndSafety className="text-2xl text-accentColor" />
                <h3 className="text-2xl sm:text-3xl font-bold">Safety and Quality</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                More than 80% of the medicines of the ESCOM are included in List of vital 
                drugs. Therefore, we monitor the quality of solutions and comply with all 
                state standards. The company has a quality management system that meets
                the requirements of GMP (Good Manufacturing Practice). 
                We are constantly improving our production and quality control processes.
              </p>
              <div className="mt-auto">
                <button 
                  className="w-full sm:w-auto px-6 py-3 bg-accentColor text-white
                           text-sm font-semibold transition-all duration-300
                           shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                           hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 
                           active:translate-y-0 transform-gpu"
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>

          {/* Products We Produce */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] 
                     transition-shadow border border-gray-100"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">We Produce</h3>
            <div className="space-y-4">
              {[
                {
                  icon: <GiWaterDrop className="text-2xl text-accentColor" />,
                  title: "Infusion Solutions",
                  description: "Water-based medications for parenteral therapy, ensuring rapid and effective patient treatment."
                },
                {
                  icon: <TbVaccine className="text-2xl text-accentColor" />,
                  title: "Injection Drugs",
                  description: "Sterile, high-quality injectable medications designed for various therapeutic needs."
                },
                {
                  icon: <MdOutlineSanitizer className="text-2xl text-accentColor" />,
                  title: "Antibacterial and Disinfectant",
                  description: "Effective antiseptics and antimicrobial products essential for infection control in medical settings."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  className="flex items-start gap-4 p-4 border border-gray-100 group 
                           hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <div className="p-2 bg-gray-50 group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-accentColor transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Manufacturing Process */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] 
                     transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <MdOutlineBiotech className="text-2xl text-accentColor" />
              <h3 className="text-2xl sm:text-3xl font-bold">Manufacturing Process</h3>
            </div>
            <div className="relative aspect-video">
              <Suspense fallback={
                <div className="w-full h-full bg-gray-100 animate-pulse" />
              }>
                <ReactPlayer
                  url="/video.mp4"
                  width="100%"
                  height="100%"
                  playing
                  loop
                  muted
                  controls={true}
                  className="shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                />
              </Suspense>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Modern and advanced manufacturing facilities following GMP standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;