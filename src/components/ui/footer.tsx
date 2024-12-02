"use client"
import Link from "next/link";
import {FaMapMarkedAlt, FaPhoneAlt, FaTelegram} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FaSquareInstagram, FaVk} from "react-icons/fa6";

export default function Footer()  {
    const year = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-gray-800 dark:bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <h2 className="text-lg font-bold">ESCOM</h2>
                        <p className="text-sm mt-2">ESCOM is a pharmaceutical company that produces a wide range of
                            medicines</p>
                        <p className="text-sm mt-2">The leading enterprise of the Russian pharmaceutical industry.</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Contact Us</h2>
                        <div className="flex flex-row items-center mt-2">
                            <FaPhoneAlt className="text-xl"/>
                            <p className="text-sm ml-2">+7 (8652) 33-33-33</p>
                        </div>
                        <div className="flex flex-row item-center mt-2">
                            <MdEmail className="text-xl"/>
                            <p className="text-sm ml-2">info@escom.group</p>
                        </div>
                        <div className="flex flex-row item-center mt-2">
                            <Link href="https://www.google.com/maps/place/ESCOM/@45.0166667,41.9666667,15z/data=!4m6!3m5!1s0x40f04f0000000001:0x6200000000000000!8m2!3d45.0166667!4d41.9666667!16s%2Fg%2F11c48yf53j?entry=ttu" target="_blank">
                             <div className="flex flex-row justify-center hover:text-accentColor transition-all duration-300">
                             <FaMapMarkedAlt className="text-xl"/>
                             <p className="text-sm ml-2">Russia 355000, Stavropol, Staromarievskoye highway 9</p>
                             </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-bold">Social Media</h2>
                        <div className="flex flex-row items-center mt-2">
                            <Link className="flex flex-row items-center hover:text-accentColor transition-all duration-300" href="https://www.instagram.com/escom.group/" target="_blank">
                            <FaSquareInstagram className="text-xl "/>
                            <p className="text-sm ml-2">Instagram</p>
                            </Link>
                        </div>
                        <div className="flex flex-row item-center mt-2">
                            <Link className="flex flex-row items-center hover:text-accentColor transition-all duration-300" href="https://t.me/escomgroup/" target="_blank">
                            <FaTelegram className="text-xl"/>
                            <p className="text-sm ml-2">Telegram</p>
                            </Link>
                        </div>
                        <div className="flex flex-row item-center mt-2">
                            <Link className="flex flex-row items-center hover:text-accentColor transition-all duration-300" href="https://vk.com/escom.group" target="_blank">
                            <FaVk className="text-xl"/>
                            <p className="text-sm ml-2">VK</p>      
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Subscribe</h2>
                        <p className="text-sm mt-2">Subscribe to our newsletter to get the latest news and updates.</p>
                        <div className="flex flex-row items-center mt-2">
                            <input type="email" placeholder="Enter your email"
                                   className="bg-gray-900 dark:bg-gray-800 text-white px-4 py-2"/>
                            <button
                                className="bg-accentColor text-white font-bold py-2 px-4 ml-2 hover:bg-green-900">Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center text-sm">
                    <p>© {year} ESCOM. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}