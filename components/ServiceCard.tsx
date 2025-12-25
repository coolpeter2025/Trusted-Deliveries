import Link from 'next/link';
import Image from 'next/image';
import { Service } from '@/lib/data';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {service.image && (
        <div className="relative h-48 w-full">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            style={{ objectPosition: '50% 10%' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.shortDescription}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Common Applications:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {service.applications.slice(0, 3).map((app, index) => (
              <li key={index} className="text-sm">{app}</li>
            ))}
          </ul>
        </div>

        <Link
          href={`/services#${service.slug}`}
          className="inline-block bg-amber-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-amber-700 transition-colors touch-manipulation w-full sm:w-auto text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
