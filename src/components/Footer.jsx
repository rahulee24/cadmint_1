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
    <footer className="footer-container">
      <div className="footer-columns">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link href="/" className="footer-logo" style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-0.5px' }}>
            CAD<span style={{ color: '#818cf8' }}>mint</span>
          </Link>
          <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: '1.6', marginTop: '10px' }}>
            Browser-based circuit sketchpad, cloud SPICE simulation, collaborative PCB layout, and supply-chain logistics. Design tomorrow, today.
          </p>
          <div style={{ marginTop: '16px', fontSize: '12px', color: 'var(--fg-dim)' }}>
            A division of <a href="https://hardjunc.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8', fontWeight: '500' }}>hardjunc.dev</a>
          </div>
        </div>

        {/* Column 1: Product */}
        <div>
          <h4 className="footer-col-title">Product</h4>
          <div className="footer-links">
            <span className="footer-link">AI Co-pilot Routing</span>
            <span className="footer-link">SPICE Wave Sim</span>
            <span className="footer-link">Collaborative Workspace</span>
            <span className="footer-link">Pricing Plans</span>
          </div>
        </div>

        {/* Column 2: Resources */}
        <div>
          <h4 className="footer-col-title">Resources</h4>
          <div className="footer-links">
            <span className="footer-link">API Docs & Manual</span>
            <span className="footer-link">Component Libraries</span>
            <span className="footer-link">DRC Guidelines</span>
            <span className="footer-link">System Status</span>
          </div>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="footer-col-title">Company</h4>
          <div className="footer-links">
            <span className="footer-link">About Us</span>
            <span className="footer-link">Engineering Blog</span>
            <span className="footer-link">Security Center</span>
            <span className="footer-link">Careers</span>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="footer-col-title">Stay Connected</h4>
          {subscribed ? (
            <div style={{ fontSize: '12px', color: '#10b981', fontFamily: 'var(--font-mono)' }}>
              ✓ Subscribed successfully! Welcome to CADmint.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="footer-subscribe">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="footer-subscribe-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="footer-subscribe-btn">
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div>
          &copy; {new Date().getFullYear()} CADmint &amp; HardJunc. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span className="footer-link" style={{ fontSize: '12px' }}>Privacy Policy</span>
          <span className="footer-link" style={{ fontSize: '12px' }}>Terms of Service</span>
          <span className="footer-link" style={{ fontSize: '12px' }}>DRC Compliance</span>
        </div>
      </div>
    </footer>
  )
}
