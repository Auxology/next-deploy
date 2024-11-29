"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import { GiMicroscope  } from "react-icons/gi";
import { MdHealthAndSafety, MdOutlineBiotech } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { AuroraBackground } from "@/components/ui/aurora-background";
import NavBar from "@/components/ui/NavBar";
import { FeaturesSectionDemo } from "@/components/ui/WhoAreWe";
import Footer from "@/components/ui/footer";
import ScrollToTopButton from "react-scroll-to-top"
import { motion } from "framer-motion";

// Hero Section, Components
const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden">
      <AuroraBackground className="min-h-screen flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/lab-pattern.jpg"
            alt="Laboratory Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <motion.div 
          className="container mx-auto px-4 sm:px-6 py-16 md:py-0 relative z-10 flex flex-col md:flex-row 
                     items-center justify-center md:justify-between gap-8 md:gap-12 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side - Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start w-full md:w-1/2 space-y-6 md:space-y-8">
            {/* Certification Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-2 bg-white/80 dark:bg-gray-800/80 
                          backdrop-blur-sm px-3 py-2 sm:px-6 sm:py-3 rounded-lg border border-accentColor/20 
                          w-fit">
              <AiFillSafetyCertificate className="text-xl sm:text-2xl text-accentColor" />
              <span className="text-[11px] sm:text-sm font-semibold text-gray-800 dark:text-gray-200 text-center sm:text-left">
                ISO 9001:2015 Certified Pharmaceutical Company
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white 
                         leading-tight sm:leading-tight md:leading-tight text-center md:text-left">
              Advancing <span className="text-accentColor dark:text-accentColor/90">Healthcare</span>
              <br className="hidden sm:block" />
              Through <span className="text-gray-800 dark:text-gray-100">Scientific Excellence</span>
            </h1>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-xl">
              {[
                { icon: <GiMicroscope className="w-5 h-5 sm:w-6 sm:h-6 text-accentColor" />, text: "Advanced Research Facilities" },
                { icon: <TbCertificate className="w-5 h-5 sm:w-6 sm:h-6 text-accentColor" />, text: "GMP Certified" },
                { icon: <MdOutlineBiotech className="w-5 h-5 sm:w-6 sm:h-6 text-accentColor" />, text: "State-of-the-art Labs" },
                { icon: <MdHealthAndSafety className="w-5 h-5 sm:w-6 sm:h-6 text-accentColor" />, text: "Quality Assured" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center md:justify-start gap-2 text-gray-700 dark:text-gray-300">
                  {item.icon}
                  <span className="text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto">
              <button 
                onClick={() => router.push("/products")}
                className="w-full sm:w-auto px-4 sm:px-8 py-3 bg-accentColor text-white rounded-lg
                         text-sm sm:text-base font-semibold transition-all duration-300 shadow-md
                         hover:shadow-xl hover:shadow-accentColor/20 hover:-translate-y-1 active:translate-y-0"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Our Products
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={() => router.push("/contact")}
                className="w-full sm:w-auto px-4 sm:px-8 py-3 border-2 border-gray-700 dark:border-gray-300 
                         text-gray-700 dark:text-gray-300 rounded-lg text-sm sm:text-base font-semibold 
                         transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <span className="flex items-center justify-center gap-2">
                  Medical Professional Inquiry
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right side - Image Showcase */}
          <div className="flex-1 w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] max-w-2xl mx-auto">
              <Image
                src="/seventh.png"
                alt="Advanced Laboratory Equipment"
                fill
                className="object-cover rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl"
                priority
              />
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 
                            bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 sm:p-4 rounded-lg">
                <p className="text-[11px] sm:text-sm text-gray-600 dark:text-gray-300 text-center">
                  Our state-of-the-art research and development facility
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  )
}

// CTASection, Components
const CTASection = () => {
  const router = useRouter();
  return (
    <section className="py-20 bg-gradient-to-r from-accentColor to-green-700">
      <motion.div 
        className="container mx-auto px-4 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Join thousands of satisfied customers today
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={() => router.push("/contact")}
            className="px-8 py-3 bg-white text-accentColor rounded-lg
                     font-semibold transition-all duration-300
                     hover:bg-opacity-90 hover:-translate-y-1 active:translate-y-0"
          >
            <span className="flex items-center justify-center gap-2">
              Contact Sales
              <span className="group-hover:translate-x-1">→</span>
            </span>
          </button>
          <button 
            onClick={() => router.push("/about")}
            className="px-8 py-3 border-2 border-white text-white rounded-lg
                     font-semibold transition-all duration-300
                     hover:bg-white hover:text-accentColor hover:-translate-y-1 active:translate-y-0"
          >
            <span className="flex items-center justify-center gap-2">
              Learn More
              <span className="group-hover:translate-x-1">→</span>
            </span>
          </button>
        </div>
      </motion.div>
    </section>
  )
}

