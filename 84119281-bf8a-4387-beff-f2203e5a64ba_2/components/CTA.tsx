'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Ready to Transform Your Videos?
        </h2>
        <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
          Let's work together to create compelling video content that tells your story and engages your audience. Get started with a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-colors cursor-pointer whitespace-nowrap inline-block"
          >
            Start Your Project
          </Link>
          <Link 
            href="/portfolio" 
            className="border-2 border-black text-black hover:bg-black hover:text-white font-bold py-4 px-8 rounded-lg transition-colors cursor-pointer whitespace-nowrap inline-block"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}