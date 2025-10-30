import { type MetadataRoute } from 'next'

const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://lostaranjales-mhi0g0qoz-alvaros-projects-eb98f06d.vercel.app'

export default function robots(): MetadataRoute.Robots {
  const base = getBaseUrl()
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  }
}


