import Link from 'next/link';
import { getServices, getLocations } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import LocationCard from '@/components/LocationCard';
import CTASection from '@/components/CTASection';

export default function Home() {
  const services = getServices();
  const locations = getLocations();

  // Show first 6 locations for homepage
  const featuredLocations = locations.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32 md:py-48 lg:py-64 min-h-[650px] flex items-center" style={{
        backgroundImage: "url('/truck-hero.jpg')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight drop-shadow-2xl">
            Cleveland&apos;s Premier Aggregate<br />
            Delivery Service
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl text-amber-400 font-bold mb-12 drop-shadow-2xl">
            Fast, Reliable Material Delivery
          </p>
          <a
            href="tel:+14403394494"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 px-8 py-3 md:px-10 md:py-4 rounded font-bold text-base md:text-lg uppercase tracking-wide transition-all shadow-xl touch-manipulation"
          >
            Call Now!!
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aggregate Delivery Services for Dirt, Gravel, Sand & Salt
            </h2>
            <div className="max-w-5xl mx-auto space-y-4">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Trusted Deliveries is your reliable local provider for aggregate delivery services, specializing in dirt delivery,
                gravel delivery, sand delivery, and bulk salt delivery. We serve residential, commercial, and
                construction clients with fast, affordable, and dependable material delivery—directly to your site and on schedule.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Whether you&apos;re preparing land for construction, improving a property, or maintaining safe roads and parking lots
                during winter, Trusted Deliveries ensures your materials arrive on time, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="bg-amber-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Serving Cleveland, Ohio and Surrounding Cities
          </h2>
          <p className="text-xl text-white">
            We proudly serve Cleveland and the surrounding areas including Lakewood, Cleveland Heights, Parma, Euclid,
            Strongsville, Mentor, Westlake, Brunswick, North Olmsted, Solon, and more.
          </p>
        </div>
      </section>

      {/* Professional Aggregate Delivery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Professional Aggregate Delivery You Can Depend On
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              When your project requires consistency and reliability, you need a delivery partner you can trust. Our experienced
              team understands the importance of timing, quality materials, and clear communication. We work closely with contractors,
              developers, property managers, and homeowners to ensure smooth and efficient delivery for every job.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From small residential loads to large commercial projects, Trusted Deliveries delivers with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Aggregate Delivery Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Service Locations in the Greater Cleveland Area
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            We deliver to {locations.length} cities and towns throughout the Cleveland metro area
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLocations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/locations"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors"
            >
              View All {locations.length} Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Trusted Deliveries?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Service</h3>
              <p className="text-gray-600">On-time delivery you can count on</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Fair rates for all project sizes</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Materials</h3>
              <p className="text-gray-600">High-grade aggregates for every need</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">Professional operators and equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Our Fleet & Equipment
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Professional equipment for every delivery need
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for future images */}
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1630506396810-37e48fc75ff9?q=80&w=800&auto=format&fit=crop"
                alt="Dump truck fleet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Professional Dump Trucks</p>
              </div>
            </div>

            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop"
                alt="Aggregate materials"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Quality Aggregates</p>
              </div>
            </div>

            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                alt="Construction site delivery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">On-Site Delivery</p>
              </div>
            </div>

            {/* Placeholder cards for future images */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-500">
              <div className="text-center text-gray-600">
                <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-semibold">Add Your Photo</p>
              </div>
            </div>

            <div className="relative aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-500">
              <div className="text-center text-gray-600">
                <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-semibold">Add Your Photo</p>
              </div>
            </div>

            <div className="relative aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-500">
              <div className="text-center text-gray-600">
                <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-semibold">Add Your Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
