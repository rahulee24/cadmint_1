import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import ParticleCanvas from '@/components/ParticleCanvas'
import ScrollProgress from '@/components/ScrollProgress'
import ClientEffects from '@/components/ClientEffects'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Timeline from '@/components/Timeline'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="vercel-bg-wrapper">
      <div className="vercel-grid-overlay" aria-hidden="true"></div>
      <div className="vercel-glow-1" aria-hidden="true"></div>
      <div className="vercel-glow-2" aria-hidden="true"></div>

      <LoadingScreen />
      <CustomCursor />
      <div className="scanline-overlay" aria-hidden="true"></div>
      <ParticleCanvas />
      <ScrollProgress />
      
      <Navbar />
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pt-28">
        <Hero />
        <Journey />
        <Timeline />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ClientEffects />
    </div>
  )
}


