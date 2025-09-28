import React from 'react';
import { Palette, Image, Layers, Award, PenTool, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Logo & Brand Design',
      description: 'Create memorable logos and complete brand identities using CorelDRAW vector graphics.',
      features: ['Logo Design', 'Brand Guidelines', 'Business Cards', 'Letterheads']
    },
    {
      icon: Image,
      title: 'Photo Editing & Retouching',
      description: 'Professional photo editing, colour correction, and advanced retouching using Photoshop.',
      features: ['Photo Enhancement', 'Background Removal', 'Colour Correction', 'Portrait Retouching']
    },
    {
      icon: PenTool,
      title: 'Digital Art & Graphics',
      description: 'Creative digital artwork and graphics for web, social media, and digital platforms.',
      features: ['Social Media Graphics', 'Web Banners', 'Digital Art', 'Infographics']
    },
    {
      icon: Layers,
      title: 'Vector Graphics & Illustrations',
      description: 'Custom vector illustrations, icons, and graphics designed for scalability and versatility.',
      features: ['Custom Illustrations', 'Icon Design', 'Vector Art', 'Character Design']
    },
    {
      icon: Award,
      title: 'Print Design',
      description: 'Eye-catching print materials designed for maximum impact and professional presentation.',
      features: ['Flyers & Posters', 'Brochures', 'Banners', 'Marketing Materials']
    },
    {
      icon: FileText,
      title: 'Layout & Typography',
      description: 'Professional layout design with careful attention to typography and visual hierarchy.',
      features: ['Document Layout', 'Typography Design', 'Page Design', 'Editorial Design']
    }
  ];

  return (
    <section id="services" className="py-16 bg-white relative overflow-hidden">
      {/* Golden decorative elements */}
      <div className="absolute top-16 right-8 w-36 h-36 golden-ring opacity-8"></div>
      <div className="absolute bottom-16 left-8 w-28 h-28 golden-ring opacity-12"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            Design <span className="golden-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive graphic design solutions using industry-standard tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative group flex flex-col"
            >
              <div className="flex-grow">
                {/* Golden corner decoration */}
                <div className="absolute top-3 right-3 w-6 h-6 golden-ring opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                <div className="golden-frame w-16 h-16 mx-auto mb-4 group-hover:animate-pulse-gold">
                  <div className="golden-frame-inner w-full h-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-gold-600" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gold-700 mb-2">What I Offer:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 golden-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-gold-600 to-gold-500 text-white p-6 rounded-xl relative overflow-hidden max-w-2xl mx-auto">
            {/* Decorative golden rings */}
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/20 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white/20 rounded-full"></div>
            
            <h3 className="text-xl font-bold mb-3">Ready to Start Your Project?</h3>
            <p className="text-gold-100 mb-2 text-sm">
              Let's bring your creative vision to life with professional design solutions!
            </p>
            <p className="text-gold-200 text-xs mb-4">
              CorelDRAW Expert • Photoshop Professional • Quick Turnaround • 2 Years Experience
            </p>
            <a 
              href="#contact"
              className="inline-block bg-white text-gold-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colours duration-200 shadow-lg text-sm"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
