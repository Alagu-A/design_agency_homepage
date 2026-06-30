'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'development', label: 'Development' },
    { id: 'branding', label: 'Branding' },
  ];

  const projects = [
    {
      title: 'Aura IoT Smart Home',
      category: 'design',
      categoryLabel: 'UI/UX Design',
      image: '/images/portfolio-uiux.png',
      link: '#',
    },
    {
      title: 'SaaS Business Analytics',
      category: 'development',
      categoryLabel: 'Web Development',
      image: '/images/portfolio-webdev.png',
      link: '#',
    },
    {
      title: 'Zenith Brand System',
      category: 'branding',
      categoryLabel: 'Brand Identity',
      image: '/images/portfolio-brand.png',
      link: '#',
    },
    {
      title: 'Digital Outreach Funnel',
      category: 'branding',
      categoryLabel: 'Digital Marketing',
      image: '/images/portfolio-marketing.png',
      link: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-white dark:bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16" data-aos="fade-up" data-aos-duration="800">
          <div className="max-w-xl mb-6 md:mb-0">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
              Our Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Selected Digital Masterpieces
            </h3>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] border border-slate-200/50 dark:border-slate-800/40 bg-slate-50 dark:bg-slate-900/50 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={(index % 2) * 150}
            >
              {/* Thumbnail Image */}
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-7xl) 100vw, 600px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-8">
                {/* Overlay Content */}
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-350 delay-75">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 block">
                    {project.categoryLabel}
                  </span>
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl md:text-2xl font-extrabold text-white">
                      {project.title}
                    </h4>
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-slate-950 hover:bg-indigo-500 hover:text-white transition-colors duration-200 shadow-md transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-350 delay-150">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
