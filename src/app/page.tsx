"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import { GiAtom, GiMedicinePills } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AuroraBackground } from "@/components/ui/aurora-background";
import NavBar from "@/components/ui/NavBar";
import CardDemo from "@/components/ui/production";
import { FeaturesSectionDemo } from "@/components/ui/WhoAreWe";
import Footer from "@/components/ui/footer";
import ScrollToTopButton from "react-scroll-to-top"

// Hero Section, Components
const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen relative overflow-hidden">
        <AuroraBackground>
          <div className="flex items-center justify-center h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
              {/* Hero Section Content */}
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white transition-all duration-100 animate-fade-in">
                ESCOM
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
                Leading the Russian market with innovation and excellence
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-accentColor text-white font-bold py-3 px-8 rounded-lg hover:bg-green-900 transition-all duration-300 transform hover:scale-105" onClick={()=> router.push("/products")}>
                  Explore Our Services
                </button>
                <button className="border-2 border-accentColor text-accentColor font-bold py-3 px-8 rounded-lg hover:bg-accentColor hover:text-white transition-all duration-300" onClick={()=> router.push("/contact")}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </AuroraBackground>
    </section>
  )
}

// CTASection, Components
const CTASection = () => {
  const router = useRouter();
  return (
    <section className="bg-gradient-to-r from-accentColor to-green-700 py-12">
        <div className="container mx-auto px-4">
          {/* CTASection Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg opacity-90">Join thousands of satisfied customers today</p>
            </div>
            <div className="flex gap-4">
              <button className="min-w-[160px] bg-white text-accentColor font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap" onClick={()=> router.push("/contact")}>
                Contact Sales
              </button>
              <button className="min-w-[160px] border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-accentColor transition-all whitespace-nowrap" onClick={()=> router.push("/about")}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

// ProductionSection, Components
const ProductionSection = () => {
  return (
    <section id="production">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Production Section Content */}
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            {/* Production Section Title */}
            <h2 className="text-4xl font-bold text-gray-900 text-center mt-24">Production</h2>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
            {/* Card 1 */}
            <CardDemo/>

            {/* Card 2 */}
            <div
                className="max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
              <h3 className="text-xl text-center font-bold text-gray-800 dark:text-white py-2">Mission</h3>
              <div className="flex flex-col gap-10 mt-10 space-y-10 justify-center items-center">
                <div className="flex items-center justify-center gap-4">
                  <GiMedicinePills className="text-5xl text-accentColor hover:text-green-900"/>
                  <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex items-center justify-center gap-x-4">
                    <GiAtom className="text-5xl text-accentColor hover:text-green-900"/>
                  <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.</p>
                </div>
                <button className="bg-accentColor text-white font-bold py-2 px-4 rounded-md hover:bg-green-900">See
                  our Presentation
                </button>
              </div>
            </div>

              {/* Card 3 */}
            <div
                className="max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
              <h3 className="text-xl text-center font-bold text-gray-800 dark:text-white py-2">Safety</h3>
              <div className="flex flex-col gap-10 mt-10 space-y-10 justify-center items-center">
                <div className="flex items-center justify-center gap-4">
                    <MdHealthAndSafety className="text-5xl text-accentColor hover:text-green-900"/>
                  <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex items-center justify-center gap-x-4">
                    <AiFillSafetyCertificate className="text-5xl text-accentColor hover:text-green-900"/>
                  <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.</p>
                </div>
                <button className="bg-accentColor text-white font-bold py-2 px-4 rounded-md hover:bg-green-900">Read
                  More
                </button>
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
            <img src="https://pagedone.io/asset/uploads/1696244317.png" alt="blogs tailwind section"
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
            <img src="https://pagedone.io/asset/uploads/1696244340.png" alt="blogs tailwind section"
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
            <img src="https://pagedone.io/asset/uploads/1696244356.png" alt="blogs tailwind section"
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
