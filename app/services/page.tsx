import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getServices } from '@/lib/data';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Aggregate Delivery Services in Cleveland Ohio | Trusted Deliveries',
  description: 'Complete aggregate delivery services in Cleveland, Ohio. Dirt, gravel, sand, salt delivery, snow removal, site preparation, material spreading & debris removal.',
  openGraph: {
    title: 'Aggregate Delivery Services in Cleveland Ohio | Trusted Deliveries',
    description: 'Complete aggregate delivery services in Cleveland, Ohio.',
  },
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Aggregate Delivery Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional material delivery and site services throughout the Greater Cleveland area
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`flex flex-col lg:flex-row gap-8 items-start pb-12 ${
                  index !== services.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                {/* Service Image & Name */}
                <div className="lg:w-1/3">
                  {service.image && (
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4 shadow-md">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                        style={{ objectPosition: '50% 10%' }}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h2>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <a
                    href="tel:+12165551234"
                    className="inline-block bg-amber-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-amber-700 transition-colors touch-manipulation w-full sm:w-auto text-center"
                  >
                    Call for Quote
                  </a>
                </div>

                {/* Service Details */}
                <div className="lg:w-2/3 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Service Overview</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Common Applications</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.applications.map((app, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Key Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Areas Link */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Service Available In:</strong> All 35 Cleveland-area locations
                    </p>
                    <Link
                      href="/locations"
                      className="text-amber-600 font-semibold hover:text-amber-700"
                    >
                      View All Service Locations →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            How Our Service Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-gray-600">Call or email for a free quote on your project</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Get a Quote</h3>
              <p className="text-gray-600">Receive competitive pricing for materials and delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Schedule Delivery</h3>
              <p className="text-gray-600">Choose a convenient time for your delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Receive Materials</h3>
              <p className="text-gray-600">Professional delivery right to your site</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Order Materials?"
        description="Get a free quote on your aggregate delivery needs today. Fast, reliable service throughout the Cleveland area."
      />
    </>
  );
}
