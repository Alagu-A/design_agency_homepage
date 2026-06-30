'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-[#0b0f19] dark:via-[#0f1526] dark:to-[#0b0f19]"
    >
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse duration-5000"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 md:space-y-8" data-aos="fade-right" data-aos-duration="1000">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-indigo-200/50 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold w-fit shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>Award Winning Digital Studio</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            We Design{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Immersive
            </span>{' '}
            Digital Experiences
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            At AURA, we engineer bold digital solutions. We combine design intuition with deep engineering expertise to build websites and applications that capture attention and drive scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 dark:shadow-indigo-950/30 hover:shadow-indigo-500/35 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              View Our Work
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right Graphic/Illustration */}
        <div
          className="relative flex justify-center lg:justify-end"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* Glass Card Container */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden p-3 border border-white/20 dark:border-slate-800/40 bg-white/20 dark:bg-slate-950/20 backdrop-blur-sm shadow-2xl dark:shadow-[#05070c]">
            {/* Inner Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/0 pointer-events-none rounded-3xl"></div>

            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-bg.png"
                alt="AURA Digital Art"
                fill
                priority
                sizes="(max-w-7xl) 100vw, 500px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Interactive Float Badges */}
            <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/80 dark:bg-[#0f1526]/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-lg flex items-center space-x-3 animate-bounce duration-3000">
              <div className="h-10 w-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">AURA Agency</div>
                <div className="text-[10px] text-indigo-500 dark:text-indigo-400 font-medium">Design & Dev Studio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
