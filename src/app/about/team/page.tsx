// app/about/team/page.tsx
"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/footer";
import { DynamicBackground } from "@/components/ui/dynamic-background";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import { FaLinkedin, FaUsers, FaIndustry, FaFlask, FaBriefcaseMedical } from "react-icons/fa";
import Image from "next/image";

const departments = [
  {
    name: "Manufacturing",
    icon: <FaIndustry className="w-8 h-8" />,
    description: "Leading our state-of-the-art production facilities", // Added description
    leaders: [
      {
        name: "Vladimir Ivanov",
        role: "Director of Ampoule Production Plant",
        image: "/images/team/default-placeholder-businessman.png",
        linkedin: "#"
      },
      {
        name: "Tatiana Lagutina",
        role: "Director of Plant No. 2",
        image: "/images/team/default-placeholder-businesswoman.png",
        linkedin: "#"
      }
    ]
  },
  {
    name: "Research & Development",
    icon: <FaFlask className="w-8 h-8" />,
    leaders: [
      {
        name: "Nikolai Prilepa",
        role: "Director of Medical Preparations Plant No. 3",
        image: "/images/team/default-placeholder-businessman.png",
        linkedin: "#"
      }
    ]
  },
  {
    name: "Quality Control",
    icon: <FaBriefcaseMedical className="w-8 h-8" />,
    leaders: [
      {
        name: "Sergey Grishin",
        role: "Director of Plant No. 4",
        image: "/images/team/default-placeholder-businessman.png",
        linkedin: "#"
      }
    ]
  }
];

const TeamHero = () => (
  <section className="relative py-20 lg:py-32">
    <DynamicBackground />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto" // Reduced max-width
      >
        <div className="inline-flex items-center gap-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-5 py-3 border-l-4 border-accentColor shadow-lg mx-auto mb-8">
          <FaUsers className="text-2xl text-accentColor" />
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Our Leadership Team
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          Meet the <span className="text-accentColor">Experts</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto">
          Dedicated professionals driving innovation in pharmaceutical manufacturing
        </p>
      </motion.div>
    </div>
  </section>
);

const DepartmentSection = ({ department, index }: { department: any, index: number }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="py-16 border-b border-gray-100 dark:border-gray-800 last:border-none"
  >
    <div className="container max-w-5xl mx-auto px-4"> {/* Added max-width constraint */}
      <div className="text-center mb-12"> {/* Centered department header */}
        <div className="inline-flex items-center gap-4 mb-4">
          <div className="p-4 bg-accentColor/10 text-accentColor rounded-xl">
            {department.icon}
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {department.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {department.description}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"> {/* Centered grid, removed 3 columns */}
        {department.leaders.map((leader: any, idx: number) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 shadow-lg group rounded-xl overflow-hidden"
          >
            <div className="relative h-72 overflow-hidden"> {/* Reduced height */}
              <Image 
                src={leader.image} 
                alt={leader.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 text-center"> {/* Centered card content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {leader.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {leader.role}
              </p>
              <a 
                href={leader.linkedin}
                className="inline-flex items-center gap-2 text-accentColor hover:text-accentColor/80
                         transition-colors duration-300"
              >
                <FaLinkedin className="text-xl" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default function TeamPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white dark:bg-gray-900">
      <NavBar />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accentColor/50 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <main className="py-20">
        <TeamHero />
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <DepartmentSection department={dept} index={index} />
          </motion.div>
        ))}
      </main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}