import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'shahreyarashrafi@gmail.com',
      link: 'mailto:shahreyarashrafi@gmail.com'
    },
    {
      icon: Phone,
      title: 'Mobile',
      content: '+91 6203371077',
      link: 'tel:+916203371077'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Jamshedpur, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Golden decorative elements */}
      <div className="absolute top-10 left-10 w-28 h-28 golden-ring opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 golden-ring opacity-15"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            Let's <span className="golden-text">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a design project in mind? I'd love to help bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 bg-white rounded-lg hover:bg-gradient-to-r hover:from-gold-50 hover:to-gold-100 transition-all duration-200 group shadow-sm"
                >
                  <div className="golden-frame w-12 h-12 mr-4 group-hover:animate-pulse-gold">
                    <div className="golden-frame-inner w-full h-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-gold-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600 text-sm">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="tel:+916203371077"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full golden-accent text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 my-8"
            >
              <Phone size={20} />
              <span>Discuss Project</span>
            </motion.a>

            <div className="bg-gradient-to-r from-gold-50 to-gold-100 p-6 rounded-xl border border-gold-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-gold-600" />
                Why Work With Me?
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 golden-accent rounded-full mr-3"></div>
                  2 years of professional design experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 golden-accent rounded-full mr-3"></div>
                  Expert proficiency in CorelDRAW & Photoshop
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 golden-accent rounded-full mr-3"></div>
                  Competitive pricing for quality work
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 golden-accent rounded-full mr-3"></div>
                  Quick response and timely delivery
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 golden-accent rounded-full mr-3"></div>
                  Dedicated to client satisfaction
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 golden-accent rounded-full mr-3"></div>
                  Available from Jamshedpur & surrounding areas
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md relative">
              {/* Golden corner decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 golden-ring opacity-40"></div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your design project, timeline, and specific requirements..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full golden-accent text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
              
              <p className="text-sm text-gray-500 text-center">
                I'll respond within 24 hours with project details and timeline!
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
