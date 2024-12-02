import { motion } from "framer-motion";
import Image from "next/image";
import { MdVerified, MdSecurity, MdHealthAndSafety } from "react-icons/md";
import { GiMedicalDrip } from "react-icons/gi";
import { FaAward, FaCertificate } from "react-icons/fa";

const certifications = [
  { name: "GMP Certified", icon: <FaCertificate className="w-6 h-6" /> },
  { name: "ISO 9001:2015", icon: <FaAward className="w-6 h-6" /> },
  { name: "WHO Approved", icon: <MdHealthAndSafety className="w-6 h-6" /> },
];

const stats = [
  { number: "26+", label: "Years of Excellence", icon: <MdVerified /> },
  { number: "375M+", label: "Units Per Year", icon: <GiMedicalDrip /> },
  { number: "100%", label: "Quality Compliance", icon: <MdSecurity /> },
];

const TrustIndicators = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white dark:bg-gray-900 px-6 py-3
                         shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]
                         border border-gray-100 dark:border-gray-800 transition-all duration-300"
            >
              <div className="text-accentColor">{cert.icon}</div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">{cert.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-8 bg-white dark:bg-gray-900 
                         shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]
                         border border-gray-100 dark:border-gray-800 transition-all duration-300
                         group hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4
                            bg-accentColor/10 text-accentColor rounded-full
                            group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-center text-gray-500 dark:text-gray-400 text-sm font-medium mb-8">
            TRUSTED BY LEADING HEALTHCARE INSTITUTIONS
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src={`/partner${i}.png`}
                alt={`Partner ${i}`}
                width={120}
                height={40}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators; 