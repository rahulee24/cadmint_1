'use client'
import { useState, useEffect, useCallback } from 'react'

const TESTIMONIALS = [
  {
    quote: 'CADmint collapsed our prototyping cycle from weeks to hours. The AI co-pilot caught a thermal issue we missed entirely in review.',
    name: 'Priya Sharma',
    role: 'Hardware Lead',
    company: 'NexaBridge Robotics',
    initials: 'PS',
    accentColor: '#6366f1'
  },
  {
    quote: 'We switched from Altium to CADmint for our student rocketry team. The browser-based editor means everyone can contribute without license headaches.',
    name: 'Marcus Chen',
    role: 'Team Captain',
    company: 'MIT Rocketry Club',
    initials: 'MC',
    accentColor: '#a855f7'
  },
  {
    quote: 'The BOM procurement integration alone saved us $18k on our first production run. Real-time stock alerts prevented three component shortages.',
    name: 'Elena Vasquez',
    role: 'Supply Chain Director',
    company: 'TerraVolt Energy',
    initials: 'EV',
    accentColor: '#10b981'
  },
  {
    quote: 'I taught myself PCB design using CADmint. The learning curve is genuinely flat — I had my first board manufactured within a week of signing up.',
    name: 'James Okonkwo',
    role: 'Embedded Systems Student',
    company: 'University of Lagos',
    initials: 'JO',
    accentColor: '#f59e0b'
  },
  {
    quote: 'The multiplayer editing is a game-changer for distributed teams. Our engineers in Berlin and Bangalore work on the same schematic simultaneously.',
    name: 'Anika Müller',
    role: 'VP of Engineering',
    company: 'Stratos Dynamics GmbH',
    initials: 'AM',
    accentColor: '#ec4899'
  }
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index) => {
    if (index === active || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setIsTransitioning(false)
    }, 300)
  }, [active, isTransitioning])

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % TESTIMONIALS.length
        return next
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const current = TESTIMONIALS[active]

  return (
    <section id="testimonials" className="section" style={{ padding: '80px 0' }}>
      <div className="testimonials-header reveal">
        <p className="section-label">What builders say</p>
        <h2 className="section-title">Loved by engineers who ship</h2>
      </div>

      <div className="testimonials-container reveal">
        <div className="testimonial-card-wrapper">
          <div className={`testimonial-card ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="testimonial-quote-mark">&ldquo;</div>
            <blockquote className="testimonial-quote">{current.quote}</blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar" style={{ borderColor: current.accentColor }}>
                <span>{current.initials}</span>
              </div>
              <div className="testimonial-author-info">
                <div className="testimonial-name">{current.name}</div>
                <div className="testimonial-role">{current.role}, {current.company}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-nav">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === active ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Testimonial from ${t.name}`}
            >
              <span className="testimonial-dot-inner" style={{ background: i === active ? t.accentColor : undefined }}></span>
            </button>
          ))}
        </div>

        <div className="testimonial-preview-row">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={i}
              className={`testimonial-preview ${i === active ? 'active' : ''}`}
              onClick={() => goTo(i)}
            >
              <div className="testimonial-preview-avatar" style={{ borderColor: i === active ? t.accentColor : 'transparent' }}>
                {t.initials}
              </div>
              <span className="testimonial-preview-name">{t.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
