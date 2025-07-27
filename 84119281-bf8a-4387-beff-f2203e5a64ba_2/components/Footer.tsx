'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-orange-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors cursor-pointer" style={{ fontFamily: 'Pacifico, serif' }}>
              Cutzone Edits
            </Link>
            <p className="text-gray-400 mt-4">
              Professional video editing services that bring your creative vision to life with precision and creativity.
            </p>
            <div className="flex space-x-4 mt-6">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500/20 rounded-full hover:bg-orange-500/30 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-orange-500"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500/20 rounded-full hover:bg-orange-500/30 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-orange-500"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500/20 rounded-full hover:bg-orange-500/30 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-orange-500"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500/20 rounded-full hover:bg-orange-500/30 transition-colors cursor-pointer">
                <i className="ri-youtube-fill text-orange-500"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Video Editing</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Motion Graphics</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Audio Post-Production</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Social Media Content</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Corporate Videos</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="ri-mail-line mr-2 text-orange-500"></i>
                info@cutzoneedits.com
              </li>
              <li className="flex items-center text-gray-400">
                <i className="ri-phone-line mr-2 text-orange-500"></i>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <i className="ri-map-pin-line mr-2 text-orange-500"></i>
                New York, NY 10001
              </li>
              <li className="flex items-center text-gray-400">
                <i className="ri-time-line mr-2 text-orange-500"></i>
                Mon-Fri: 9AM-6PM EST
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Cutzone Edits. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}