// ProductionSection, Components
const ProductionSection = () => {
  return (
    <section id="production" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <MdHealthAndSafety className="text-2xl text-accentColor" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Pharmaceutical Excellence
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
            Advanced Manufacturing & Quality Control
          </h2>
        </div>

        {/* Main Facility Showcase */}
        <div className="mb-16 relative rounded-2xl overflow-hidden">
          <Image
            src="/quaility.png" // Add panoramic facility image
            alt="Production Facility"
            width={1200}
            height={500}
            className="w-full object-cover h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">State-of-the-Art Manufacturing Facility</h3>
              <p className="max-w-2xl">
                Our EU-GMP certified facility equipped with the latest pharmaceutical manufacturing technology
              </p>
            </div>
          </div>
        </div>

        {/* Process Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src="/research.png"
                alt="Research Laboratory"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Research & Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Advanced laboratories for pharmaceutical innovation
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-accentColor">✓</span>
                  <span>Modern Equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accentColor">✓</span>
                  <span>Expert Scientists</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accentColor">✓</span>
                  <span>Quality Control</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quality Control Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src="/eight.png" // Add QC lab image
                alt="Quality Control Laboratory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Quality Control
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Rigorous testing and quality assurance protocols
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-accentColor">✓</span>
                  <span>Analytical Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accentColor">✓</span>
                  <span>Stability Studies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accentColor">✓</span>
                  <span>Batch Validation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Manufacturing Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src="/manufactoring.png" // Add manufacturing facility image
                alt="Manufacturing Facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Manufacturing Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                State-of-the-art production facilities
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-accentColor">✓</span>
                  <span>GMP Compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accentColor">✓</span>
                  <span>Automated Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accentColor">✓</span>
                  <span>Clean Room Facilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quality Metrics */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Quality Metrics
            </h4>
            <div className="relative h-64">
              <Image
                src="/images/quality-metrics.jpg" // Add quality metrics visualization
                alt="Quality Metrics Dashboard"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white text-sm">
                  Real-time monitoring and quality control systems
                </p>
              </div>
            </div>
          </div>

          {/* Certification Showcase */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              International Standards
            </h4>
            <div className="relative h-64">
              <Image
                src="/images/certifications.jpg" // Add certification showcase
                alt="International Certifications"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white text-sm">
                  Meeting and exceeding global pharmaceutical standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// BestSellersSection, Components
const BestSellersSection = () => {
  return (
    <section id="best-sellers" className="pb-10 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Best Sellers Section Content */}
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mt-12 sm:mt-24">
              Best Sellers
            </h2>
          </div>
          
          <div className="mt-8 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="w-full mx-auto overflow-hidden rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image 
                  src="https://via.placeholder.com/150" 
                  alt="Product 1" 
                  width={400} 
                  height={300}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-accentColor text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                  Best Seller
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Product 1</h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">Lorem ipsum dolor sit amet</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-xl font-bold text-accentColor">$99.99</span>
                  <button className="bg-accentColor text-white font-bold text-sm sm:text-base py-1.5 sm:py-2 px-4 sm:px-6 rounded-lg hover:bg-green-900 transition-all duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full mx-auto overflow-hidden rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image 
                  src="https://via.placeholder.com/150" 
                  alt="Product 2" 
                  width={400} 
                  height={300}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-accentColor text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                  Best Seller
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Product 2</h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">Lorem ipsum dolor sit amet</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-xl font-bold text-accentColor">$149.99</span>
                  <button className="bg-accentColor text-white font-bold text-sm sm:text-base py-1.5 sm:py-2 px-4 sm:px-6 rounded-lg hover:bg-green-900 transition-all duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full mx-auto overflow-hidden rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image 
                  src="https://via.placeholder.com/150" 
                  alt="Product 3" 
                  width={400} 
                  height={300}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-accentColor text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                  Best Seller
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Product 3</h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">Lorem ipsum dolor sit amet</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-xl font-bold text-accentColor">$199.99</span>
                  <button className="bg-accentColor text-white font-bold text-sm sm:text-base py-1.5 sm:py-2 px-4 sm:px-6 rounded-lg hover:bg-green-900 transition-all duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

// NewsSection, Components
const NewsSection = () => {
  return (
    <section className="py-24 ">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* News Section Content */}
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our latest News</h2>
      <div
          className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
        <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
          <div className="flex items-center">
            <Image width={400} height={300} src="https://pagedone.io/asset/uploads/1696244317.png" alt="blogs tailwind section"
                 className="rounded-t-2xl w-full object-cover"/>
          </div>
          <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
            <span className="text-accentColor font-medium mb-3 block">Jan 01, 2023</span>
            <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">GENERIC TEXT</h4>
            <p className="text-gray-500 leading-6 mb-10">GENERIC TEXT GENERIC TEXT GENERIC TEXT...</p>
            <a href="javascript:;" className="cursor-pointer text-lg text-accentColor font-semibold">Read more..</a>
          </div>
        </div>
        <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
          <div className="flex items-center">
            <Image width={400} height={300} src="https://pagedone.io/asset/uploads/1696244340.png" alt="blogs tailwind section"
                 className="rounded-t-2xl w-full object-cover"/>
          </div>
          <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
            <span className="text-accentColor font-medium mb-3 block">Feb 01, 2023</span>
            <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">GENERIC TEXT</h4>
            <p className="text-gray-500 leading-6 mb-10">GENERIC TEXT GENERIC TEXT GENERIC TEXT...</p>
            <a href="javascript:;" className="cursor-pointer text-lg text-accentColor font-semibold">Read more..</a>
          </div>
        </div>
        <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
          <div className="flex items-center">
            <Image width={400} height={300} src="https://pagedone.io/asset/uploads/1696244356.png" alt="blogs tailwind section"
                 className="rounded-t-2xl w-full object-cover"/>
          </div>
          <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
            <span className="text-accentColor font-medium mb-3 block">Mar 01, 2023</span>
            <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">GENERIC TEXT</h4>
            <p className="text-gray-500 leading-6 mb-10">GENERIC TEXT GENERIC TEXT GENERIC TEXT...</p>
            <a href="javascript:;" className="cursor-pointer text-lg text-accentColor font-semibold">Read more..</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}


export default function Page() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CTASection />
      <FeaturesSectionDemo />
      <ProductionSection />
      <BestSellersSection />
      <NewsSection />
      <ScrollToTopButton 
                smooth 
                component={<span style={{ fontSize: '24px' }}>↑</span>}
                style={{
                    backgroundColor: '#3d680a',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '10px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                className="hover:bg-opacity-90 hover:-translate-y-1"
            />
      <Footer/>
    </div>
  );
}
