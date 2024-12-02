/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { motion } from 'framer-motion';
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import { DynamicBackground } from '@/components/ui/dynamic-background';
import { useRouter } from 'next/navigation';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Add these interfaces at the top of the file
interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
}

interface CountUpCardProps {
  number: string;
  label: string;
  delay: number;
}

// Update the FadeInWhenVisible component
const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

// Add scroll progress indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accentColor z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

const HeroSection = () => {
    const router = useRouter();

    return (
        <section className="relative overflow-hidden py-20 lg:py-24 min-h-screen flex flex-col items-center justify-center">
            <DynamicBackground />

            {/* Enhanced background animation */}
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

            <motion.div
                className="container mx-auto px-4 md:px-6 text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Badge with improved contrast */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }} 
                    className="inline-flex items-center gap-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-5 py-3 border-l-4 border-accentColor shadow-lg mx-auto"
                >
                    <AiFillSafetyCertificate className="text-2xl text-accentColor" aria-hidden="true" />
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        GMP Certified Pharmaceutical Company
                    </span>
                </motion.div>

                {/* Enhanced typography and spacing */}
                <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Advancing Global{' '}
                    <span className="text-accentColor relative">
                        Healthcare
                        <span className="absolute bottom-0 left-0 w-full h-2 bg-accentColor/10"></span>
                    </span>
                </motion.h1>

                <motion.p 
                    className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Pioneering breakthrough treatments and innovative solutions for a healthier tomorrow.
                </motion.p>

                {/* Improved button group */}
                <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-10 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <button
                        onClick={() => router.push('/products')}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accentColor text-white
                                 text-sm sm:text-base font-semibold transition-all duration-300
                                 shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                                 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 
                                 active:translate-y-0 transform-gpu"
                    >
                        <span className="flex items-center justify-center gap-3">
                            Our Products
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                    <button
                        onClick={() => router.push('/about/rd')}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/90 dark:bg-gray-800/90
                                 border-2 border-gray-800 dark:border-gray-300
                                 text-sm sm:text-base text-gray-800 dark:text-gray-300 font-semibold 
                                 transition-all duration-300 backdrop-blur-sm
                                 hover:bg-gray-50 hover:-translate-y-1 
                                 active:translate-y-0 transform-gpu"
                    >
                        <span className="flex items-center justify-center gap-3">
                            Research & Development
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

// ImpactStats Section
const ImpactStats = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 relative">
            <div className="container mx-auto px-4">
                <SectionTitle
                    subtitle="Our Impact"
                    title="Making a Difference"
                    alignment="center"
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    {[
                        { number: "7.6BIL+", label: "Total Investment Value" },
                        { number: "400MIL+", label: "Products Manufactured" },
                        { number: "17SQ.M+", label: "Total Production Area" },
                        { number: "700+", label: "Staff working within ESCOM" },
                    ].map((stat, index) => (
                        <CountUpCard 
                            key={index}
                            number={stat.number}
                            label={stat.label}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

// MissionSection
const MissionSection = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    
    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="space-y-6"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <SectionTitle
                            subtitle="Our Purpose"
                            title="Committed to Excellence in Healthcare"
                        />
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            We&apos;re dedicated to developing innovative pharmaceutical solutions 
                            that address the world&apos;s most pressing health challenges.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Production of effective, affordable, and safe medicines",
                                "Manufacturing import-substituting products",
                                "Providing high-quality, essential medical products for Russian healthcare needs",
                                "Advancing medicine through innovative research with local scientists."
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="text-accentColor">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    <motion.div 
                        style={{ y }} 
                        className="relative h-[500px] overflow-hidden"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <video
                            src="/video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// HistorySection
const HistorySection = () => {
    const milestones = [
        {
            year: "1998",
            title: "Company Founded",
            description: "Establishment of the first production site for manufacturing infusion solutions, marking the beginning of ESCOM's journey",
            icon: "🏭", // Factory building - more industrial
            color: "from-blue-700/20 to-blue-800/20" // Deeper, more corporate blue
        },
        {
            year: "2006",
            title: "Expansion of Production Capacity",
            description: "Launch of Plant No. 2, significantly boosting production capabilities for infusion solutions to meet growing demand.",
            icon: "⚗️", // Laboratory flask - represents pharmaceutical production
            color: "from-indigo-600/20 to-indigo-700/20" // Professional indigo
        },
        {
            year: "2012",
            title: "Technological Modernization",
            description: "Upgraded production facilities, increasing output to 170 million ampoules annually and enhancing efficiency through advanced technologies.",
            icon: "🔬", // Microscope - represents scientific advancement
            color: "from-violet-600/20 to-violet-700/20" // Technology-focused violet
        },
        {
            year: "2017",
            title: "Pioneering Investment Project",
            description: "Constructed a state-of-the-art plant for producing infusion solutions in polypropylene bottles, achieving a production capacity of 108 million units annually.",
            icon: "💊", // Pill - represents pharmaceutical products
            color: "from-teal-600/20 to-teal-700/20" // Modern teal
        },
        {
            year: "2020",
            title: "New Milestones",
            description: "Registered 25+ new pharmaceutical products, reinforcing ESCOM's position as an industry leader.",
            icon: "🧪", // Test tube - represents research and development
            color: "from-slate-600/20 to-slate-700/20" // Professional slate
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <SectionTitle
                    subtitle="Our Journey"
                    title="Decades of Innovation"
                    description="From humble beginnings to global healthcare leadership"
                    alignment="center"
                />

                {/* Timeline */}
                <div className="mt-16 relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accentColor/20" />

                    {/* Timeline Items */}
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="mb-16 relative"
                        >
                            <div className={`flex flex-col md:flex-row items-center gap-8 ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}>
                                {/* Content */}
                                <div className="flex-1">
                                    <motion.div 
                                        className={`bg-white dark:bg-gray-700 p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                                            index % 2 === 0 ? 'md:text-right' : ''
                                        }`}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="inline-block px-4 py-2 bg-accentColor/10 text-accentColor text-sm font-medium mb-4">
                                            {milestone.year}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            {milestone.description}
                                        </p>
                                        
                                        {/* Progress Indicator */}
                                        <div className="w-full bg-gray-100 dark:bg-gray-600 h-1 overflow-hidden">
                                            <motion.div 
                                                className="h-full bg-accentColor"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Timeline Dot & Icon */}
                                <div className="relative">
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                                        <motion.div 
                                            className={`w-16 h-16 g-gradient-to-br ${milestone.color} flex items-center justify-center text-2xl shadow-lg`}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {milestone.icon}
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Visual Element */}
                                <div className="flex-1">
                                    <motion.div
                                        className={`h-48  bg-gradient-to-br ${milestone.color} p-6 flex items-center justify-center shadow-lg`}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-6xl">
                                            {milestone.icon}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ValuesSection
const ValuesSection = () => {
    const values = [
        {
            icon: "🔬",
            title: "Scientific Integrity",
            description: "Dedicated to upholding the highest standards of pharmaceutical research and development, we ensure every process is driven by precision, innovation, and ethical responsibility."
        },
        {
            icon: "⚕️",
            title: "Patient Safety",
            description: "Our products undergo rigorous quality control and pharmacovigilance, ensuring they meet and exceed global safety standards for optimal patient well-being."
        },
        {
            icon: "🏥",
            title: "Medical Excellence",
            description: "We collaborate closely with healthcare professionals to develop solutions that enhance treatment outcomes and address evolving medical needs."
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <AiFillSafetyCertificate className="text-2xl text-accentColor" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                            Our Commitment
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Professional Standards in Healthcare
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/95 dark:bg-gray-800/95 p-8 border-l-4 border-accentColor shadow-lg cursor-pointer"
                            whileHover={{ y: -8, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-16 h-16 bg-white dark:bg-gray-900  flex items-center justify-center mb-6 shadow-md">
                                <span className="text-2xl">{value.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// CTA Section
const CTA = () => {
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
                    
                    <div className="space-y-8">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
                        >
                            Ready to Make an Impact?
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-base sm:text-lg text-left text-white/90 max-w-2xl mx-auto"
                        >
                            Join us in transforming global healthcare through innovative pharmaceutical solutions. 
                            Together, we can advance patient care and contribute to a healthier future.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
                        >
                            <button 
                                onClick={() => router.push('/contact')}
                                className="group px-8 py-4 bg-white text-accentColor font-semibold 
                                         transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                                         hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 
                                         active:translate-y-0 transform-gpu"
                            >
                                <span className="flex items-center justify-center gap-3">
                                    Contact Us
                                    <svg 
                                        className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                            
                            <button 
                                onClick={() => router.push('/apply-for-a-job')}
                                className="group px-8 py-4 border-2 border-white text-white
                                         font-semibold transition-all duration-300
                                         hover:bg-white/10 hover:-translate-y-1 
                                         active:translate-y-0 transform-gpu"
                            >
                                <span className="flex items-center justify-center gap-3">
                                    Join Our Team
                                    <svg 
                                        className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </motion.div>
                    </div>
                    
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

export default function About() {
    return (
        <div className="bg-white dark:bg-gray-900 overflow-x-hidden">
            <ScrollProgress />
            <NavBar />
            <HeroSection />
            <div className="space-y-1"> {/* Remove visual gaps between sections */}
                <FadeInWhenVisible>
                    <ImpactStats />
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <MissionSection />
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <HistorySection />
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <ValuesSection />
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <CTA />
                </FadeInWhenVisible>
            </div>
            <ScrollToTopButton /> {/* Remove smooth prop */}
            <Footer />
        </div>
    );
}

// Update the CountUpCard component
const CountUpCard: React.FC<CountUpCardProps> = ({ number, label, delay }) => {
  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 shadow-lg border-l-4 border-accentColor"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{number}</h3>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
  );
};
