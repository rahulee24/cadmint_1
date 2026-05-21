'use client'
import { useEffect, useRef, useState } from 'react'

const statsData = [
  { target: 10000, suffix: '+', label: 'Components' },
  { target: 100, suffix: '%', label: 'Browser-based' },
  { target: 1, suffix: '-click', label: 'BOM ordering' },
  { target: 0, suffix: '∞', label: 'Collaboration' },
]

export default function Stats() {
  const sectionRef = useRef(null)
  const [triggered, setTriggered] = useState(false)
  const [values, setValues] = useState(statsData.map(() => '0'))

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          setTriggered(true)
          statsData.forEach((stat, i) => {
            if (stat.target === 0 && stat.suffix === '∞') {
              setValues((prev) => { const n = [...prev]; n[i] = '∞'; return n })
              return
            }
            const duration = 2000
            const startTime = performance.now()
            function animate(currentTime) {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const easedProgress = 1 - Math.pow(1 - progress, 4)
              const current = Math.floor(easedProgress * stat.target)
              setValues((prev) => {
                const n = [...prev]
                n[i] = (stat.target >= 1000 ? current.toLocaleString() : String(current)) + stat.suffix
                return n
              })
              if (progress < 1) requestAnimationFrame(animate)
              else {
                setValues((prev) => {
                  const n = [...prev]
                  n[i] = (stat.target >= 1000 ? stat.target.toLocaleString() : String(stat.target)) + stat.suffix
                  return n
                })
              }
            }
            setTimeout(() => requestAnimationFrame(animate), i * 200)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [triggered])

  return (
    <section id="stats" className="section" ref={sectionRef}>
      <div className="stats-strip reveal">
        <div className="stats-glow"></div>
        {statsData.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-number">{values[i]}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
