interface CTASectionProps {
  title?: string;
  description?: string;
  phoneNumber?: string;
}

export default function CTASection({
  title = "Get Reliable Aggregate Delivery Today",
  description = "Ready to schedule your dirt, gravel, sand, salt, or snow delivery? Trusted Deliveries is here to help.",
  phoneNumber = "+12165551234"
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-2xl font-bold text-white mb-4">Call us today to request a quote</h3>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-block bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors"
            >
              (216) 555-1234
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-white mb-4">Contact us online to schedule delivery</h3>
            <a
              href="mailto:info@trusteddeliveries.com"
              className="inline-block bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors"
            >
              Email Us
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold text-white mb-4">Fast, dependable service you can trust</h3>
            <a
              href="/services"
              className="inline-block bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>

        <p className="text-center text-2xl md:text-3xl font-bold text-amber-400 mt-12">
          Trusted Deliveries — Delivering the materials you need, when you need them.
        </p>
      </div>
    </section>
  );
}
