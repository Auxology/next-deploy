/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
{/*This is the navigation bar for the website, we used react-icons for the icons, variables and styles are defined below*/}
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBox, FaCog, 
         FaBriefcase, FaEnvelope, FaBook, FaUsers, FaChartLine, FaSearch, FaFlask, FaSyringe, FaShieldVirus, FaHandHoldingHeart } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/../public/images/logo.svg";
import { motion } from "framer-motion";

// Types
type MenuItem = {
  title: string;
  href: string;
  key: string;
  hasDropdown?: boolean;
};

// Add new type for About menu items
type AboutMenuItem = {
  title: string;
  description: string;
  icon: JSX.Element;
  href: string;
};

// Add About dropdown items
const aboutMenuItems: AboutMenuItem[] = [
  {
    title: "Our Team",
    description: "Meet our dedicated professionals",
    icon: <FaUsers className="w-5 h-5 text-blue-500" />,
    href: "/about/team"
  },
  {
    title: "Company Structure",
    description: "Learn about our organization",
    icon: <FaChartLine className="w-5 h-5 text-purple-500" />,
    href: "/about/structure"
  },
  {
    title: "Social Projects",
    description: "Our community initiatives",
    icon: <FaHandHoldingHeart className="w-5 h-5 text-red-500" />,
    href: "/about/social-projects"
  }
];


// Update type name
type ProductMenuItem = {
  title: string;
  description: string;
  icon: JSX.Element;
  href: string;
};

// Menu Configuration
const menuItems: MenuItem[] = [
  { 
    title: "About", 
    href: "/about", 
    key: "about",
    hasDropdown: true 
  },
  { title: "Products", href: "/products", key: "products" },
  { title: "Production", href: "/production", key: "production" },
  { title: "Apply for a Job", href: "/apply-for-a-job", key: "apply-for-a-job" },
  { title: "Contact", href: "/contact", key: "contact" }
];

// Replace production items with product items
const productMenuItems: ProductMenuItem[] = [
  {
    title: "Infusion Solutions",
    description: "High-quality solutions for medical needs",
    icon: <FaFlask className="w-5 h-5 text-blue-500" />,
    href: "/products/infusion"
  },
  {
    title: "Injection Drugs",
    description: "Advanced injection medications",
    icon: <FaSyringe className="w-5 h-5 text-green-500" />,
    href: "/products/injection"
  },
  {
    title: "Antibacterials & Disinfectants",
    description: "Essential sanitization products",
    icon: <FaShieldVirus className="w-5 h-5 text-purple-500" />,
    href: "/products/antibacterials"
  }
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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (path: string) => pathname?.startsWith(path);
  const getItemIcon = (key: string) => iconMap[key] || iconMap['home'];
  const toggleSubItems = (key: string) => setOpenItem(openItem === key ? null : key);
  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

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
    <header>
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
              <div key={item.key} className="relative group dark:bg-gray-900">
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
                
                {/* Dropdown for Products */}
                {item.key === 'products' && (
                  <div 
                    className="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 
                               w-80 mt-2 bg-white dark:bg-gray-800 shadow-xl z-50
                               transition-all duration-200 ease-in-out
                               group-hover:translate-y-0 translate-y-1"
                  >
                    <div 
                      className="p-4 space-y-4"
                      onMouseEnter={(e) => e.currentTarget.parentElement?.classList.add('visible', 'opacity-100')}
                      onMouseLeave={(e) => e.currentTarget.parentElement?.classList.remove('visible', 'opacity-100')}
                    >
                      {productMenuItems.map((prodItem, index) => (
                        <Link 
                          href={prodItem.href} 
                          key={index}
                          className="flex items-start p-3 hover:bg-gray-50 dark:hover:bg-gray-700 
                                     transition-colors duration-200"
                        >
                          <div className="flex-shrink-0 mt-1">
                            {prodItem.icon}
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {prodItem.title}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {prodItem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dropdown for About */}
                {item.key === 'about' && (
                  <div 
                    className="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 
                               w-80 mt-2 bg-white dark:bg-gray-800 shadow-xl z-50
                               transition-all duration-200 ease-in-out
                               group-hover:translate-y-0 translate-y-1"
                  >
                    <div 
                      className="p-4 space-y-4"
                      onMouseEnter={(e) => e.currentTarget.parentElement?.classList.add('visible', 'opacity-100')}
                      onMouseLeave={(e) => e.currentTarget.parentElement?.classList.remove('visible', 'opacity-100')}
                    >
                      {aboutMenuItems.map((aboutItem, index) => (
                        <Link 
                          href={aboutItem.href} 
                          key={index}
                          className="flex items-start p-3 hover:bg-gray-50 dark:hover:bg-gray-700 
                                     transition-colors duration-200"
                        >
                          <div className="flex-shrink-0 mt-1">
                            {aboutItem.icon}
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {aboutItem.title}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {aboutItem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
                  <div className="flex items-center justify-between p-4">
                    <Link href={item.href} className="flex items-center gap-3">
                      <span className={styles.iconContainer}>
                        {getItemIcon(item.key)}
                      </span>
                      <span className="font-medium">{item.title}</span>
                    </Link>
                    
                    {item.key === 'products' && (
                      <button 
                        onClick={() => toggleSubmenu('products')}
                        className="p-2"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            openSubmenu === 'products' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}

                    {item.key === 'about' && (
                      <button 
                        onClick={() => toggleSubmenu('about')}
                        className="p-2"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            openSubmenu === 'about' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown for Products */}
                  {item.key === 'products' && (
                    <motion.div
                      initial="collapsed"
                      animate={openSubmenu === 'products' ? "open" : "collapsed"}
                      variants={{
                        open: { height: 'auto', opacity: 1 },
                        collapsed: { height: 0, opacity: 0 }
                      }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-10 py-2 space-y-2">
                        {productMenuItems.map((prodItem, index) => (
                          <Link 
                            href={prodItem.href} 
                            key={index}
                            className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex-shrink-0">
                              {prodItem.icon}
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium">
                                {prodItem.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                {prodItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Mobile Dropdown for About */}
                  {item.key === 'about' && (
                    <motion.div
                      initial="collapsed"
                      animate={openSubmenu === 'about' ? "open" : "collapsed"}
                      variants={{
                        open: { height: 'auto', opacity: 1 },
                        collapsed: { height: 0, opacity: 0 }
                      }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-10 py-2 space-y-2">
                        {aboutMenuItems.map((aboutItem, index) => (
                          <Link 
                            href={aboutItem.href} 
                            key={index}
                            className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex-shrink-0">
                              {aboutItem.icon}
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium">
                                {aboutItem.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                {aboutItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
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
    </header>
  );
}