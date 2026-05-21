import { EB_Garamond, Inter, Fira_Code } from 'next/font/google'
import './globals.css'

const ebGaramond = EB_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-eb-garamond',
})

const inter = Inter({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-inter',
})

const firaCode = Fira_Code({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata = {
  title: 'CADmint — Professional Electronics Design Studio',
  description:
    'Browser-based circuit design, SPICE simulation, PCB layout, and supply chain integration. From sketch to shipped product in one place.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${inter.variable} ${firaCode.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
