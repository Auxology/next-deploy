"use client"
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/../public/logo.svg";

type MenuItem = {
  title: string;
  href: string;
  key: string;
  subItems?: {
    title: string;
    href: string;
    key: string;
  }[];
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    {
      title: "About",
      href: "/about",
      key: "about",
      subItems: [
        { title: "Our Story", href: "/about/our-story", key: "our-story" },
        { title: "Our Team", href: "/about/our-team", key: "our-team" },
        { title: "Our Impact", href: "/about/our-impact", key: "our-impact" }
      ]
    },
    { title: "Products", href: "/products", key: "products" },
    { title: "Production", href: "/production", key: "production" },
    { title: "Apply for a Job", href: "/apply-for-a-job", key: "apply-for-a-job" },
    { title: "Contact", href: "/contact", key: "contact" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => pathname?.startsWith(path);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50 h-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center h-full">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              <Image src={Logo} alt="Logo" width={100} height={100} />
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link 
                  key={item.key}
                  href={item.href} 
                  className={`text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:text-red-600 ${
                    isActive(item.href) ? 'text-red-600' : 'hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block flex-shrink-0">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button 
                className="absolute right-3 top-1/2 -translate-y-1/2"
                aria-label="Search"
              >
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:hidden ml-auto">
            <button 
              onClick={toggleMenu} 
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-4 space-y-2 sm:px-6">
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accentColor"
              />
              <button 
                className="absolute right-3 top-1/2 -translate-y-1/2"
                aria-label="Search"
              >
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href) ? 'text-accentColor' : 'hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}