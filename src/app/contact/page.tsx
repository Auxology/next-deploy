"use client";
import Link from "next/link";
import NavBar from "@/components/ui/NavBar";
import { FaSquareInstagram, FaVk, FaTelegram } from "react-icons/fa6";
import Footer from "@/components/ui/footer";
import { motion } from "framer-motion";
import { DynamicBackground } from "@/components/ui/dynamic-background";

export default function Contact() {
    return (
        <div>
            {/* Navigation Bar */}
            <NavBar />

            {/* Main Section */}
            <div className="min-h-screen relative flex items-center justify-center py-20">
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
                
                {/* Content */}
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Contact Info Section */}
                            <div className="p-6 rounded-xl bg-white/50">
                                <h2 className="text-3xl font-bold text-accentColor dark:text-white mb-6">
                                    Contact Us Directly
                                </h2>
                                <div className="space-y-8">
                                    <p className="text-gray-900 dark:text-white">
                                        <strong>Phone:</strong> +7 (8652) 33-33-33
                                    </p>
                                    <p className="text-gray-900 dark:text-white">
                                        <strong>Email:</strong> info@escom.group
                                    </p>
                                    <Link className="flex" href="https://www.google.com/maps/search/?api=1&query=Russia+355000,+Stavropol,+Staromarievskoye+highway+9">
                                        <p className="text-gray-900 dark:text-white hover:text-green-700 transition-colors">
                                        <strong>Address:</strong> Russia 355000, Stavropol, Staromarievskoye highway 9
                                        </p>
                                    </Link>
                                    <h2 className="text-2xl font-bold text-accentColor dark:text-white mt-6">
                                        Follow Us on Social Media
                                    </h2>
                                    <div className="flex flex-row gap-6">
                                        <FaSquareInstagram
                                            className="text-4xl hover:text-green-700 transition-colors"
                                            aria-label="Instagram"
                                        />
                                        <FaTelegram
                                            className="text-4xl hover:text-green-700 transition-colors"
                                            aria-label="Telegram"
                                        />
                                        <FaVk
                                            className="text-4xl hover:text-green-700 transition-colors"
                                            aria-label="VK"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form Section */}
                            <div className="p-6 rounded-xl bg-white/50">
                                <h2 className="text-3xl font-bold text-accentColor dark:text-white mb-6">
                                    Write Us a Message
                                </h2>
                                <form className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            placeholder="Enter your name"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-accentColor focus:border-accentColor dark:bg-gray-800 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            placeholder="Enter your email"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-accentColor focus:border-accentColor dark:bg-gray-800 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            required
                                            placeholder="Enter your message"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-accentColor focus:border-accentColor dark:bg-gray-800 dark:text-white"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-accentColor text-white font-bold py-3 px-6 rounded-lg hover:bg-green-900 transition-colors transform hover:scale-105 duration-200"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
