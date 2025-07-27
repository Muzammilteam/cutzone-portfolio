'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20video%20editing%20workspace%20with%20multiple%20monitors%20displaying%20colorful%20video%20timelines%2C%20modern%20dark%20studio%20setup%20with%20orange%20accent%20lighting%2C%20cinematic%20atmosphere%2C%20high-tech%20equipment%2C%20dramatic%20shadows%20and%20highlights%2C%20sleek%20contemporary%20design%2C%20professional%20video%20production%20environment&width=1920&height=1080&seq=hero-bg-1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional <span className="text-orange-500">Video Editing</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transform your raw footage into compelling stories with our expert video editing services. From corporate videos to creative content, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/portfolio" 
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-8 rounded-lg transition-colors cursor-pointer whitespace-nowrap inline-block text-center"
            >
              View Portfolio
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold py-4 px-8 rounded-lg transition-colors cursor-pointer whitespace-nowrap inline-block text-center"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}