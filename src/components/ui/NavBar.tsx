/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
{/*This is the navigation bar for the website, we used react-icons for the icons, variables and styles are defined below*/}
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBox, FaCog, 
         FaBriefcase, FaEnvelope, FaBook, FaUsers, FaChartLine, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/../public/images/logo.svg";

// Types
type MenuItem = {
  title: string;
  href: string;
  key: string;
};

// Menu Configuration
const menuItems: MenuItem[] = [
  { title: "About", href: "/about", key: "about" },
  { title: "Products", href: "/products", key: "products" },
  { title: "Production", href: "/production", key: "production" },
  { title: "Apply for a Job", href: "/apply-for-a-job", key: "apply-for-a-job" },
  { title: "Contact", href: "/contact", key: "contact" }
];

// Icon Mapping
const iconMap: Record<string, JSX.Element> = {
  'home': <FaHome className="w-5 h-5 text-red-500" />,
  'about': <FaInfoCircle className="w-5 h-5 text-blue-500" />,
  'products': <FaBox className="w-5 h-5 text-green-500" />,
  'production': <FaCog className="w-5 h-5 text-purple-500" />,
  'apply-for-a-job': <FaBriefcase className="w-5 h-5 text-yellow-500" />,
  'contact': <FaEnvelope className="w-5 h-5 text-pink-500" />,
  'our-story': <FaBook className="w-5 h-5 text-blue-400" />,
  'our-team': <FaUsers className="w-5 h-5 text-blue-400" />,
  'our-impact': <FaChartLine className="w-5 h-5 text-blue-400" />
};

// Style Constants
const styles = {
  nav: "bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50 h-20",
  container: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full",
  searchInput: `w-full pl-12 pr-4 py-3 border-2 border-gray-300 
                dark:border-gray-700 bg-white dark:bg-gray-800 
                text-gray-900 dark:text-white text-base
                focus:ring-2 focus:ring-red-500 focus:border-red-500 
                hover:border-red-400
                shadow-md transition-all duration-200
                outline-none`,
  menuItem: `flex items-center justify-between p-4 
             active:bg-gray-100 dark:active:bg-gray-700 
             transition-colors duration-150`,
  iconContainer: `w-10 h-10 flex items-center justify-center 
                  transition-colors duration-150`,
  actionButton: `w-full bg-red-600 hover:bg-red-700 active:bg-red-800 
                 text-white font-medium px-4 py-3
                 transition-colors duration-150 shadow-sm 
                 flex items-center justify-center gap-2`
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (path: string) => pathname?.startsWith(path);
  const getItemIcon = (key: string) => iconMap[key] || iconMap['home'];
  const toggleSubItems = (key: string) => setOpenItem(openItem === key ? null : key);

  // Search Component
  const SearchInput = () => (
    <div className="relative group">
      <input
        type="text"
        placeholder="Search anything..."
        className={styles.searchInput}
      />
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 
                          text-gray-400 group-hover:text-red-500 
                          transition-colors duration-200" />
    </div>
  );

  return (
    <nav className={styles.nav}>
      {/* Main Navigation Bar */}
      <div className={styles.container}>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={Logo} alt="Logo" width={140} height={40} className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {menuItems.map((item) => (
              <div key={item.key} className="relative">
                <Link 
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium
                    relative hover:text-red-600
                    ${isActive(item.href) ? 'text-red-600' : 'text-gray-500 dark:text-white'}`}
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 
                                 scale-x-0 hover:scale-x-100 
                                 transition-transform duration-300 origin-left" />
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:block w-64">
            <SearchInput />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white dark:bg-gray-900 z-50">
          <div className="flex flex-col h-full">
            {/* Mobile Search */}
            <div className="p-4 bg-gradient-to-r from-red-50 to-white dark:from-gray-800 dark:to-gray-900">
              <SearchInput />
            </div>

            {/* Mobile Navigation Items */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
              {menuItems.map((item) => (
                <div key={item.key} className="bg-white dark:bg-gray-900 shadow-sm">
                  <Link href={item.href}>
                    <div className={styles.menuItem}>
                      <div className="flex items-center gap-3">
                        <span className={styles.iconContainer}>
                          {getItemIcon(item.key)}
                        </span>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile Action Button */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
              <button className={styles.actionButton}>
                <span>Contact Us</span>
                <FaEnvelope className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}