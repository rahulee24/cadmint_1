import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import ParticleCanvas from '@/components/ParticleCanvas'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollSpy from '@/components/ScrollSpy'
import ClientEffects from '@/components/ClientEffects'
import GradientMesh from '@/components/GradientMesh'
import CommandPalette from '@/components/CommandPalette'
import TrustStrip from '@/components/TrustStrip'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Ecosystem from '@/components/Ecosystem'
import Testimonials from '@/components/Testimonials'
import Problems from '@/components/Problems'
import Features from '@/components/Features'
import Journey from '@/components/Journey'
import Pricing from '@/components/Pricing'
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
      <GradientMesh />

      <LoadingScreen />
      <CustomCursor />
      <div className="scanline-overlay" aria-hidden="true"></div>
      <ParticleCanvas />
      <ScrollProgress />
      <ScrollSpy />
      <CommandPalette />

      <Navbar />
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pt-28">
        <TrustStrip />
        <Hero />
        <Stats />
        <Ecosystem />
        <Testimonials />
        <div className="section-divider-gradient"></div>
        <Problems />
        <div className="section-divider-gradient"></div>
        <Features />
        <div className="section-divider-gradient"></div>
        <Journey />
        <div className="section-divider-gradient"></div>
        <Pricing />
        <div className="section-divider-gradient"></div>
        <Timeline />
        <div className="section-divider-gradient"></div>
        <FAQ />
        <div className="section-divider-gradient"></div>
        <CTA />
      </main>
      <Footer />
      <ClientEffects />
    </div>
  )
}
