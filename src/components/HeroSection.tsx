import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  onRequestPickup?: () => void;
  onBecomeDriver?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onRequestPickup, onBecomeDriver }) => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          onError={(e) => {
            console.log('Hero video background failed to load, falling back to gradient');
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 pt-8 pb-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:items-center pt-6 lg:pt-12">
          {/* Left side - Logo */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            <img
              src="/hero-logo.png"
              alt="MY-RUNNER.COM hero"
              className="w-full max-w-[30rem] sm:max-w-[34rem] lg:max-w-[38rem] object-contain drop-shadow-[0_22px_48px_rgba(59,130,246,0.45)] transition-transform duration-500 ease-out"
            />
          </div>

          {/* Right side - Stacked text */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <div className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Anything
              </div>
              <div className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Anytime
              </div>
              <div className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Anywhere
              </div>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              The only delivery service that picks up from absolutely anywhere. 
              Forgot something? Need it delivered? We've got you covered 24/7 nationwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={onRequestPickup || (() => {})}
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg"
              >
                Request Pickup Now
              </button>
              <button 
                onClick={onBecomeDriver || (() => navigate('/driver-application'))}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Become a Driver
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-teal-300">24/7</div>
                <div className="text-gray-200">Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300">50+</div>
                <div className="text-gray-200">States</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-300">∞</div>
                <div className="text-gray-200">Possibilities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Video moved up, below hero section */}
        <div className="mt-8 lg:mt-12">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl border border-white/10 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/jydOZTXZ1ZM"
              title="MY-RUNNER.COM Video"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;