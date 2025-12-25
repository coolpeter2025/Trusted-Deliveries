import Link from 'next/link';
import { Location } from '@/lib/data';

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2 text-gray-900">
        {location.name}
        {location.isMainCity && (
          <span className="ml-2 text-sm bg-amber-600 text-white px-2 py-1 rounded">
            Main City
          </span>
        )}
      </h3>

      <div className="space-y-2 mb-4">
        <p className="text-gray-600">
          <span className="font-semibold">Distance:</span> {location.distance} from Cleveland
        </p>
        {location.population && (
          <p className="text-gray-600">
            <span className="font-semibold">Population:</span> {location.population}
          </p>
        )}
      </div>

      <Link
        href={`/locations/${location.slug}`}
        className="inline-block text-amber-600 font-semibold hover:text-amber-700 transition-colors"
      >
        View Services in {location.name} →
      </Link>
    </div>
  );
}
