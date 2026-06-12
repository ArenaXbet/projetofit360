import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
      <body
        className={`${geist.className} antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}