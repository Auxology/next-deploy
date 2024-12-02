"use client";
import BestSellersSection from "@/components/sections/home/BestSeller";
import CTASection from "@/components/sections/home/CTA";
import HeroSection from "@/components/sections/home/HeroSection";
import NewsSection from "@/components/sections/home/NewsSection";
import ProductionSection from "@/components/sections/home/Production";
import WhoAreWe from "@/components/sections/home/WhoAreWe";
import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/NavBar";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accentColor/50 origin-left z-50"
        style={{ scaleX }}
      />
      <main className="relative">
        <HeroSection />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <CTASection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <WhoAreWe />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ProductionSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <BestSellersSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <NewsSection />
        </motion.div>
      </main>
      <ScrollToTopButton />
      <Footer />
    </motion.div>
  );
}
