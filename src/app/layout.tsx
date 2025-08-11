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
      <Script 
        defer 
        src="https://cloud.umami.is/script.js" 
        data-website-id="3e5f32d8-a6a1-45d6-8240-0f779e05fd54"
        strategy="afterInteractive"
      ></Script>
        <HomeLayout>
          {children}
        </HomeLayout>
      </body>
    </html>
  );
}
