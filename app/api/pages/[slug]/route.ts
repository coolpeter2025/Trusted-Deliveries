import { NextResponse } from 'next/server';
import { getPageDataBySlug } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const pageData = getPageDataBySlug(slug);

    if (!pageData) {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(pageData);
  } catch (error) {
    console.error('Error fetching page data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
