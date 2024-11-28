"use client";
import Link from "next/link";
import NavBar from "@/components/ui/NavBar";
import { FaSquareInstagram, FaVk, FaTelegram } from "react-icons/fa6";
import Footer from "@/components/ui/footer";
import { motion } from "framer-motion";
import { DynamicBackground } from "@/components/ui/dynamic-background";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            
            <main className="flex-1 flex items-center justify-center relative min-h-[calc(100vh-4rem)] mt-16">
                <DynamicBackground />
                
                <div className="w-full py-20 px-4">
                    <div className="w-full max-w-5xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-2xl overflow-hidden"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                                {/* Contact Info Section */}
                                <div className="p-8 md:p-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg">
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-accentColor to-accentColor/80 bg-clip-text text-transparent mb-8">
                                        Contact Us Directly
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-3 group">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accentColor/10 to-transparent
                                                        flex items-center justify-center transition-transform duration-300
                                                        group-hover:scale-110">
                                                <span className="text-xl">📞</span>
                                            </div>
                                            <p className="text-gray-700">+7 (8652) 33-33-33</p>
                                        </div>
                                        
                                        <div className="flex items-center space-x-3 group">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accentColor/10 to-transparent
                                                        flex items-center justify-center transition-transform duration-300
                                                        group-hover:scale-110">
                                                <span className="text-xl">📧</span>
                                            </div>
                                            <p className="text-gray-700">info@escom.group</p>
                                        </div>
                                        
                                        <Link 
                                            href="https://www.google.com/maps/search/?api=1&query=Russia+355000,+Stavropol,+Staromarievskoye+highway+9"
                                            className="flex items-center space-x-3 group hover:text-accentColor transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accentColor/10 to-transparent
                                                        flex items-center justify-center transition-transform duration-300
                                                        group-hover:scale-110">
                                                <span className="text-xl">📍</span>
                                            </div>
                                            <p className="text-gray-700 group-hover:text-accentColor transition-colors">
                                                Russia 355000, Stavropol,<br />Staromarievskoye highway 9
                                            </p>
                                        </Link>

                                        <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-6">
                                            Follow Us
                                        </h3>
                                        <div className="flex gap-4">
                                            {[FaSquareInstagram, FaTelegram, FaVk].map((Icon, index) => (
                                                <button 
                                                    key={index}
                                                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-accentColor/10 to-transparent
                                                             flex items-center justify-center transition-all duration-300
                                                             hover:scale-110 hover:shadow-lg hover:shadow-accentColor/20"
                                                >
                                                    <Icon className="text-2xl text-gray-700 hover:text-accentColor transition-colors" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form Section */}
                                <div className="p-8 md:p-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg">
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-accentColor to-accentColor/80 bg-clip-text text-transparent mb-8">
                                        Write Us a Message
                                    </h2>
                                    <form className="space-y-6">
                                        {['name', 'email'].map((field) => (
                                            <div key={field}>
                                                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                                                    {field}
                                                </label>
                                                <input
                                                    type={field}
                                                    required
                                                    placeholder={`Enter your ${field}`}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 
                                                             focus:outline-none focus:ring-2 focus:ring-accentColor/20 focus:border-accentColor
                                                             transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                                />
                                            </div>
                                        ))}
                                        
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                rows={4}
                                                required
                                                placeholder="Enter your message"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                                                         focus:outline-none focus:ring-2 focus:ring-accentColor/20 focus:border-accentColor
                                                         transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full px-8 py-4 bg-accentColor text-white rounded-lg
                                                     relative overflow-hidden group transition-all duration-300
                                                     hover:shadow-lg hover:shadow-accentColor/20"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                                                Send Message
                                                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
