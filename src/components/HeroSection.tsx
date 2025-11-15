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
      {/* Clean gradient background - removes old branding elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      
      <div className="relative max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 pt-8 pb-4">
        <div className="text-center lg:text-left pt-6 lg:pt-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Anything, Anytime, Anywhere
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
            The only delivery service that picks up from absolutely anywhere. 
            Forgot something? Need it delivered? We've got you covered 24/7 nationwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
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

          {/* Video moved up, right after buttons */}
          <div className="mb-8">
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl border border-white/10 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/jydOZTXZ1ZM"
                title="MY-RUNNER.COM Video"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center max-w-2xl mx-auto lg:mx-0">
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

    </section>
  );
};

export default HeroSection;