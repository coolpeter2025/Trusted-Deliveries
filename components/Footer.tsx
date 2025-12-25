import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Trusted Deliveries</h3>
            <p className="text-gray-300 leading-relaxed">
              Your reliable local provider for aggregate delivery services in Cleveland, Ohio.
              We specialize in dirt, gravel, sand, and salt delivery services for
              residential and commercial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:+12165551234" className="hover:text-amber-500 transition-colors">
                  (216) 555-1234
                </a>
              </li>
              <li>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:info@trusteddeliveries.com" className="hover:text-amber-500 transition-colors">
                  info@trusteddeliveries.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Service Area:</span> Cleveland, Ohio and surrounding cities
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Trusted Deliveries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
