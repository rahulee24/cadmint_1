'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="footer-compact-container">
      <div className="footer-compact-inner">
        {/* LEFT: Logo & Short description */}
        <div className="footer-compact-left">
          <div className="footer-compact-brand">
            <Link href="/" className="footer-compact-logo">
              CAD<span>mint</span>
            </Link>
            <div className="footer-compact-badge">v4.2</div>
          </div>
          <p className="footer-compact-desc">
            Browser circuit sketchpad, SPICE simulation, and PCB layout. A division of <a href="https://hardjunc.dev" target="_blank" rel="noopener noreferrer">hardjunc.dev</a>.
          </p>
        </div>

        {/* MID: Compact Horizontal Navigation */}
        <div className="footer-compact-mid">
          <a href="#problems" className="footer-compact-link">Comparison</a>
          <div className="footer-compact-dot"></div>
          <a href="#features" className="footer-compact-link">Features</a>
          <div className="footer-compact-dot"></div>
          <a href="#pricing" className="footer-compact-link">Pricing</a>
          <div className="footer-compact-dot"></div>
          <a href="#timeline" className="footer-compact-link">Timeline</a>
          <div className="footer-compact-dot"></div>
          <a href="#faq" className="footer-compact-link">FAQ</a>
        </div>

        {/* RIGHT: Compact Subscription Form */}
        <div className="footer-compact-right">
          {subscribed ? (
            <div className="footer-compact-subscribed">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: '6px' }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Subscribed
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="footer-compact-form">
              <input 
                type="email" 
                placeholder="Stay updated" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Newsletter email"
              />
              <button type="submit" className="magnetic">
                JOIN
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Sub-bar Copyright */}
      <div className="footer-compact-subbar">
        <div>
          &copy; {new Date().getFullYear()} CADmint. All rights reserved.
        </div>
        <div className="footer-compact-subbar-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>DRC Compliance</span>
        </div>
      </div>
    </footer>
  )
}
