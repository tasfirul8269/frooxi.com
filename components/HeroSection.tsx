import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[70vh] overflow-x-hidden flex items-stretch pt-20" style={{
      backgroundImage: `
        linear-gradient(to right, #f8f9fa 1px, transparent 1px),
        linear-gradient(to bottom, #f8f9fa 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 relative flex-1 flex items-stretch">
        {/* Hero Image - right half, full height */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2 rounded-l-lg overflow-hidden border border-gray-200 bg-white z-0">
          <Image
            src="/HeroImage.jpg"
            alt="Hero section image"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="rounded-l-lg"
          />
          {/* Simple overlay elements */}
          <div className="absolute top-4 left-4 bg-white border border-gray-200 rounded px-3 py-2 z-10">
            <div className="text-xs text-gray-600">Status: Online</div>
          </div>
          <div className="absolute bottom-4 right-4 bg-white border border-gray-200 rounded px-3 py-2 z-10">
            <div className="text-xs font-medium text-black">99.9% Uptime</div>
          </div>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative flex-1 z-10 w-full">
          <div className="space-y-8 relative z-10">
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
            <div className="grid grid-cols-3 gap-4 sm:gap-8 py-6 sm:py-8 border-t border-b border-gray-200 text-start">
              <div>
                <div className="text-lg sm:text-2xl font-bold text-black">100+</div>
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
              <button className="bg-[#60FCC4] text-black hover:text-white px-6 py-3 rounded hover:bg-gray-800 flex items-center justify-center ">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="text-black border border-gray-300 px-6 py-3 rounded hover:bg-gray-50 flex items-center justify-center ">
                <Play className="mr-2 h-4 w-4" />
                View Demo
              </button>
            </div>
          </div>
          {/* Mobile/Tablet fallback */}
          <div className="lg:hidden w-full h-48 sm:h-64 md:h-80 border border-gray-200 bg-white rounded-lg overflow-hidden relative mt-8">
            <Image
              src="/HeroImage.jpg"
              alt="Hero section image"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-lg"
            />
            {/* Simple overlay elements */}
            <div className="absolute top-2 left-2 bg-white border border-gray-200 rounded px-2 py-1 z-10">
              <div className="text-[10px] sm:text-xs text-gray-600">Status: Online</div>
            </div>
            <div className="absolute bottom-2 right-2 bg-white border border-gray-200 rounded px-2 py-1 z-10">
              <div className="text-[10px] sm:text-xs font-medium text-black">99.9% Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;