import { Metadata } from 'next'

type PageMetadata = {
  title: string
  description: string
  keywords: string[]
  openGraph?: {
    type?: string
    url?: string
    title?: string
    description?: string
    images?: string[]
    siteName?: string
  }
  twitter?: {
    card?: string
    site?: string
    creator?: string
    title?: string
    description?: string
    image?: string
  }
}

export const siteConfig = {
  name: 'Mortadha Houch - Full Stack Developer',
  description: 'Portfolio of Mortadha Houch, a Full Stack Developer specializing in modern web technologies.',
  url: 'https://mortadha-houch.netlify.app',
  ogImage: 'https://mortadha-houch.netlify.app/og-image.jpg',
  links: {
    github: 'https://github.com/MortadhaHouch',
    linkedin: 'https://linkedin.com/in/mortadha-houch',
  },
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Mortadha Houch',
      url: siteConfig.url,
    },
  ],
  creator: 'Mortadha Houch',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@yourtwitter', // Replace with your Twitter handle
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const getPageMetadata = (metadata: Partial<PageMetadata> = {}): Metadata => {
  return {
    ...defaultMetadata,
    title: metadata.title || defaultMetadata.title,
    description: metadata.description || defaultMetadata.description,
    keywords: [...(metadata.keywords || []), ...(defaultMetadata.keywords as string[])],
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(metadata.openGraph || {}),
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...(metadata.twitter || {}),
    },
  }
}
