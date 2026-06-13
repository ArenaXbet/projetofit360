import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script'

const geist = Geist({
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Projeto Fit 360 | DTX Black, Lipo Extremo e Detox Premium',

  description:
    'Os suplementos mais procurados para quem busca mais energia, foco, disposição e apoio ao emagrecimento. Compre com segurança e receba em todo o Brasil.',

  keywords: [
    'DTX Black',
    'Lipo Extremo',
    'Detox Premium',
    'suplementos para emagrecer',
    'emagrecimento',
    'queima de gordura',
    'detox',
    'energia',
    'foco',
    'Projeto Fit 360',
  ],

  generator: 'ProjetoFit360',

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  metadataBase: new URL('https://www.projetofit360.com.br'),

  openGraph: {
    title: 'Projeto Fit 360 | DTX Black, Lipo Extremo e Detox Premium',
    description:
      'Suplementos premium para acelerar seu metabolismo, aumentar disposição e transformar seu corpo.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Projeto Fit 360',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Projeto Fit 360',
    description:
      'Suplementos premium para acelerar seu metabolismo, aumentar disposição e transformar seu corpo.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Script id="facebook-pixel" strategy="afterInteractive">
    {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '1702048977704383');
      fbq('track', 'PageView');
    `}
  </Script>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}