import fs from 'fs';
import path from 'path';

export interface Service {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  image?: string;
  applications: string[];
  benefits: string[];
  process: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Location {
  name: string;
  slug: string;
  distance: string;
  isMainCity?: boolean;
  population: string;
}

export interface PageData {
  service: string;
  location: string;
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  description: string;
  applications: string[];
  benefits: string[];
  process: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  images: {
    url: string;
    alt: string;
    credit: string;
  }[];
  cta: string;
}

// Get service schema
export function getServiceSchema() {
  const schemaPath = path.join(process.cwd(), 'data', 'service-schema.json');
  const schemaData = fs.readFileSync(schemaPath, 'utf-8');
  return JSON.parse(schemaData);
}

// Get all services
export function getServices(): Service[] {
  const schema = getServiceSchema();
  return schema.services;
}

// Get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  const services = getServices();
  return services.find((service: Service) => service.slug === slug);
}

// Get all locations
export function getLocations(): Location[] {
  const locationsPath = path.join(process.cwd(), 'data', 'locations.json');
  const locationsData = fs.readFileSync(locationsPath, 'utf-8');
  const data = JSON.parse(locationsData);
  return data.locations;
}

// Get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  const locations = getLocations();
  return locations.find((location: Location) => location.slug === slug);
}

// Get all page data files
export function getAllPageData(): PageData[] {
  const pagesDir = path.join(process.cwd(), 'data', 'pages');
  const files = fs.readdirSync(pagesDir);

  return files
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const filePath = path.join(pagesDir, file);
      const fileData = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileData);
    });
}

// Get page data by slug
export function getPageDataBySlug(slug: string): PageData | undefined {
  const pagesDir = path.join(process.cwd(), 'data', 'pages');
  const filePath = path.join(pagesDir, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const fileData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileData);
}

// Generate all service + location combinations
export function generateAllCombinations(): { service: string; location: string; slug: string }[] {
  const services = getServices();
  const locations = getLocations();
  const combinations: { service: string; location: string; slug: string }[] = [];

  services.forEach((service: Service) => {
    locations.forEach((location: Location) => {
      combinations.push({
        service: service.slug,
        location: location.slug,
        slug: `${service.slug}-${location.slug}`
      });
    });
  });

  return combinations;
}

// Get available page slugs (from existing JSON files)
export function getAvailablePageSlugs(): string[] {
  const pagesDir = path.join(process.cwd(), 'data', 'pages');
  const files = fs.readdirSync(pagesDir);

  return files
    .filter(file => file.endsWith('.json'))
    .map(file => file.replace('.json', ''));
}
