import { Metadata } from 'next';
import { getLocations, getServices } from '@/lib/data';
import LocationCard from '@/components/LocationCard';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Service Locations - Cleveland & Surrounding Areas | Trusted Deliveries',
  description: 'Trusted Deliveries serves 35 locations throughout the Greater Cleveland area. Find aggregate delivery services in your city.',
  openGraph: {
    title: 'Service Locations - Cleveland & Surrounding Areas | Trusted Deliveries',
    description: 'Serving 35 locations throughout the Greater Cleveland area.',
  },
};

export default function LocationsPage() {
  const locations = getLocations();
  const services = getServices();

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Service Locations in Greater Cleveland
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver aggregate materials to {locations.length} cities and towns throughout the Cleveland metro area
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 drop-shadow-lg">
              All Services Available in Every Location
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {services.map((service) => (
                <span
                  key={service.slug}
                  className="bg-gray-900 bg-opacity-80 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base lg:text-lg font-bold shadow-xl hover:bg-opacity-90 hover:scale-105 transition-all border-2 border-amber-300"
                >
                  <span className="text-xl md:text-2xl mr-1.5 md:mr-2">{service.icon}</span>
                  <span className="whitespace-nowrap">{service.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            All Service Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              30-Mile Service Radius from Cleveland
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our service area covers all of Cuyahoga County and extends into surrounding counties.
              We deliver dirt, gravel, sand, salt, and provide snow removal services throughout this area.
            </p>
            <p className="text-gray-600">
              Don&apos;t see your city listed? <a href="tel:+12165551234" className="text-amber-600 font-semibold hover:text-amber-700">Give us a call at (216) 555-1234</a> - we may still be able to serve you!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Find Service in Your Area"
        description="Contact us today to confirm service availability and get a free quote for your project."
      />
    </>
  );
}
