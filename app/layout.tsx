import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.standrewstaxis.co.uk'),
  title: 'St Andrews Taxi | 24/7 Private Hire & Airport Transfers | Call 07981 100009',
  description:
    'St Andrews Taxi Service — 24/7 private hire, airport transfers to Edinburgh & Glasgow, golf course runs, wedding transport & more. Fife Council licensed. Fixed prices. Call 07981 100009 now.',
  keywords:
    'St Andrews taxi, St Andrews taxis, taxi St Andrews, private hire St Andrews, airport transfer St Andrews, St Andrews to Edinburgh Airport, St Andrews to Glasgow Airport, golf taxi St Andrews, Old Course taxi, Fife taxi, KY16 taxi, 24 hour taxi St Andrews, taxi near me St Andrews, St Andrews cab, minicab St Andrews',
  authors: [{ name: 'St Andrews 24/7 Taxi Service' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.standrewstaxis.co.uk/',
    title: 'St Andrews Taxi — 24/7 Private Hire & Airport Transfers',
    description:
      'Reliable, professional taxi and private hire in St Andrews, Fife. Airport transfers, golf course runs, weddings and late-night journeys. Call 07981 100009 any time.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'St Andrews Taxi Service',
      },
    ],
    locale: 'en_GB',
    siteName: 'St Andrews Taxis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'St Andrews Taxi — 24/7 Private Hire & Airport Transfers',
    description:
      'Professional taxi and private hire in St Andrews. Airport transfers, golf runs, weddings. Call 07981 100009.',
    images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://www.standrewstaxis.co.uk/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TaxiService',
      name: 'St Andrews 24/7 Taxi Service',
      alternateName: ['St Andrews Taxis', 'St Andrews Private Hire'],
      description:
        'Professional 24/7 taxi and private hire service in St Andrews, Fife. Specialising in airport transfers, golf course runs, wedding transport, medical trips and local journeys across Fife.',
      url: 'https://www.standrewstaxis.co.uk',
      telephone: '+447981100009',
      priceRange: '££',
      currenciesAccepted: 'GBP',
      paymentAccepted: 'Cash, Credit Card, Debit Card',
      openingHours: 'Mo-Su 00:00-23:59',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'South Street, Bell Street',
        addressLocality: 'St Andrews',
        addressRegion: 'Fife',
        postalCode: 'KY16 9UR',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 56.3397,
        longitude: -2.7991,
      },
      areaServed: [
        { '@type': 'City', name: 'St Andrews' },
        { '@type': 'AdministrativeArea', name: 'Fife' },
        { '@type': 'City', name: 'Dundee' },
        { '@type': 'City', name: 'Edinburgh' },
        { '@type': 'City', name: 'Perth' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '87',
        bestRating: '5',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I book a taxi in St Andrews?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Call 07981 100009 — available 24/7, 365 days a year. You can also book online using our booking form.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer airport transfers from St Andrews to Edinburgh Airport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Fixed-price transfers to Edinburgh Airport (EDI), approximately 55 miles. Flight tracking included.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you take me to the St Andrews Old Course?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We specialise in golf transfers to the Old Course, Castle Course, Kingsbarns and all local courses.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="geo.region" content="GB-FIF" />
        <meta name="geo.placename" content="St Andrews, Fife, Scotland" />
        <meta name="geo.position" content="56.3397;-2.7991" />
        <meta name="ICBM" content="56.3397, -2.7991" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
