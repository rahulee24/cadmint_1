'use client'
import { useState, useEffect, useRef } from 'react'

export default function TrustStrip() {
  const [count, setCount] = useState(0)
  const [activeNow, setActiveNow] = useState(12)
  const ref = useRef(null)
  const targetCount = 2400

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000
          const start = performance.now()
          function tick(now) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(eased * targetCount))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Fluctuate active count
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNow((prev) => Math.max(8, prev + Math.floor(Math.random() * 5) - 2))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="trust-strip reveal" ref={ref}>
      <div className="trust-strip-inner">
        <div className="trust-avatars">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="trust-avatar" style={{ zIndex: 5 - i, marginLeft: i > 0 ? '-8px' : '0' }}>
              <span style={{ fontSize: '10px' }}>{['R', 'A', 'M', 'S', 'K'][i]}</span>
            </div>
          ))}
        </div>
        <div className="trust-text">
          <span className="trust-text-prefix">Trusted by</span>
          <span className="trust-count">{count.toLocaleString()}+</span>
          <span className="trust-text-suffix">hardware teams worldwide</span>
        </div>
        <div className="trust-live">
          <span className="trust-live-dot"></span>
          <span className="trust-live-text">{activeNow} teams active now</span>
        </div>
      </div>
    </div>
  )
}
