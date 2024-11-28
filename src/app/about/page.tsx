"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/footer";
import { CountUpCard } from "@/components/ui/CountUpCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ScrollToTopButton from "react-scroll-to-top";
import { DynamicBackground } from '@/components/ui/dynamic-background';

const HeroSection = () => {
    return (
        <section className="min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Dynamic Background */}
        <DynamicBackground/>
                
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
            <motion.div 
                className="absolute w-64 h-64 bg-accentColor/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                }}
            />
        </div>

        <motion.div 
            className="container mx-auto px-4 text-center relative z-10"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <span className="inline-block px-4 py-1 bg-accentColor/10 text-accentColor rounded-full text-sm font-medium mb-6">
                Leading Pharmaceutical Innovation
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
                Advancing Global <span className="text-accentColor">Healthcare</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg mb-8">
                Pioneering breakthrough treatments and innovative solutions 
                for a healthier tomorrow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-accentColor text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:transform hover:-translate-y-1 active:translate-y-0">
                    Our Products
                    <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                </button>
                <button className="border-2 border-accentColor text-accentColor px-8 py-3 rounded-lg font-semibold hover:bg-accentColor hover:text-white transition-all hover:transform hover:-translate-y-1 active:translate-y-0">
                    Research & Development
                    <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                </button>
            </div>
        </motion.div>
        </section>
    )
}

const ImpactStats = () => {
    return (
        <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" />
        <div className="container mx-auto px-4 relative">
            <SectionTitle
                subtitle="Our Impact"
                title="Making a Difference"
                alignment="center"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {[
                    { number: "40+", label: "Years Experience" },
                    { number: "200+", label: "Research Projects" },
                    { number: "80+", label: "Global Patents" },
                    { number: "50M+", label: "Lives Impacted" },
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

const MissionSection = () => {
    return (
        <section className="py-20">
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
                                    "Breakthrough Research & Development",
                                    "Global Healthcare Solutions",
                                    "Patient-Centric Approach",
                                    "Sustainable Healthcare Practices"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <span className="text-accentColor">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        
                        <motion.div 
                            className="relative h-[500px] rounded-2xl overflow-hidden group"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src="/research-lab.jpg"
                                alt="Research Laboratory"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    </div>
                </div>
            </section>
    )
}

const HistorySection = () => {
    return (
        <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex justify-center items-center w-full">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Our History
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
    )
}

const ValuesSection = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        subtitle="Our Values"
                        title="What Drives Us Forward"
                        alignment="center"
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {[
                            {
                                icon: "🔬",
                                title: "Scientific Excellence",
                                description: "Pushing the boundaries of pharmaceutical innovation"
                            },
                            {
                                icon: "🤝",
                                title: "Patient First",
                                description: "Committed to improving patient outcomes globally"
                            },
                            {
                                icon: "🌍",
                                title: "Global Impact",
                                description: "Creating sustainable healthcare solutions"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
    )
}

const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-accentColor to-green-700">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Make an Impact?
                    </h2>
                    <p className="max-w-2xl mx-auto mb-8 opacity-90">
                        Join us in our mission to transform global healthcare through 
                        innovative pharmaceutical solutions.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-white text-accentColor px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:transform hover:-translate-y-1 active:translate-y-0">
                            Contact Us
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-accentColor transition-all hover:transform hover:-translate-y-1 active:translate-y-0">
                            Join Our Team
                        </button>
                    </div>
                </div>
            </section>
    )
}

export default function About() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <NavBar />
            <HeroSection />
            <ImpactStats />
            <MissionSection />
            <HistorySection />
            <ValuesSection />
            <CTA />

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
            <Footer />
        </div>
    );
}
