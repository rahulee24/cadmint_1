'use client'
import { useEffect, useRef } from 'react'

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    // Staggered entrance after page load
    const showTimer = setTimeout(() => {
      nav.style.opacity = '1'
      nav.style.transform = 'translateY(0)'
    }, 100)
    return () => clearTimeout(showTimer)
  }, [])

  return (
    <header
      id="navbar"
      ref={navRef}
      className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-xl"
      style={{
        opacity: 0,
        transform: 'translateY(-70px)',
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: '16px 24px',
        width: '100%'
      }}
    >
      <div className="nav-inner" style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="nav-logo-icon" style={{
            borderRadius: '16px',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-indigo-400" style={{ color: '#818cf8' }}>
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M11 9h4a2 2 0 0 0 2-2V3" />
              <circle cx="9" cy="9" r="2" />
              <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
              <circle cx="15" cy="15" r="2" />
            </svg>
          </div>
          <div>
            <h1 className="bg-linear-to-r from-white to-slate-200 bg-clip-text text-2xl font-black text-transparent sm:text-3xl" style={{ margin: 0, fontWeight: 900, fontSize: '24px', letterSpacing: '-0.02em', background: 'linear-gradient(90deg, #ffffff, #cbd5e1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              CADmint
            </h1>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500" style={{ margin: '1px 0 0 0', fontSize: '9px', color: '#64748b' }}>
              The prototype powered by you
            </p>
          </div>
        </a>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="#journey"
            className="btn btn-sm btn-secondary magnetic"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '40px',
              borderRadius: '9999px',
              border: '1px solid #334155',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              padding: '0 20px',
              fontSize: '11px',
              fontFamily: 'var(--font-geist-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#e2e8f0',
              transition: 'all 0.3s'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" style={{ marginRight: '6px', width: '14px', height: '14px' }}>
              <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            See how it works
          </a>
          <a
            href="/auth/signup"
            className="btn btn-sm btn-primary magnetic"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '40px',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, #10b981, #6366f1, #a855f7)',
              padding: '0 24px',
              fontSize: '11px',
              fontWeight: 600,
              fontFamily: 'var(--font-geist-sans)',
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: '#020617',
              boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)',
              transition: 'all 0.3s'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" style={{ marginRight: '6px', width: '14px', height: '14px' }}>
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
            Get early access
          </a>
        </div>
      </div>
    </header>
  )
}
