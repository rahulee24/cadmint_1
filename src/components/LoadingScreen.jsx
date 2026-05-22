'use client'
import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const duration = 2200
    const start = performance.now()
    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setPercentage(Math.floor(eased * 100))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    const timer = setTimeout(() => setHidden(true), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loading-screen" className={hidden ? 'hidden' : ''}>
      <div className="loader-circuit" aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path className="loader-trace" d="M10 60 H40 L50 30 H70 L80 60 H110" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" pathLength="1" />
          <path className="loader-trace loader-trace-2" d="M10 80 H30 L40 50 H60 L70 80 H90 L100 50 H110" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" pathLength="1" />
          <circle className="loader-node" cx="40" cy="60" r="3" fill="#6366f1" />
          <circle className="loader-node" cx="80" cy="60" r="3" fill="#6366f1" />
          <circle className="loader-node loader-node-delay" cx="60" cy="30" r="2.5" fill="#a855f7" />
        </svg>
      </div>
      <div className="loader-logo">CAD<span>mint</span></div>
      <div className="loader-bar-track"><div className="loader-bar"></div></div>
      <div className="loader-percentage">{percentage}%</div>
      <div className="loader-tagline">Initializing design studio</div>
    </div>
  )
}
