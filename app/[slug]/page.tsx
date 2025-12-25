'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { PageData } from '@/lib/data';

export default function ServiceLocationPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/pages/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setPageData(data);
        }
      } catch (error) {
        console.error('Error fetching page data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4 text-sm">
            <Link href="/" className="hover:text-amber-500">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-amber-500">Services</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-amber-500">Locations</Link>
            <span>/</span>
            <span className="text-amber-500">{pageData.service} in {pageData.location}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageData.h1}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{pageData.intro}</p>
          <div className="mt-8">
            <a
              href="tel:+12165551234"
              className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg"
            >
              Call (216) 555-1234 for Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Service</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{pageData.description}</p>
              </div>

              {/* Hero Image */}
              {pageData.images && pageData.images.length > 0 && (
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={pageData.images[0].url}
                    alt={pageData.images[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-xs">
                    {pageData.images[0].credit}
                  </div>
                </div>
              )}

              {/* Applications */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pageData.applications.map((app, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <svg className="w-6 h-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
                <ul className="space-y-3">
                  {pageData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Images */}
              {pageData.images && pageData.images.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pageData.images.slice(1).map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-xs">
                        {image.credit}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
                <div className="space-y-4">
                  {pageData.process.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {pageData.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                        <svg
                          className={`w-5 h-5 text-amber-600 transform transition-transform flex-shrink-0 ${
                            openFaqIndex === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openFaqIndex === index && (
                        <div className="p-4 pt-0 text-gray-700">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="bg-amber-600 text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Get a Free Quote</h3>
                  <p className="mb-6">Contact us today for professional {pageData.service.toLowerCase()} service in {pageData.location}.</p>
                  <a
                    href="tel:+12165551234"
                    className="block bg-white text-amber-600 text-center px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors mb-3"
                  >
                    Call (216) 555-1234
                  </a>
                  <a
                    href="mailto:info@trusteddeliveries.com"
                    className="block bg-gray-900 text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                  >
                    Email Us
                  </a>
                </div>

                {/* Service Info */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Service Information</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Same-day delivery available</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Professional operators</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Competitive pricing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Quality materials guaranteed</span>
                    </li>
                  </ul>
                </div>

                {/* Related Services */}
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Related Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services" className="text-amber-600 hover:text-amber-700 font-semibold">
                        View All Services →
                      </Link>
                    </li>
                    <li>
                      <Link href="/locations" className="text-amber-600 hover:text-amber-700 font-semibold">
                        Other Service Areas →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={pageData.cta.split('Call')[0]}
        description={`Professional ${pageData.service.toLowerCase()} service in ${pageData.location}. Contact us for a free quote.`}
      />
    </>
  );
}
