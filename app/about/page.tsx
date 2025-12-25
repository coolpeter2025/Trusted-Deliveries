import { Metadata } from 'next';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us - Trusted Deliveries | Cleveland Ohio Aggregate Delivery',
  description: 'Learn about Trusted Deliveries - your reliable aggregate delivery and site service company serving Cleveland, Ohio. Committed to dependable service and professional results.',
  openGraph: {
    title: 'About Us - Trusted Deliveries | Cleveland Ohio',
    description: 'Your reliable aggregate delivery and site service company serving Cleveland, Ohio.',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Trusted Deliveries</h1>
          <p className="text-xl text-gray-300">Delivering confidence, reliability, and peace of mind</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Trusted Deliveries was built on a simple promise: reliable service, honest work, and dependable results.
            As a locally operated aggregate delivery and site service company, we are committed to supporting builders,
            contractors, and property owners with quality materials and professional service.
          </p>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What We Stand For</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              We understand that delays cost time and money. That&apos;s why our team focuses on punctual deliveries,
              well-maintained equipment, and clear communication from start to finish. Every project—large or small—is
              handled with the same level of care and professionalism.
            </p>
            <p>
              Whether you&apos;re a homeowner working on a landscaping project, a contractor managing a construction site,
              or a property manager maintaining commercial facilities, we treat your needs with the attention and respect
              they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment to Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Commitment to Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality Materials</h3>
              <p className="text-gray-700">
                We source and deliver only high-quality aggregates that meet your project specifications and requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Reliable Service</h3>
              <p className="text-gray-700">
                On-time deliveries and consistent communication ensure your project stays on schedule without disruptions.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional Team</h3>
              <p className="text-gray-700">
                Our experienced operators and support staff bring expertise and professionalism to every delivery and service.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Local Focus</h3>
              <p className="text-gray-700">
                As a locally operated company, we understand the Cleveland area and are dedicated to serving our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Cleveland */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Serving Cleveland and Surrounding Communities
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Trusted Deliveries proudly serves Cleveland, Ohio and the surrounding cities including:
          </p>
          <div className="max-w-4xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Lakewood
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cleveland Heights
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Parma
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Euclid
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Strongsville
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Mentor
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Westlake
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Brunswick
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                North Olmsted
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Solon
              </li>
              <li className="flex items-center col-span-2 md:col-span-3 lg:col-span-4 text-amber-600 font-semibold">
                And many more communities throughout the Greater Cleveland area
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Deliver</h2>
          <p className="text-xl mb-4">At Trusted Deliveries, we don&apos;t just deliver materials.</p>
          <p className="text-2xl font-bold">We deliver confidence, reliability, and peace of mind.</p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work with Us?"
        description="Experience the Trusted Deliveries difference. Contact us today for reliable aggregate delivery services."
      />
    </>
  );
}
