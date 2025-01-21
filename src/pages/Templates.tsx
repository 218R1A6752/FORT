import React, { useState, useMemo } from 'react';
import { templates } from '../data/templates';
import TemplateCard from '../components/TemplateCard';

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(templates.map(t => t.category))];
    return cats.sort();
  }, []);

  const filteredTemplates = useMemo(() => {
    if (selectedCategory === 'All') return templates;
    return templates.filter(t => t.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 bg-hero-pattern bg-cover bg-center opacity-5"></div>

      {/* Content */}
      <div className="relative">
        {/* Spacer for fixed header */}
        <div className="h-24"></div>

        {/* Templates Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Resume Templates</h1>
              <p className="text-gray-300">Choose from our collection of professional resume templates</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}