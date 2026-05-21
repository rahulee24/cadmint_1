'use client'
import { useEffect, useRef, useState } from 'react'

const statsData = [
  { target: 12400, suffix: '+', label: 'Components Cataloged', live: true },
  { target: 100, suffix: '%', label: 'Cloud SPICE Sweeps', live: false },
  { target: 2.4, suffix: 's', label: 'Auto-Route Sweeps', live: false, isFloat: true },
  { target: 8, suffix: ' Nodes', label: 'Multiplayer Hubs', live: true, isInf: true },
]

export default function Stats() {
  const sectionRef = useRef(null)
  const [triggered, setTriggered] = useState(false)
  const [values, setValues] = useState([0, 0, 0, 0])
  const [liveComponents, setLiveComponents] = useState(12482)
  const [liveNodes, setLiveNodes] = useState(18)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          setTriggered(true)
          
          statsData.forEach((stat, i) => {
            const duration = 2000
            const startTime = performance.now()

            function animate(currentTime) {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const easedProgress = 1 - Math.pow(1 - progress, 4) // Quartic ease-out

              let currentVal
              if (stat.isFloat) {
                currentVal = (easedProgress * stat.target).toFixed(1)
              } else {
                currentVal = Math.floor(easedProgress * stat.target)
              }

              setValues((prev) => {
                const n = [...prev]
                n[i] = currentVal
                return n
              })

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setValues((prev) => {
                  const n = [...prev]
                  n[i] = stat.target
                  return n
                })
              }
            }

            requestAnimationFrame(animate)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [triggered])

  // Live telemetry micro-updates to make the site feel "alive"
  useEffect(() => {
    if (!triggered) return

    const interval = setInterval(() => {
      // Add random components to simulate live cataloging
      setLiveComponents(prev => prev + Math.floor(Math.random() * 3) + 1)
      // Toggle multiplayer nodes slightly
      setLiveNodes(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        const newVal = prev + change
        return newVal > 4 ? (newVal < 32 ? newVal : 32) : 4
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [triggered])

  return (
    <section id="stats" className="section" ref={sectionRef} style={{ padding: '40px 0' }}>
      <div className="telemetry-strip reveal reveal-visible">
        {statsData.map((stat, i) => {
          let displayVal = ''
          if (!triggered) {
            displayVal = '0' + stat.suffix
          } else {
            if (stat.isInf) {
              displayVal = `∞`
            } else if (stat.label.includes('Components')) {
              displayVal = liveComponents.toLocaleString() + '+'
            } else if (stat.label.includes('Multiplayer')) {
              displayVal = `${liveNodes} Nodes`
            } else {
              displayVal = values[i] + stat.suffix
            }
          }

          return (
            <div className="telemetry-item" key={i}>
              {stat.live && <div className="telemetry-active-pulse"></div>}
              <div className="telemetry-val">{displayVal}</div>
              <div className="telemetry-label">{stat.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

