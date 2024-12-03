// src/app/products/[page]/page.tsx
"use client";

import React, { use } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/footer";
import { DynamicBackground } from "@/components/ui/dynamic-background";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { AiFillSafetyCertificate } from "react-icons/ai";

const PRODUCTS_PER_PAGE = 9;
const TOTAL_PAGES = Math.ceil(products.length / PRODUCTS_PER_PAGE);

export default function ProductsPage({ params }: { params: Promise<{ page: string }> }) {
  const resolvedParams = use(params);
  const currentPage = parseInt(resolvedParams.page) || 1;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  // Error boundary for invalid page numbers
  if (currentPage < 1 || currentPage > TOTAL_PAGES) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <Link 
            href="/products/1"
            className="text-accentColor hover:underline"
          >
            Return to first page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 overflow-x-hidden">
      <NavBar />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accentColor/50 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <DynamicBackground />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-5 py-3 border-l-4 border-accentColor shadow-lg mx-auto mb-8">
                <AiFillSafetyCertificate className="text-2xl text-accentColor" />
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  GMP Certified Products
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Our <span className="text-accentColor">Product</span> Portfolio
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto">
                Discover our comprehensive range of pharmaceutical solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product, index) => (
                <div
                  key={product.title}
                  className="bg-white dark:bg-gray-800 p-6 shadow-lg group 
                           transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-64 mb-6 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs font-medium text-accentColor uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center gap-4">
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={`/products/${page}`}
                  className={`px-4 py-2 ${
                    currentPage === page
                      ? 'bg-accentColor text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  } transition-all duration-300`}
                >
                  {page}
                </Link>
              ))}
            </div>

            {/* Products Count */}
            <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
              Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of {products.length} products
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}