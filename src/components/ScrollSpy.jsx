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
      // Check if user is near the bottom of the page to light up the final node (FAQ)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120
      if (isAtBottom) {
        setActiveId(navItems[navItems.length - 1].id)
        return
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Find the last section that has its top above the scroll trigger point
      let currentId = 'hero'
      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY
          // Once the trigger scrollPosition passes this section's top, it becomes active.
          // Since we iterate downwards, the furthest section down the page that was passed wins.
          if (scrollPosition >= elementTop) {
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
