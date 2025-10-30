import { NextResponse } from 'next/server'

const getBaseUrl = (): string =>
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://lostaranjales.com'

export async function GET() {
  const base = getBaseUrl()

  const paths = [
    '/',
    '/la-finca',
    '/servicios',
    '/servicios/bodas-en-el-rocio',
    '/servicios/eventos-corporativos-sevilla-huelva',
    '/servicios/celebraciones-particulares',
    '/servicios/rodajes-donana-huelva',
    '/servicios/experiencias-ecuestres-donana',
    '/espacios',
    '/galeria',
    '/blog',
    '/zonas-de-servicio',
    '/zonas-de-servicio/eventos-en-sevilla',
    '/zonas-de-servicio/eventos-en-huelva',
    '/zonas-de-servicio/bodas-en-cadiz',
    '/contacto',
  ]

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    paths.map((p) => `<url><loc>${base}${p}</loc></url>`).join('') +
    `</urlset>`

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}


