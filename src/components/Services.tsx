'use client';

import React from 'react';
import { Layers, Monitor, Compass, BarChart3, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Layers,
      title: 'UI/UX Design',
      description: 'We construct beautiful interfaces and user-centered journeys. Our custom designs are backed by user research and verified through prototype testing.',
      color: 'from-indigo-500 to-blue-500',
      glow: 'shadow-indigo-500/10',
    },
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Engineered with performance in mind. We develop lightning-fast Next.js projects, interactive applications, and scalable SaaS solutions.',
      color: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/10',
    },
    {
      icon: Compass,
      title: 'Brand Identity',
      description: 'Establishing memorable brand guidelines, high-end logos, cohesive design systems, and stories that resonate with your target market.',
      color: 'from-emerald-500 to-teal-500',
      glow: 'shadow-emerald-500/10',
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Scaling visibility using data-backed SEO, targeted campaigns, performance analytics, and structured funnels that increase conversions.',
      color: 'from-amber-500 to-orange-500',
      glow: 'shadow-amber-500/10',
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 bg-slate-50 dark:bg-[#0f1526] border-y border-slate-100 dark:border-slate-850/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
            Our Specialties
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Custom Solutions for Digital Excellence
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            We partner with forward-thinking brands to craft tailored solutions that solve complex business challenges.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative p-8 rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200/60 dark:border-slate-800/40 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl ${service.glow}`}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                {/* Floating Light Glow Effect */}
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                {/* Icon wrapper */}
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white mb-6 shadow-md`}>
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Service Title */}
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Decorative CTA */}
                <span className="inline-flex items-center text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:underline">
                  Learn More
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
