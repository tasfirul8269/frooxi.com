import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[70vh] overflow-x-hidden" style={{
      backgroundImage: `
        linear-gradient(to right, #f8f9fa 1px, transparent 1px),
        linear-gradient(to bottom, #f8f9fa 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    }}>
      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
                Your Vision
                <br />
                <span className="text-gray-600">Our Innovation</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              You bring the ideas. We bring the tech, design, and execution 
              to make them real — simple as that. 
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 py-6 sm:py-8 border-t border-b border-gray-200 text-center">
              <div>
                <div className="text-lg sm:text-2xl font-bold text-black">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-black">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Success</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-black">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Clients</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 w-full max-w-xs sm:max-w-none">
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 flex items-center justify-center ">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="text-black border border-gray-300 px-6 py-3 rounded hover:bg-gray-50 flex items-center justify-center ">
                <Play className="mr-2 h-4 w-4" />
                View Demo
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-12 lg:mt-0 flex justify-center">
            <div className="border border-gray-200 bg-white rounded-lg overflow-hidden w-full max-w-xs sm:max-w-md md:max-w-lg">
              <div className="w-full h-48 sm:h-64 md:h-80 bg-gray-100 flex items-center justify-center relative">
                {/* Desk setup illustration matching the original design */}
                <div className="relative w-64 h-40 sm:w-80 sm:h-56 md:w-96 md:h-64">
                  {/* Desk surface */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 bg-gray-300 rounded-sm shadow-lg"></div>
                  {/* Monitor */}
                  <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 sm:w-48 h-20 sm:h-32 bg-gray-800 rounded-lg relative shadow-xl">
                      <div className="w-full h-full bg-black rounded-lg p-2 sm:p-3">
                        <div className="text-green-400 text-[10px] sm:text-xs font-mono leading-relaxed">
                          <div className="mb-1">$ npm start</div>
                          <div className="mb-1">$ Server running...</div>
                          <div className="mb-1">$ Ready on port 3000</div>
                          <div className="text-gray-500">$ _</div>
                        </div>
                      </div>
                      {/* Monitor stand */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-1 sm:h-2 bg-gray-600 rounded-b"></div>
                      <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-10 sm:w-16 h-1 sm:h-2 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  {/* Desk lamp */}
                  <div className="absolute bottom-12 sm:bottom-16 left-4 sm:left-8">
                    <div className="w-1 sm:w-2 h-10 sm:h-16 bg-gray-700 rounded-full"></div>
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-800 rounded-full -mt-2 sm:-mt-2 -ml-2 sm:-ml-3 shadow-lg"></div>
                    <div className="w-8 sm:w-12 h-3 sm:h-6 bg-gray-600 rounded-full -mt-3 sm:-mt-4 -ml-3 sm:-ml-5 opacity-80"></div>
                  </div>
                  {/* Books stack */}
                  <div className="absolute bottom-12 sm:bottom-16 right-4 sm:right-8">
                    <div className="w-6 sm:w-10 h-10 sm:h-16 bg-gray-600 rounded-sm shadow-md"></div>
                    <div className="w-5 sm:w-8 h-8 sm:h-14 bg-gray-700 rounded-sm -mt-8 sm:-mt-14 ml-1 shadow-md"></div>
                    <div className="w-4 sm:w-6 h-6 sm:h-12 bg-gray-500 rounded-sm -mt-6 sm:-mt-12 ml-2 shadow-md"></div>
                  </div>
                </div>
              </div>
              {/* Simple overlay elements */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white border border-gray-200 rounded px-2 sm:px-3 py-1 sm:py-2">
                <div className="text-[10px] sm:text-xs text-gray-600">Status: Online</div>
              </div>
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white border border-gray-200 rounded px-2 sm:px-3 py-1 sm:py-2">
                <div className="text-[10px] sm:text-xs font-medium text-black">99.9% Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;