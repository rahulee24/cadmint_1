'use client'
import { useState, useEffect } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showSparkle, setShowSparkle] = useState(false)
  const [userCount, setUserCount] = useState(2387)

  // Slowly increment user count
  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setShowSparkle(true)
    setTimeout(() => setShowSparkle(false), 2000)
  }

  return (
    <section id="cta" className="section">
      <div className="cta-card-premium reveal">
        <div className="cta-animated-border"></div>
        <div className="cta-noise-overlay"></div>
        <div className="cta-glow"></div>
        <div className="cta-content-premium">
          <div className="cta-live-badge">
            <span className="cta-live-dot"></span>
            <span>{userCount.toLocaleString()}+ engineers already building</span>
          </div>
          <p className="section-label">Ready when you are</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Start the project your future self will thank you for</h2>
          <p className="section-subtitle" style={{ maxWidth: '560px', margin: '0 auto 40px' }}>CADmint removes the boring parts of bringing ideas to life so you can spend your energy on the story you are trying to tell with hardware.</p>

          {submitted ? (
            <div className="cta-success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>You&apos;re on the list! We&apos;ll be in touch soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="cta-email-form">
              <div className="cta-input-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
              </div>
              <button type="submit" className="cta-submit-btn magnetic">
                Get early access
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </form>
          )}
          <p className="cta-hint">No credit card required · Free during beta · Cancel anytime</p>
        </div>
        {showSparkle && (
          <div className="cta-sparkle-burst" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="cta-sparkle" style={{
                '--angle': `${(i * 30)}deg`,
                '--delay': `${i * 0.05}s`,
                '--distance': `${60 + Math.random() * 40}px`,
              }}></div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
