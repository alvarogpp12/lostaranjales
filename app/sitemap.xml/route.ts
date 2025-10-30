import { NextResponse } from 'next/server'

const getBaseUrl = (): string =>
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://lostaranjales-mhi0g0qoz-alvaros-projects-eb98f06d.vercel.app'

export async function GET() {
  const base = getBaseUrl()
  const lastmod = new Date().toISOString()

  const urls = [
    `${base}/`,
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map(
        (u) =>
          `<url><loc>${u}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
      )
      .join('') +
    `</urlset>`

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}


