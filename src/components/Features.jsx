'use client'
import { useState, useEffect, useRef } from 'react'

export default function Features() {
  // States for interactive subcomponents
  const [terminalLogs, setTerminalLogs] = useState([])
  const [waveOffset, setWaveOffset] = useState(0)
  const [stockCounts, setStockCounts] = useState([24192, 12840, 4103])
  const [activeUser, setActiveUser] = useState(0)

  // 1. AI Co-pilot Terminal typing effect
  useEffect(() => {
    const logs = [
      '>> Initializing AI routing co-pilot...',
      '>> Analyzing board layer constraints...',
      '>> Match trace: Trace 14 (50 ohm differential pair)',
      '>> Optimizing via Layer 2 inner ground plane...',
      '>> Sweep complete in 2.4s. 0 DRC violations.',
      '>> Re-running SPICE simulation sweeps...',
      '>> Frequency sweep: Peak gain @ 2.4GHz.',
      '>> System stable. Ready to export Gerbers.'
    ]

    let currentLogIndex = 0
    const interval = setInterval(() => {
      setTerminalLogs(prev => {
        const nextLogs = [...prev, logs[currentLogIndex]]
        if (nextLogs.length > 5) {
          nextLogs.shift()
        }
        return nextLogs
      })
      currentLogIndex = (currentLogIndex + 1) % logs.length
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  // 2. Oscilloscope wave animation
  useEffect(() => {
    let animFrame
    const updateWave = () => {
      setWaveOffset(prev => (prev + 0.05) % (Math.PI * 2))
      animFrame = requestAnimationFrame(updateWave)
    }
    animFrame = requestAnimationFrame(updateWave)
    return () => cancelAnimationFrame(animFrame)
  }, [])

  // 3. Stock counts tick
  useEffect(() => {
    const interval = setInterval(() => {
      setStockCounts(prev => {
        return prev.map((count, idx) => {
          // STM32/ESP32 stock decreases, Regulator fluctuatues
          const delta = idx === 2 ? (Math.random() > 0.5 ? 10 : -10) : -Math.floor(Math.random() * 2)
          return Math.max(0, count + delta)
        })
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // 4. Multiplayer hubs active cursor shift
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUser(prev => (prev + 1) % 3)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  // Wave points calculation for SVG
  const generateWavePath = (frequency, amplitude, phaseShift) => {
    const points = []
    const width = 300
    const height = 120
    const midY = height / 2

    for (let x = 0; x <= width; x += 5) {
      const angle = (x / width) * Math.PI * 2 * frequency + phaseShift
      const y = midY + Math.sin(angle) * amplitude
      points.push(`${x},${y}`)
    }
    return `M ${points.join(' L ')}`
  }

  return (
    <section id="features" className="section">
      <div className="features-header reveal reveal-visible">
        <p className="section-label">Interactive Capabilities</p>
        <h2 className="section-title">Everything you need, nothing you don&apos;t</h2>
        <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto 50px' }}>
          Four pillars of the CADmint studio environment. Explore the fully responsive bento grid to watch real-time simulated processes in action.
        </p>
      </div>

      <div className="bento-grid">
        {/* Bento Card 1: AI Routing Co-pilot (Large) */}
        <div className="bento-card bento-large-col">
          <div className="bento-glow"></div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
                <path d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"/>
              </svg>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '400', color: '#fff' }}>
                AI Routing Co-pilot
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: '1.6' }}>
              Let our automated copilot map routing trace sweeps instantly. Describe board constraints in plain English and let the AI balance differential pairs, thermal dissipation, and copper plane fills on the fly.
            </p>
          </div>

          <div className="bento-code-terminal">
            {terminalLogs.map((log, index) => {
              let color = '#a5b4fc' // Indigo light
              if (log.includes('stable')) color = '#34d399' // Emerald
              if (log.includes('Analyzing') || log.includes('Match')) color = '#c084fc' // Purple
              return (
                <div key={index} style={{ color, transition: 'all 0.3s ease' }}>
                  {log}
                </div>
              )
            })}
            {terminalLogs.length === 0 && <div style={{ color: '#666' }}>&gt;&gt; Awaiting AI trace prompt...</div>}
          </div>
        </div>

        {/* Bento Card 2: Real-time SPICE Sim (Tall) */}
        <div className="bento-card bento-tall">
          <div className="bento-glow"></div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>
              </svg>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '400', color: '#fff' }}>
                SPICE Simulation
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: '1.6' }}>
              Run full transient, AC, and DC sweeps directly in-browser. Watch voltages, current spikes, and phase diagrams adapt live to every parameter update.
            </p>
          </div>

          <div className="bento-sim-wave-box">
            <svg width="100%" height="100%" viewBox="0 0 300 120" style={{ opacity: 0.85 }}>
              {/* Scope Grid Background */}
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Live Waves */}
              <path
                d={generateWavePath(2, 25, waveOffset)}
                fill="none"
                stroke="#6366f1"
                strokeWidth="2.5"
                style={{ filter: 'drop-shadow(0 0 4px rgba(99, 102, 241, 0.5))' }}
              />
              <path
                d={generateWavePath(4, 15, -waveOffset * 1.5)}
                fill="none"
                stroke="#a855f7"
                strokeWidth="1.5"
                style={{ opacity: 0.6 }}
              />
              <path
                d={generateWavePath(1, 35, waveOffset * 0.5)}
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                style={{ opacity: 0.4 }}
              />
            </svg>
          </div>
        </div>

        {/* Bento Card 3: Multiplayer Hub (Wide) */}
        <div className="bento-card bento-wide">
          <div className="bento-glow"></div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '400', color: '#fff' }}>
                Multiplayer Editing Hub
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: '1.6' }}>
              Hardware is collaborative. Draw schematics with classmates, review multi-layer tracks with your mentor in real-time, and eliminate complex Git branch merges with unified server-side canvas synchronization.
            </p>
          </div>

          <div className="bento-multiplayer-hub">
            <div className="bento-user-badge" style={{ borderColor: activeUser === 0 ? '#10b981' : 'rgba(255, 255, 255, 0.04)', background: activeUser === 0 ? 'rgba(16, 185, 129, 0.06)' : 'rgba(255, 255, 255, 0.02)' }}>
              <div className="bento-user-dot" style={{ color: '#10b981' }}></div>
              <span>@rahul — Routing trace #32 on L1 (Active)</span>
            </div>
            <div className="bento-user-badge" style={{ borderColor: activeUser === 1 ? '#a855f7' : 'rgba(255, 255, 255, 0.04)', background: activeUser === 1 ? 'rgba(168, 85, 247, 0.06)' : 'rgba(255, 255, 255, 0.02)' }}>
              <div className="bento-user-dot" style={{ color: '#a855f7' }}></div>
              <span>@mentor_ai — Running auto-DRC sweeps...</span>
            </div>
            <div className="bento-user-badge" style={{ borderColor: activeUser === 2 ? '#6366f1' : 'rgba(255, 255, 255, 0.04)', background: activeUser === 2 ? 'rgba(99, 102, 241, 0.06)' : 'rgba(255, 255, 255, 0.02)' }}>
              <div className="bento-user-dot" style={{ color: '#6366f1' }}></div>
              <span>@collaborator_1 — Auditing BOM pricing tickers</span>
            </div>
          </div>
        </div>

        {/* Bento Card 4: Inventory & Procurement */}
        <div className="bento-card">
          <div className="bento-glow"></div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '400', color: '#fff' }}>
                BOM Procurement
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: '1.6' }}>
              Instant bill-of-materials generation connected directly with live distributor pricing databases.
            </p>
          </div>

          <div className="bento-inventory-list">
            <div className="bento-inventory-item">
              <span style={{ color: '#cbd5e1' }}>STM32F405RGT6</span>
              <span style={{ color: '#34d399' }}>{stockCounts[0].toLocaleString()} in stock</span>
            </div>
            <div className="bento-inventory-item">
              <span style={{ color: '#cbd5e1' }}>ESP32-S3-WROOM</span>
              <span style={{ color: '#34d399' }}>{stockCounts[1].toLocaleString()} in stock</span>
            </div>
            <div className="bento-inventory-item">
              <span style={{ color: '#cbd5e1' }}>MP2307 Regulator</span>
              <span style={{ color: '#34d399' }}>{stockCounts[2].toLocaleString()} in stock</span>
            </div>
            <div className="bento-inventory-item">
              <span style={{ color: '#e2e8f0', opacity: 0.6 }}>TPS563200 Regulator</span>
              <span style={{ color: '#f87171' }}>Out of Stock</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

