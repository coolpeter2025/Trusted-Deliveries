'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-2xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <Image
              src="/images/TD5.jpg"
              alt="Trusted Deliveries Logo"
              width={100}
              height={100}
              className="h-12 sm:h-16 md:h-20 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-100 hover:text-amber-500 font-medium transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-100 hover:text-amber-500 font-medium transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className="text-gray-100 hover:text-amber-500 font-medium transition-colors"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/#gallery"
                className="text-gray-100 hover:text-amber-500 font-medium transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-100 hover:text-amber-500 font-medium transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <a
                href="tel:+14403394494"
                className="bg-amber-600 text-gray-900 px-6 py-2.5 rounded-md font-semibold hover:bg-amber-700 transition-colors"
              >
                Call Now
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-100 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-100 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-100 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-100 hover:text-amber-500 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block text-gray-100 hover:text-amber-500 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="block text-gray-100 hover:text-amber-500 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  className="block text-gray-100 hover:text-amber-500 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-gray-100 hover:text-amber-500 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="tel:+14403394494"
                  className="block bg-amber-600 text-gray-900 px-6 py-2.5 rounded-md font-semibold hover:bg-amber-700 text-center"
                >
                  Call Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
