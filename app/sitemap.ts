import { type MetadataRoute } from 'next'

const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://lostaranjales-mhi0g0qoz-alvaros-projects-eb98f06d.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl()
  const now = new Date()

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}


