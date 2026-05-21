import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import ParticleCanvas from '@/components/ParticleCanvas'
import ScrollProgress from '@/components/ScrollProgress'
import ClientEffects from '@/components/ClientEffects'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problems from '@/components/Problems'
import Journey from '@/components/Journey'
import Timeline from '@/components/Timeline'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <div className="scanline-overlay" aria-hidden="true"></div>
      <ParticleCanvas />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider"></div>
        <Problems />
        <div className="section-divider"></div>
        <Journey />
        <div className="section-divider"></div>
        <Timeline />
        <div className="section-divider"></div>
        <Features />
        <div className="section-divider"></div>
        <Stats />
        <div className="section-divider"></div>
        <CTA />
      </main>
      <Footer />
      <ClientEffects />
    </>
  )
}
