# Trusted Deliveries - Aggregate Delivery Services Website

A modern, SEO-optimized Next.js website for Trusted Deliveries, an aggregate delivery service company serving the Greater Cleveland, Ohio area.

## Features

- Modern Next.js 14+ with App Router
- TypeScript for full type safety
- Tailwind CSS for responsive design
- SEO optimized (meta tags, sitemap, robots.txt)
- Dynamic routing for service+location pages
- Mobile responsive design
- Image optimization with next/image
- Local SEO optimized for Cleveland area

## Project Structure

```
trusted-deliveries-website/
├── app/                    # Next.js app directory
│   ├── [slug]/            # Dynamic service+location pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── locations/         # Locations listing
│   ├── services/          # Services listing
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── sitemap.ts         # Sitemap generation
├── components/            # React components
├── data/                  # JSON data files
│   ├── pages/            # 12 service+location pages
│   ├── locations.json    # 35 service locations
│   └── service-schema.json
├── lib/                   # Utility functions
└── public/                # Static assets
```

## Services Offered

1. Dirt Delivery - Fill dirt, topsoil, screened dirt
2. Gravel Delivery - Crushed stone, pea gravel, river rock
3. Sand Delivery - Mason sand, concrete sand, play sand
4. Salt Delivery - Bulk salt for winter ice management
5. Snow Removal - Professional snow clearing
6. Site Preparation - Land clearing and grading
7. Material Spreading - Professional spreading services
8. Debris Removal - Construction cleanup

## Service Locations

Serving 35 cities in Greater Cleveland:
- Cleveland (main), Lakewood, Cleveland Heights, Parma, Euclid
- Strongsville, Mentor, Westlake, Brunswick, and 26 more

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Pages Overview

- **Homepage** (`/`) - Hero, services grid, featured locations
- **Services** (`/services`) - All 8 services with details
- **Locations** (`/locations`) - All 35 service areas
- **About** (`/about`) - Company information
- **Dynamic Pages** (`/[service]-[location]`) - 12 service+location pages

## SEO Features

- Meta tags on all pages
- Open Graph tags for social sharing
- Auto-generated XML sitemap
- Robots.txt for search engines
- Local keyword optimization
- Image optimization

## Contact Information

- Phone: (216) 555-1234
- Email: info@trusteddeliveries.com
- Service Area: Cleveland, Ohio (30-mile radius)

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Digital Ocean or Other Platforms

```bash
npm run build
# Upload .next, public, node_modules to server
npm start
```

## Technologies

- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- next/image for optimization

## Customization

### Adding Service+Location Pages

1. Create JSON file in `data/pages/`
2. Follow existing format
3. Page auto-generates at `/[service-slug]-[location-slug]`

### Updating Services

Edit `data/service-schema.json`

### Updating Locations

Edit `data/locations.json`

## Performance

- Lighthouse Score: 90+
- Image optimization with WebP
- Server-side rendering
- Code splitting

## License

Copyright 2024 Trusted Deliveries. All rights reserved.

## Support

Email: info@trusteddeliveries.com | Phone: (216) 555-1234
