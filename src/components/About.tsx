import React from 'react';
import { Award, Clock, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { icon: Clock, value: '2+', label: 'Years Experience' },
    { icon: Award, value: '25+', label: 'Projects Done' },
    { icon: GraduationCap, value: '11th', label: 'Current Grade' },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Golden decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 golden-ring opacity-10"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 golden-ring opacity-15"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            About <span className="golden-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate young designer with a vision for creative excellence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Md. Shahreyar Ashrafi
            </h3>
            <p className="text-gold-700 font-semibold mb-2">Graphic Designer</p>
            <p className="text-gray-500 text-sm mb-4">17 Years Old • Jamshedpur, India</p>
            
            <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl mx-auto">
              Hello! I'm Shahreyar, a dedicated 17-year-old graphic designer from Jamshedpur with 2 years of professional experience. As a current 11th-grade student, I've successfully balanced my academics whilst building a strong portfolio in graphic design.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto">
              My journey began with a passion for visual storytelling, and I've honed my skills in CorelDRAW and Adobe Photoshop to bring creative concepts to life. I believe that good design is not just about aesthetics—it's about communicating ideas effectively and creating meaningful connections with the audience.
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              {['CorelDRAW', 'Photoshop', 'Logo Design', 'Vector Graphics', 'Photo Editing', 'Brand Identity'].map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-gold-100 to-gold-200 text-gold-800 px-3 py-1 rounded-full text-sm font-medium border border-gold-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-lg shadow-md relative group hover:shadow-lg transition-all duration-300"
              >
                <div className="golden-frame w-16 h-16 mx-auto mb-3 group-hover:animate-pulse-gold">
                  <div className="golden-frame-inner w-full h-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-gold-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold golden-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-r from-gold-50 to-gold-100 p-6 rounded-xl border border-gold-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">My Design Philosophy</h4>
              <p className="text-sm text-gray-700 mb-4">
                "Design is not just what it looks like and feels like. Design is how it works." I approach every project with creativity, attention to detail, and a focus on delivering solutions that not only look great but also serve their intended purpose effectively.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gold-50 to-gold-100 p-6 rounded-xl border border-gold-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Education & Journey</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <div className="w-2 h-2 golden-accent rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong>Current:</strong> 11th Grade Student, Jamshedpur
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 golden-accent rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong>Completed:</strong> 10th Grade (Matriculation) with distinction
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 golden-accent rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong>Experience:</strong> 2 years in professional graphic design
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 golden-accent rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong>Specialisation:</strong> CorelDRAW vector graphics & Photoshop editing
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
