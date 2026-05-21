'use client'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const navRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    // Show navbar after mount (loading screen delay)
    const showTimer = setTimeout(() => nav.classList.add('visible'), 100)

    function onScroll() {
      if (window.scrollY > 50) nav.classList.add('scrolled')
      else nav.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(showTimer); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <header id="navbar" ref={navRef}>
      <div className="nav-inner">
        <a href="#" className="nav-brand">
          <div className="nav-logo-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="M11 9h4a2 2 0 0 0 2-2V3"/>
              <circle cx="9" cy="9" r="2"/>
              <path d="M7 21v-4a2 2 0 0 1 2-2h4"/>
              <circle cx="15" cy="15" r="2"/>
            </svg>
          </div>
          <div className="nav-logo-text">
            <h1>CADmint</h1>
            <p>The prototype powered by you</p>
          </div>
        </a>

        <nav>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li><a href="#problems" className="nav-link">Why CADmint</a></li>
            <li><a href="#journey" className="nav-link">Journey</a></li>
            <li><a href="#timeline" className="nav-link">Scenes</a></li>
            <li><a href="#features" className="nav-link">Features</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#cta" className="btn btn-sm btn-secondary magnetic">See How It Works</a>
          <a href="#cta" className="btn btn-sm btn-primary magnetic">Get Early Access</a>
          <button
            className="nav-mobile-toggle"
            id="mobile-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(4px, 4px)' } : {}}></span>
            <span style={menuOpen ? { opacity: 0 } : {}}></span>
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(4px, -4px)' } : {}}></span>
          </button>
        </div>
      </div>
    </header>
  )
}
