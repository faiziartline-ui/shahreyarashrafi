import React from 'react';
import { ArrowDown, Palette, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-16 relative overflow-hidden">
      {/* Golden decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 golden-ring opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 golden-ring opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              Md. Shahreyar
              <span className="block golden-text">
                Ashrafi
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
              17-year-old passionate graphic designer with 2 years of experience creating visual stories using CorelDRAW and Photoshop.
            </p>
            <p className="text-base text-gold-700 font-medium">
              11th Grade Student • Available for Design Projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="golden-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold-500 text-gold-700 px-8 py-4 rounded-full font-semibold hover:bg-gold-500 hover:text-white transition-all duration-200"
            >
              Learn More
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="golden-frame w-16 h-16 mb-4">
                <div className="golden-frame-inner w-full h-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-gold-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CorelDRAW</h3>
              <p className="text-gray-600 text-center text-sm">Vector graphics & illustrations</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="golden-frame w-16 h-16 mb-4">
                <div className="golden-frame-inner w-full h-full flex items-center justify-center">
                  <Layers className="w-8 h-8 text-gold-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Photoshop</h3>
              <p className="text-gray-600 text-center text-sm">Photo editing & digital art</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <div className="golden-frame w-12 h-12">
              <div className="golden-frame-inner w-full h-full flex items-center justify-center">
                <ArrowDown className="w-6 h-6 text-gold-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
