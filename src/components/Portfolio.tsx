import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Branding', 'Web Design', 'Print Design', 'Packaging'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity design for a tech startup',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
      tags: ['Logo Design', 'Brand Guidelines', 'Business Cards']
    },
    {
      id: 2,
      title: 'E-commerce Website',
      category: 'Web Design',
      description: 'Clean and modern e-commerce platform design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['UI Design', 'UX Research', 'Responsive Design']
    },
    {
      id: 3,
      title: 'Annual Report Design',
      category: 'Print Design',
      description: 'Corporate annual report with infographic elements',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      tags: ['Layout Design', 'Infographics', 'Typography']
    },
    {
      id: 4,
      title: 'Product Packaging',
      category: 'Packaging',
      description: 'Eco-friendly packaging design for organic products',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      tags: ['Package Design', 'Sustainability', 'Brand Identity']
    },
    {
      id: 5,
      title: 'Restaurant Brand',
      category: 'Branding',
      description: 'Complete branding solution for a fine dining restaurant',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      tags: ['Logo Design', 'Menu Design', 'Interior Graphics']
    },
    {
      id: 6,
      title: 'Mobile App Interface',
      category: 'Web Design',
      description: 'User-friendly mobile application interface design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      tags: ['Mobile UI', 'Prototyping', 'User Testing']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Golden decorative circles */}
      <div className="absolute top-20 left-5 w-36 h-36 golden-ring opacity-10"></div>
      <div className="absolute bottom-20 right-5 w-32 h-32 golden-ring opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
            Featured <span className="golden-text">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my passion for creating meaningful design solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'golden-accent text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gold-200 hover:border-gold-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group relative"
            >
              {/* Golden frame decoration */}
              <div className="absolute top-3 right-3 w-8 h-8 golden-ring opacity-60 z-10"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gold-900/20 to-gold-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <button className="golden-frame w-12 h-12">
                      <div className="golden-frame-inner w-full h-full flex items-center justify-center text-gold-700 hover:text-gold-800 transition-colors">
                        <Eye size={20} />
                      </div>
                    </button>
                    <button className="golden-frame w-12 h-12">
                      <div className="golden-frame-inner w-full h-full flex items-center justify-center text-gold-700 hover:text-gold-800 transition-colors">
                        <ExternalLink size={20} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gold-700 bg-gradient-to-r from-gold-100 to-gold-200 px-3 py-1 rounded-full border border-gold-300">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="golden-accent text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
