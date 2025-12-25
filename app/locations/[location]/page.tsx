import { Metadata } from 'next';
import Link from 'next/link';
import { getLocationBySlug, getServices, getAvailablePageSlugs } from '@/lib/data';
import CTASection from '@/components/CTASection';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ location: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: `Aggregate Delivery Services in ${location.name}, Ohio | Trusted Deliveries`,
    description: `Professional aggregate delivery services in ${location.name}, Ohio. Dirt, gravel, sand, salt delivery, and more. Serving ${location.name} and the Greater Cleveland area.`,
    openGraph: {
      title: `Aggregate Delivery Services in ${location.name}, Ohio`,
      description: `Professional aggregate delivery services in ${location.name}, Ohio.`,
    },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) {
    notFound();
  }

  const services = getServices();
  const availablePages = getAvailablePageSlugs();

  // Find services available for this location
  const availableServices = services.filter((service) => {
    const pageSlug = `${service.slug}-${locationSlug}`;
    return availablePages.includes(pageSlug);
  });

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4 text-sm">
            <Link href="/" className="hover:text-amber-500">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-amber-500">Locations</Link>
            <span>/</span>
            <span className="text-amber-500">{location.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aggregate Delivery Services in {location.name}, Ohio
          </h1>
          <div className="flex flex-wrap gap-6 text-lg">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{location.distance} from Cleveland</span>
            </div>
            {location.population && (
              <div className="flex items-center">
                <svg className="w-6 h-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Population: {location.population}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Services Available in {location.name}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Professional aggregate delivery and site services for residential and commercial projects
          </p>

          {availableServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableServices.map((service) => {
                const pageSlug = `${service.slug}-${locationSlug}`;
                return (
                  <Link
                    key={service.slug}
                    href={`/${pageSlug}`}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-amber-600 hover:shadow-lg transition-all"
                  >
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    <span className="text-amber-600 font-semibold hover:text-amber-700">
                      Learn More →
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center bg-gray-50 p-12 rounded-lg">
              <p className="text-gray-700 mb-4">
                We offer all of our services in {location.name}! Contact us for more information about:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
                {services.map((service) => (
                  <div key={service.slug} className="flex items-center">
                    <span className="text-2xl mr-3">{service.icon}</span>
                    <span className="text-gray-900">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Trusted Deliveries in {location.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times to {location.name}</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p className="text-gray-600">We know the {location.name} area well</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Competitive rates for all services</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Materials</h3>
              <p className="text-gray-600">High-grade aggregates guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready for Delivery in ${location.name}?`}
        description={`Contact Trusted Deliveries today for professional aggregate delivery services in ${location.name}, Ohio. Free quotes available!`}
      />
    </>
  );
}
