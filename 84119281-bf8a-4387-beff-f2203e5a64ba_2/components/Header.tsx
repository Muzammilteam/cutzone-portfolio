'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black border-b border-orange-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors cursor-pointer" style={{ fontFamily: 'Pacifico, serif' }}>
            Cutzone Edits
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-orange-500 transition-colors font-medium cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link href="/portfolio" className="text-white hover:text-orange-500 transition-colors font-medium cursor-pointer whitespace-nowrap">
              Portfolio
            </Link>
            <Link href="/services" className="text-white hover:text-orange-500 transition-colors font-medium cursor-pointer whitespace-nowrap">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-orange-500 transition-colors font-medium cursor-pointer whitespace-nowrap">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-500 transition-colors font-medium cursor-pointer whitespace-nowrap">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}