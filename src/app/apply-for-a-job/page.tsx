"use client"
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/footer";
import { DynamicBackground } from "@/components/ui/dynamic-background";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { AiFillStar, AiOutlineArrowRight } from 'react-icons/ai';

const benefits = [
  {
    title: "Work Culture",
    description: "Remote-friendly workspace with flexible hours and global team collaboration",
    icon: "🏠",
    color: "border-blue-500"
  },
  {
    title: "Benefits Package",
    description: "Comprehensive healthcare, wellness programs, and competitive compensation",
    icon: "🎯",
    color: "border-green-500"
  },
  {
    title: "Career Growth",
    description: "Mentorship programs, learning budget, and clear advancement paths",
    icon: "📈",
    color: "border-purple-500"
  }
];

const jobCategories = [
  { name: "Research & Development", count: 12, icon: "🧬" },
  { name: "Clinical Operations", count: 8, icon: "⚕️" },
  { name: "Quality Control", count: 5, icon: "🔬" },
  { name: "Marketing", count: 4, icon: "📊" }
];

const testimonials = [
  {
    quote: "The growth opportunities here are incredible. I started as an analyst and now lead a team of researchers.",
    author: "Sarah Chen",
    role: "Research Lead",
    rating: 5
  },
  // Add more testimonials...
];

// Add interface for props
interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
}

// Update component with proper typing
const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function ApplyForAJobPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 overflow-hidden">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section with DynamicBackground */}
        <section className="relative py-20 lg:py-32">
          <DynamicBackground />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-5 py-3 border-l-4 border-accentColor shadow-lg mx-auto mb-8"
              >
                <span className="text-2xl">💼</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                  WE'RE HIRING!
                </span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
              >
                Shape the Future of <span className="text-accentColor relative">Healthcare
                <span className="absolute bottom-0 left-0 w-full h-2 bg-accentColor/10"></span>
                </span>
              </motion.h1>
              
              <motion.p
                className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-12"
              >
                Join our mission to revolutionize global healthcare through innovation and dedication
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-accentColor text-white px-8 py-4 font-semibold flex items-center justify-center gap-2 group"
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                >
                  View Open Positions
                  <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  className="border-2 border-gray-200 dark:border-gray-700 px-8 py-4 font-semibold"
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                >
                  Learn About Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "1000+", label: "Global Employees" },
                { number: "45+", label: "Countries" },
                { number: "96%", label: "Employee Satisfaction" },
                { number: "4.8", label: "Glassdoor Rating" },
              ].map((stat, index) => (
                <FadeInWhenVisible key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-accentColor mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Join Our Team?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                We offer more than just a job - it's a career with purpose
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={`bg-white/95 dark:bg-gray-800/95 p-8 border-l-4 ${benefit.color} shadow-lg`}
                  whileHover={{ y: -8 }}
                >
                  <div className="w-16 h-16 bg-gray-50 dark:bg-gray-700 flex items-center justify-center mb-6 ">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Open Positions
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Find your perfect role in our growing team
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {jobCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 cursor-pointer group shadow-lg border-1"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{category.icon}</span>
                    <span className="text-accentColor font-bold">{category.count} roles</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-accentColor transition-colors">
                    {category.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <FadeInWhenVisible key={index} delay={index * 0.2}>
                  <div className="bg-white dark:bg-gray-800 p-8 border-l-4 border-accentColor">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <AiFillStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-accentColor">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Make an Impact?
            </h2>
            <motion.button
              className="bg-white text-accentColor px-12 py-4 font-semibold inline-flex items-center gap-2 group"
              whileHover={{ y: -4 }}
              whileTap={{ y: 0 }}
            >
              Apply Now
              <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}