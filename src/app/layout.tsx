import type { Metadata } from 'next'
import './globals.css'
import HomeLayout from './HomeLayout'
import { defaultMetadata } from './metadata'
import Script from 'next/script';
// Google Search Console verification
const verification = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  // Add other verification methods here
};

export const metadata: Metadata = {
  ...defaultMetadata,
  ...(verification.google && {
    other: {
      'google-site-verification': verification.google
    }
  })
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="/scripts/umami.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID as string}
          strategy="afterInteractive"
        />
        <HomeLayout>
          {children}
        </HomeLayout>
      </body>
    </html>
  );
}
