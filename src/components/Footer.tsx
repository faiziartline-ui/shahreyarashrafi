import React from 'react';
import { Heart, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 relative overflow-hidden">
      {/* Golden decorative elements */}
      <div className="absolute top-4 left-4 w-12 h-12 golden-ring opacity-20"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 golden-ring opacity-25"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="golden-frame w-8 h-8 mr-3">
              <div className="golden-frame-inner w-full h-full bg-gradient-to-br from-gold-400 to-gold-600"></div>
            </div>
            <h3 className="text-xl font-bold font-serif">Shahreyar Ashrafi</h3>
          </div>
          
          <p className="text-gray-300 mb-2 max-w-md mx-auto text-sm">
            17-year-old graphic designer from Jamshedpur, passionate about creating meaningful visual stories.
          </p>
          
          <div className="flex items-center justify-center text-gold-400 text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Jamshedpur, India</span>
          </div>
          
          <p className="text-gold-400 text-sm mb-6">
            CorelDRAW • Photoshop • 2 Years Experience
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-300 flex items-center justify-center text-sm">
              Made with <Heart className="w-4 h-4 text-red-500 mx-2" /> by Shahreyar © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
