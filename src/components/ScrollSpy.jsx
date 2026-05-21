'use client'
import { useEffect, useState } from 'react'

const navItems = [
  { id: 'hero', label: 'Studio' },
  { id: 'stats', label: 'Telemetry' },
  { id: 'problems', label: 'Comparison' },
  { id: 'features', label: 'Features' },
  { id: 'journey', label: 'Journey' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' }
]

export default function ScrollSpy() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      let currentId = 'hero'
      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const elementTop = top + window.scrollY
          const elementBottom = bottom + window.scrollY

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentId = item.id
          }
        }
      }
      setActiveId(currentId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="scroll-spy">
      <div className="scroll-spy-track">
        {navItems.map((item) => (
          <div 
            key={item.id} 
            className={`scroll-spy-item ${activeId === item.id ? 'active' : ''}`}
            onClick={() => scrollTo(item.id)}
            title={item.label}
          >
            <div className="scroll-spy-dot"></div>
            <span className="scroll-spy-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
