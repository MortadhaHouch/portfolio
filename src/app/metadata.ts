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
  },
  // Twitter card configuration removed as per user preference
}

export const siteConfig = {
  name: 'Mortadha Houch | Full Stack Developer | React & Node.js Specialist',
  description: 'Full Stack Developer specializing in React, Next.js, and Node.js. Building fast, scalable web applications with modern JavaScript frameworks and TypeScript.',
  url: 'https://mortadha-houch.netlify.app',
  ogImage: 'https://mortadha-houch.netlify.app/favicon-1.png',
  defaultLocale: 'en_GB',
  locale: 'en-GB',
  author: 'Mortadha Houch',
  siteName: 'Mortadha Houch - Portfolio',
  links: {
    github: 'https://github.com/MortadhaHouch',
    linkedin: 'https://linkedin.com/in/mortadha-houch',
  },
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name.split('|')[0].trim()}`,
  },
  description: siteConfig.description,
  keywords: [
    // Core Technologies
    'React', 'Next.js', 'TypeScript', 'Node.js', 'JavaScript', 'GraphQL',
    // Frameworks & Libraries
    'Express.js', 'NestJS', 'Redux', 'React Query', 'Prisma', 'Mongoose',
    // Styling & UI
    'Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Styled Components',
    // Backend & DevOps
    'RESTful APIs', 'Microservices', 'Docker', 'AWS', 'Vercel', 'CI/CD',
    // Specializations
    'Frontend Development', 'Backend Development', 'Full Stack Development',
    'Web Performance', 'Responsive Design', 'Web Accessibility',
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.defaultLocale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.author} - ${siteConfig.description.substring(0, 60)}`,
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: '/assets/images/favicon-1.png',
    shortcut: '/assets/images/icon-16x16.ico',
    apple: [
      { url: '/assets/images/favicon-1.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '32x32',
        url: '/assets/images/icon-32x32.ico',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '16x16',
        url: '/assets/images/icon-16x16.ico',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

// Generate JSON-LD structured data for the page
export const generateStructuredData = (): string => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author,
    url: siteConfig.url,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    description: siteConfig.description,
  };

  return JSON.stringify(data);
};

export const getPageMetadata = (metadata: Partial<PageMetadata> = {}): Metadata => {
  const title = metadata.title || defaultMetadata.title;
  const description = metadata.description || defaultMetadata.description;
  
  return {
    ...defaultMetadata,
    title,
    description,
    keywords: Array.from(new Set([
      ...(metadata.keywords || []), 
      ...(defaultMetadata.keywords as string[])
    ])),
    openGraph: {
      ...defaultMetadata.openGraph,
      title: typeof title === 'string' ? title : title || '',
      description,
      ...(metadata.openGraph || {}),
    },
    // Twitter card removed as per user preference
  }
}
