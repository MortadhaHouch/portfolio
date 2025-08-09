import type { Metadata } from 'next'
import './globals.css'
import HomeLayout from './HomeLayout'
import { defaultMetadata } from './metadata'

// Google Search Console verification
const verification = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  // Add other verification methods here
};

export const metadata: Metadata = {
  ...defaultMetadata,
  other: {
    'google-site-verification': verification.google
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HomeLayout>
          {children}
        </HomeLayout>
      </body>
    </html>
  );
}
