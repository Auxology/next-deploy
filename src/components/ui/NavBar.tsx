"use client"
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBox, FaCog, 
         FaBriefcase, FaEnvelope, FaBook, FaUsers, FaChartLine, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/../public/logo.svg";

// Types
type SubMenuItem = {
  title: string;
  href: string;
  key: string;
};

type MenuItem = {
  title: string;
  href: string;
  key: string;
  subItems?: SubMenuItem[];
};

// Menu Configuration
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
  searchInput: `w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 
                dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 
                backdrop-blur-sm text-gray-900 dark:text-white 
                focus:ring-2 focus:ring-red-500/30 focus:border-red-500 
                transition-all duration-200 shadow-sm`,
  menuItem: `flex items-center justify-between p-4 
             active:bg-gray-100 dark:active:bg-gray-700 
             transition-colors duration-150`,
  iconContainer: `w-10 h-10 rounded-xl flex items-center justify-center 
                  transition-colors duration-150`,
  actionButton: `w-full bg-red-600 hover:bg-red-700 active:bg-red-800 
                 text-white font-medium px-4 py-3 rounded-xl 
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
    <div className="relative">
      <input
        type="text"
        placeholder="Search anything..."
        className={styles.searchInput}
      />
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
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
              <div key={item.key} className="relative group">
                {/* Desktop Menu Item */}
                <Link 
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium
                    relative group-hover:text-red-600
                    ${isActive(item.href) ? 'text-red-600' : 'text-gray-900 dark:text-white'}`}
                >
                  {item.title}
                  {item.subItems && item.subItems.length > 0 && (
                    <FaChartLine className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 
                                 scale-x-0 group-hover:scale-x-100 
                                 transition-transform duration-300 origin-left" />
                </Link>

                {/* Desktop Dropdown */}
                {item.subItems && item.subItems.length > 0 && (
                  <div className="absolute left-0 invisible group-hover:visible 
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-200 pt-2">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                                  ring-1 ring-black/5 overflow-hidden min-w-[200px]">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          href={subItem.href}
                          className="flex items-center gap-3 px-4 py-3 
                                   hover:bg-gray-50 dark:hover:bg-gray-700/50 
                                   text-gray-900 dark:text-white group/item"
                        >
                          {getItemIcon(subItem.key)}
                          <span>{subItem.title}</span>
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
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
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
                <div key={item.key} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                  <div onClick={() => item.subItems && toggleSubItems(item.key)}>
                    <div className={styles.menuItem}>
                      <div className="flex items-center gap-3">
                        <span className={styles.iconContainer}>
                          {getItemIcon(item.key)}
                        </span>
                        <span className="font-medium">{item.title}</span>
                      </div>
                      {item.subItems && item.subItems.length > 0 && (
                        <FaChartLine className={`w-4 h-4 transition-transform duration-200 
                          ${openItem === item.key ? 'rotate-180' : ''}`} />
                      )}
                    </div>
                  </div>

                  {/* Mobile Subitems */}
                  {item.subItems && item.subItems.length > 0 && openItem === item.key && (
                    <div className="bg-gray-50 dark:bg-gray-800/50">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          href={subItem.href}
                          className="flex items-center gap-3 px-4 py-3 
                                   hover:bg-gray-100 dark:hover:bg-gray-700/50"
                        >
                          <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 
                                         flex items-center justify-center">
                            {getItemIcon(subItem.key)}
                          </span>
                          <span className="text-sm font-medium">{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
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
  );
}