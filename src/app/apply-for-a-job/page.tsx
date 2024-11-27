"use client"
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import CoffeeBreak from "@/../public/CoffeeBreak.svg"
import { DynamicBackground } from "@/components/ui/dynamic-background";

const NoJobOpeningsPage = () => {
  return (
    <section className="flex-1 flex items-center justify-center">
      <DynamicBackground/>
      <div className="container mx-auto max-w-4xl w-full py-20 md:py-24">
        <div className="flex flex-col items-center justify-center text-center space-y-10 md:space-y-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 
                        after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur-xl after:-z-10 after:rounded-full after:scale-90">
            <Image
              src={CoffeeBreak}
              alt="Coffee Break Illustration"
              fill
              priority
              className="object-contain animate-float"
            />
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight 
                         bg-clip-text
                         drop-shadow-sm">
              We're Brewing Something Special! ☕️
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              While we don't have any openings right now, great opportunities are cooking! 
              Want to be the first to know when we're hiring?
            </p>
          </div>

          <div className="flex flex-col w-full sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <button className="flex-1 px-6 py-4 sm:py-3 bg-accentColor text-white rounded-full
                             hover:bg-opacity-90 transition-all duration-300 text-lg font-medium
                             hover:transform hover:-translate-y-1 active:translate-y-0
                            ">
              Join Telegram
            </button>
            <button className="flex-1 px-6 py-4 sm:py-3 border-2 border-accentColor text-accentColor rounded-full
                             hover:bg-accentColor hover:text-white transition-all duration-300 text-lg font-medium
                             hover:transform hover:-translate-y-1 active:translate-y-0
                             ">
              Follow LinkedIn
            </button>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl transition-all duration-300 cursor-pointer
                         bg-white/70 backdrop-blur-sm
                         hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                         hover:border-transparent"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accentColor/20 to-accentColor/10 
                               flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                               shadow-inner">
                    <span className="text-2xl group-hover:animate-bounce">{benefit.icon}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-accentColor group-hover:text-accentColor/90">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base group-hover:text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Culture",
    description: "Remote-friendly workspace with flexible hours",
    icon: "🏠"
  },
  {
    title: "Benefits",
    description: "Competitive packages and wellness programs",
    icon: "🎯"
  },
  {
    title: "Growth",
    description: "Continuous learning and career development",
    icon: "📈"
  }
];

const JobOpeningsPage = () => {
  return (
    <section className="flex-1 flex items-center justify-center">
      <DynamicBackground/>
    </section>
  )
}

export default function ApplyForAJobPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <NoJobOpeningsPage />
        <JobOpeningsPage />
      </main>
      <Footer />
    </div>
  );
}