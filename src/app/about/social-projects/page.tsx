"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/footer";
import { DynamicBackground } from "@/components/ui/dynamic-background";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import { FaHandHoldingHeart, FaSchool, FaChild } from "react-icons/fa";
import { useRouter } from "next/navigation";

// Add these interfaces at the top of the file
interface ProjectStats {
  [key: string]: string;
}

interface Project {
  title: string;
  icon: React.ReactNode;
  description: string;
  stats: ProjectStats;
  image: string;
}

const socialProjects: Project[] = [
  {
    title: "We Don't Abandon Our Own",
    icon: <FaHandHoldingHeart className="w-8 h-8" />,
    description: "Humanitarian aid initiative delivering 40 tons of pharmaceutical products to support communities in need.",
    stats: {
      aid: "40 tons",
      reach: "2 regions",
      type: "Medical supplies"
    },
    image: "/images/social/humanitarian.jpg"
  },
  {
    title: "School Disinfection Program",
    icon: <FaSchool className="w-8 h-8" />,
    description: "COVID-19 prevention through systematic disinfection of educational institutions using Escochlor.",
    stats: {
      schools: "31+",
      cities: "2",
      product: "Escochlor"
    },
    image: "/images/social/school.jpg"
  },
  {
    title: "Children of the Russian Land",
    icon: <FaChild className="w-8 h-8" />,
    description: "Monthly support and engagement program for orphanages, featuring activities and celebrations.",
    stats: {
      visits: "Monthly",
      activities: "Workshops",
      impact: "Ongoing"
    },
    image: "/images/social/children.jpg"
  }
];

const HeroSection = () => (
  <section className="relative py-20 lg:py-32">
    <DynamicBackground />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-5 py-3 border-l-4 border-accentColor shadow-lg mx-auto mb-8">
          <FaHandHoldingHeart className="text-2xl text-accentColor" />
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Social Responsibility
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          Making a <span className="text-accentColor">Difference</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto">
          Supporting communities through impactful social initiatives
        </p>
      </motion.div>
    </div>
  </section>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-white dark:bg-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
               overflow-hidden flex flex-col border border-gray-100 dark:border-gray-700
               group hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
               transition-shadow duration-500"
  >
    <div className="relative h-80 overflow-hidden">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    
    <div className="p-8 flex-1 flex flex-col border-t border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 bg-accentColor/10 text-accentColor">
          {project.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8 flex-1">
        {project.description}
      </p>
      
      <div className="grid grid-cols-3 gap-4 border-t border-gray-100 dark:border-gray-700 pt-6">
        {Object.entries(project.stats).map(([key, value]) => (
          <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-700/50">
            <div className="text-xl font-bold text-accentColor mb-1">
              {value}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
              {key}
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {socialProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => {
  const router = useRouter();
  
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient with mesh pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-accentColor to-green-700 opacity-95" />
      
      <motion.div 
        className="container relative z-10 mx-auto px-4 sm:px-6 py-20 sm:py-28"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Top Border Line */}
          <div className="w-24 h-1 bg-white mb-12" />
          
          <div className="space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              Ready to Make an Impact?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-left text-white/90 max-w-2xl"
            >
              Join us in our mission to support communities and create positive change 
              through innovative healthcare solutions and social initiatives.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button 
                onClick={() => router.push('/contact')}
                className="group px-8 py-4 bg-white text-accentColor font-semibold 
                         transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                         hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 
                         active:translate-y-0 transform-gpu"
              >
                <span className="flex items-center justify-center gap-3">
                  Get Involved
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button 
                className="group px-8 py-4 border-2 border-white text-white
                         font-semibold transition-all duration-300
                         hover:bg-white/10 hover:-translate-y-1 
                         active:translate-y-0 transform-gpu"
              >
                <span className="flex items-center justify-center gap-3">
                  Learn More
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
          
          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
          >
            {[
              { number: "40+", label: "Tons of Aid Delivered" },
              { number: "31+", label: "Schools Protected" },
              { number: "100%", label: "Commitment" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default function SocialPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accentColor/50 z-50 origin-left"
        style={{ scaleX }}
      />
      <main className="py-20">
        <HeroSection />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ProjectsSection />
        </motion.div>
      </main>
      <CTASection />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}