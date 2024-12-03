"use client";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/footer";
import { DynamicBackground } from "@/components/ui/dynamic-background";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ScrollToTopButton from "@/components/ui/ScrollToTop";

export default function Production() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 overflow-x-hidden"
    >
      <NavBar />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accentColor/50 origin-left z-50"
        style={{ scaleX }}
      />
      <main className="relative">
        {/* Header Section */}
        <HeaderSection />

        {/* Key Production Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ProductionStatistics />
        </motion.div>

        {/* Detailed Facility Descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FacilitiesSection />
        </motion.div>

        {/* Production Technology Stages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ProductionProcess />
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <GallerySection />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <CTASection />
        </motion.div>
      </main>
      <ScrollToTopButton />
      <Footer />
    </motion.div>
  );
}

// Header Section (Production Technology)
const HeaderSection = () => {
  return (
    <section className="relative py-20 lg:py-32">
      <DynamicBackground />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Production Technology
        </motion.h1>
        <motion.p
          className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ESCOM is the largest pharmaceutical company in southern Russia, consistently investing in advanced technologies to modernize production.
        </motion.p>
        {/* Map of Russia */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Image
            src="/images/russia-map.png"
            alt="Map of Russia highlighting production facilities"
            width={800}
            height={450}
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Key Production Statistics
const ProductionStatistics = () => {
  const stats = [
    {
      number: "215M",
      label: "Injection preparations produced annually",
      icon: "💉",
    },
    {
      number: "140M",
      label: "Infusion solutions produced annually",
      icon: "🩸",
    },
    {
      number: "20M",
      label: "Units of disinfectants produced annually",
      icon: "🧴",
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gray-50 dark:bg-gray-800 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-accentColor mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FacilitiesSection Component
const FacilitiesSection = () => {
  const facilities = [
    {
      title: "Facility #1: Stavropol",
      description:
        "Total area of 5400 m², production capacity of 3M units/month, and full utilization efficiency (100%). In 2010, ampoule production reconstruction enabled 8.6M ampoules/month. Compliant with GOST standards and advanced logistics.",
      image: "/images/facility-n1.png",
      stats: [
        { label: "Total Area", value: "5400 m²", icon: "📐" },
        { label: "Capacity", value: "3M units/month", icon: "🏭" },
      ],
    },
    {
      title: "Facility #2: Stavropol",
      description:
        "Specializes in infusion solutions in polypropylene bottles. Design capacity of 6M units/month, increased production due to advanced packaging. Average productivity of 12K bottles/hour.",
      image: "/images/facility-n2.png",
      stats: [
        { label: "Total Area", value: "2913 m²", icon: "📏" },
        { label: "Capacity", value: "6M units/month", icon: "🏭" },
      ],
    },
    {
      title: "Facility #3: Stavropol",
      description:
        "Two-story structure (2437 m²) with a design capacity of 4M units/month. Maximum capacity of 12-14M units/month. Compliant with GMP standards.",
      image: "/images/facility-n3.png",
      stats: [
        { label: "Total Area", value: "2437 m²", icon: "🏢" },
        { label: "Capacity", value: "12-14M units/month", icon: "🏭" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-12 items-center mb-20"
          >
            <motion.div
              className="md:w-1/2 h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-full">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-accentColor mb-4">
                {facility.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {facility.description}
              </p>
              <div className="flex gap-8">
                {facility.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="text-3xl mr-3">{stat.icon}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Production Technology Stages
const ProductionProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Equipment and Personnel",
      description: "Thorough preparation of equipment and staff according to GMP standards",
      icon: "🛠️",
    },
    {
      step: "02", 
      title: "Water Preparation",
      description: "Precise measurements and purification of water components",
      icon: "💧",
    },
    {
      step: "03",
      title: "Bottle Processing",
      description: "Multi-stage washing and sterilization of containers",
      icon: "🧴",
    },
    {
      step: "04",
      title: "Solution Processing",
      description: "Careful preparation and filtration of pharmaceutical solutions",
      icon: "🔬",
    },
    {
      step: "05",
      title: "Bottling Process",
      description: "Automated filling and sterilization procedures",
      icon: "🏭",
    },
    {
      step: "06",
      title: "Final Packaging",
      description: "Quality control, labeling and secure packaging",
      icon: "📦",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Production Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            State-of-the-art pharmaceutical manufacturing following strict GMP guidelines
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 transform md:-translate-x-px h-full w-[2px] bg-accentColor/20" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Step Number & Icon */}
                <div className="flex-none z-10">
                  <div className="w-14 h-14 bg-accentColor shadow-lg flex items-center justify-center">
                    <span className="text-2xl text-white">
                      {step.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm font-bold text-accentColor mb-2">
                      STEP {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const router = useRouter();

  const images = [
    "/images/tenth.png",
    "/images/research.png",
    "/images/122.png",
    "/images/third.png",
    "/images/first.png",
    "/images/fifth.png",
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Facilities in Action
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden shadow-lg" // Removed rounded-lg
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/catalog")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accentColor text-white
           text-sm sm:text-base font-semibold transition-all duration-300
           shadow-[0_4px_12px_rgba(0,0,0,0.1)]
           hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 
           active:translate-y-0 transform-gpu"
          >
            <span className="flex items-center justify-center gap-3">
              Explore Our Catalog
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accentColor to-green-700 opacity-95" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-1 bg-white mb-8 mx-auto" />
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Reach Out for More Information
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Contact us to learn more about our products and how we can collaborate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => router.push("/contact")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-accentColor
           text-sm sm:text-base font-semibold transition-all duration-300
           shadow-[0_4px_12px_rgba(0,0,0,0.1)]
           hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 
           active:translate-y-0 transform-gpu"
            >
              <span className="flex items-center justify-center gap-3">
                Get in Touch
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};