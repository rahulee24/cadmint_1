'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const COMPONENTS = [
  { id: 'stm32', name: 'STM32 MCU', category: 'Microcontroller', footprint: 'LQFP-48', pins: 48, status: 'Stock: 14.2k available' },
  { id: 'usbc', name: 'USB-C Conn', category: 'Interface', footprint: 'USB-C-24P', pins: 24, status: 'Stock: 8.5k available' },
  { id: 'resistor', name: '10k Resistor', category: 'Passive', footprint: '0603-PKG', pins: 2, status: 'Stock: 120k available' },
  { id: 'led', name: 'LED [Green]', category: 'Optoelectronics', footprint: '0805-LED', pins: 2, status: 'Stock: 45k available' }
]

export default function Hero() {
  const [activeTab, setActiveTab] = useState('schematic')
  const [activeComp, setActiveComp] = useState(COMPONENTS[0])
  const [activeLayer, setActiveLayer] = useState('top')
  const [simulating, setSimulating] = useState(true)
  const [logs, setLogs] = useState([
    { text: '[09:00:01] CADmint Kernel v4.2.1-lts ready', type: 'info' },
    { text: '[09:00:02] DRC engine loaded successfully', type: 'success' },
    { text: '[09:00:02] AI Copilot: Online & ready to route', type: 'info' }
  ])

  const consoleRef = useRef(null)

  const addConsoleLog = (text, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false })
    setLogs(prev => [...prev, { text: `[${timestamp}] ${text}`, type }])
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    let desc = ''
    if (tab === 'schematic') desc = 'schematic.json'
    else if (tab === 'pcb') desc = 'pcb_layout.copper'
    else if (tab === 'spice') desc = 'simulation.spice'
    addConsoleLog(`Switched view to ${desc}`, 'info')
  }

  const handleComponentClick = (comp) => {
    setActiveComp(comp)
    addConsoleLog(`Inspected component: ${comp.name}`, 'info')
    addConsoleLog(`AI Suggestions updated for ${comp.name}`, 'success')
  }

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight
    }
  }, [logs])

  // Simple auto-simulated log entry to make it feel alive!
  useEffect(() => {
    const interval = setInterval(() => {
      const messages = [
        { text: 'DRC: Checking trace clearances...', type: 'info' },
        { text: 'DRC: 0 errors, 0 warnings. Clearance 100% OK', type: 'success' },
        { text: 'AI: Optimized USB impedance match to 90 ohm', type: 'success' },
        { text: 'DRC: Shielding ground vias placed successfully', type: 'info' }
      ]
      const randomMsg = messages[Math.floor(Math.random() * messages.length)]
      addConsoleLog(randomMsg.text, randomMsg.type)
    }, 12000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="green-badge reveal">End-to-end creation platform</div>

          <h2 className="hero-heading reveal reveal-delay-1">
            <span className="line-dim">Take an idea from sketch</span>
            <span className="line-glow">to shipped product in one place</span>
          </h2>

          <p className="hero-description reveal reveal-delay-2">
            CADmint feels like a creative studio, not a stack of tools. It is where you think out loud, watch your idea move, and then hold the final kit in your hands.
          </p>

          <div className="hero-ctas reveal reveal-delay-3">
            <Link href="/auth/signup" className="btn btn-primary magnetic" style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)', color: '#ffffff' }}>
              Get started now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
            <Link href="/auth/login" className="btn btn-secondary magnetic" style={{ border: '1px solid #334155', backgroundColor: 'rgba(15, 23, 42, 0.8)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><circle cx="12" cy="12" r="10"/><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/></svg>
              Already have an account
            </Link>
          </div>

          <div className="hero-tags reveal reveal-delay-4">
            <span className="hero-tag"><span className="hero-tag-dot green" style={{ backgroundColor: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>Built for students, makers, and teams</span>
            <span className="hero-tag"><span className="hero-tag-dot white" style={{ backgroundColor: '#818cf8', boxShadow: '0 0 10px #818cf8' }}></span>Your first project starts with a story, not a settings page</span>
          </div>
        </div>

        {/* Hero Visual Studio Mockup */}
        <div className="hero-visual reveal reveal-delay-2" style={{ padding: 0, overflow: 'visible' }}>
          <div className="hero-visual-glow" style={{ opacity: 0.12 }}></div>
          
          <div className="studio-mockup">
            {/* Header with Tabs */}
            <div className="studio-header">
              <div className="studio-window-dots">
                <span className="studio-dot red"></span>
                <span className="studio-dot yellow"></span>
                <span className="studio-dot green"></span>
              </div>
              
              <div className="studio-tabs">
                <button 
                  className={`studio-tab ${activeTab === 'schematic' ? 'active' : ''}`}
                  onClick={() => handleTabChange('schematic')}
                >
                  schematic.json
                </button>
                <button 
                  className={`studio-tab ${activeTab === 'pcb' ? 'active' : ''}`}
                  onClick={() => handleTabChange('pcb')}
                >
                  pcb_layout.copper
                </button>
                <button 
                  className={`studio-tab ${activeTab === 'spice' ? 'active' : ''}`}
                  onClick={() => handleTabChange('spice')}
                >
                  simulation.spice
                </button>
              </div>
              <div style={{ width: '40px' }}></div>
            </div>

            {/* Studio Workspace */}
            <div className="studio-workspace">
              {/* Left sidebar: Components */}
              <div className="studio-sidebar">
                <div className="studio-panel-title">COMPONENTS</div>
                <div className="studio-component-list">
                  {COMPONENTS.map(comp => (
                    <button
                      key={comp.id}
                      className={`studio-component-item ${activeComp?.id === comp.id ? 'active' : ''}`}
                      onClick={() => handleComponentClick(comp)}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '2px' }}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" /></svg>
                      {comp.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Center Canvas */}
              <div className="studio-canvas-container">
                <div className="studio-grid-background"></div>

                {/* Schematic Canvas */}
                {activeTab === 'schematic' && (
                  <svg className="schematic-svg" viewBox="0 0 400 300" style={{ width: '100%', height: '100%', position: 'relative', zIndex: 5 }}>
                    {/* MCU rectangle */}
                    <rect x="130" y="80" width="140" height="140" rx="8" fill="rgba(99, 102, 241, 0.03)" stroke="#6366f1" strokeWidth="1.5" className="active-pulse" />
                    <text x="200" y="142" fill="#a855f7" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle" fontWeight="bold">STM32F4-MCU</text>
                    <text x="200" y="156" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="var(--font-mono)" textAnchor="middle">DRC: COMPLIANT</text>

                    {/* Resistor R1 */}
                    <rect x="40" y="138" width="30" height="16" rx="2" fill="rgba(16, 185, 129, 0.05)" stroke="#10b981" strokeWidth="1" />
                    <path d="M 40,146 L 20,146" stroke="#10b981" strokeWidth="1" />
                    <path d="M 70,146 L 130,146" stroke="#10b981" strokeWidth="1" className="trace-path" />
                    <text x="55" y="128" fill="#10b981" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">R1 (10k)</text>

                    {/* LED D1 */}
                    <polygon points="330,138 330,154 344,146" fill="rgba(244, 63, 94, 0.05)" stroke="#f43f5e" strokeWidth="1" />
                    <line x1="344" y1="138" x2="344" y2="154" stroke="#f43f5e" strokeWidth="1" />
                    <path d="M 270,146 L 330,146" stroke="#a855f7" strokeWidth="1" className="trace-path" />
                    <path d="M 344,146 L 380,146" stroke="#f43f5e" strokeWidth="1" />
                    <text x="337" y="128" fill="#f43f5e" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">D1 (LED)</text>

                    {/* VCC Node */}
                    <path d="M 200,40 L 200,80" stroke="#6366f1" strokeWidth="1" className="trace-path" />
                    <circle cx="200" cy="40" r="3" fill="#6366f1" />
                    <text x="200" y="32" fill="#6366f1" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">3.3V VCC</text>

                    {/* GND Node */}
                    <path d="M 200,220 L 200,260" stroke="#666" strokeWidth="1" />
                    <line x1="190" y1="260" x2="210" y2="260" stroke="#666" strokeWidth="1.5" />
                    <line x1="194" y1="264" x2="206" y2="264" stroke="#666" strokeWidth="1.5" />
                    <line x1="198" y1="268" x2="202" y2="268" stroke="#666" strokeWidth="1.5" />
                    <text x="200" y="280" fill="#666" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">GND</text>
                  </svg>
                )}

                {/* PCB Canvas */}
                {activeTab === 'pcb' && (
                  <>
                    <svg className="pcb-svg" viewBox="0 0 400 300" style={{ width: '100%', height: '100%', position: 'relative', zIndex: 5 }}>
                      {/* PCB Base Board */}
                      <rect x="20" y="20" width="360" height="260" rx="16" fill="rgba(15, 23, 42, 0.4)" stroke="#334155" strokeWidth="1.5" />
                      
                      {/* Integrated MCU */}
                      <rect x="130" y="80" width="140" height="140" rx="6" fill="rgba(30, 41, 59, 0.8)" stroke="#475569" strokeWidth="1" />
                      
                      {/* Surface Mount Pads */}
                      {[...Array(6)].map((_, i) => (
                        <g key={i}>
                          <rect x="116" y={94 + i*22} width="14" height="6" fill="#cbd5e1" opacity="0.8" rx="1" />
                          <rect x="270" y={94 + i*22} width="14" height="6" fill="#cbd5e1" opacity="0.8" rx="1" />
                        </g>
                      ))}

                      {/* Top Layer Traces (Indigo) */}
                      <path d="M 60,94 H 116" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={activeLayer === 'top' ? 1 : 0.2} className={activeLayer === 'top' ? 'active-pulse' : ''} />
                      <path d="M 60,160 H 116" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={activeLayer === 'top' ? 1 : 0.2} className={activeLayer === 'top' ? 'active-pulse' : ''} />
                      <path d="M 284,116 H 340 V 180" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={activeLayer === 'top' ? 1 : 0.2} className={activeLayer === 'top' ? 'active-pulse' : ''} />

                      {/* Bottom Layer Traces (Purple) */}
                      <path d="M 60,226 H 90 L 116,182" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={activeLayer === 'bottom' ? 1 : 0.2} className={activeLayer === 'bottom' ? 'active-pulse' : ''} />
                      <path d="M 284,182 H 310 L 340,226" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={activeLayer === 'bottom' ? 1 : 0.2} className={activeLayer === 'bottom' ? 'active-pulse' : ''} />
                      <path d="M 200,50 V 80" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={activeLayer === 'bottom' ? 1 : 0.2} className={activeLayer === 'bottom' ? 'active-pulse' : ''} />

                      {/* Vias */}
                      <circle cx="90" cy="226" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="0.8" />
                      <circle cx="310" cy="182" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="0.8" />
                    </svg>

                    <button 
                      onClick={() => {
                        const nextLayer = activeLayer === 'top' ? 'bottom' : 'top'
                        setActiveLayer(nextLayer)
                        addConsoleLog(`Flipped PCB viewport to ${nextLayer.toUpperCase()} copper trace layer.`, 'info')
                      }}
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        zIndex: 10,
                        padding: '6px 10px',
                        borderRadius: '6px',
                        border: '1px solid var(--border)',
                        background: 'rgba(9, 13, 25, 0.85)',
                        color: activeLayer === 'top' ? '#6366f1' : '#a855f7',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '9px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      }}
                      className="magnetic"
                    >
                      LAYER: {activeLayer.toUpperCase()}
                    </button>
                  </>
                )}

                {/* SPICE Simulation Canvas */}
                {activeTab === 'spice' && (
                  <>
                    <div className="oscilloscope-grid"></div>
                    <svg className="spice-svg" viewBox="0 0 400 300" style={{ width: '100%', height: '100%', position: 'relative', zIndex: 5 }}>
                      {/* Grid Lines */}
                      <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(99, 102, 241, 0.2)" strokeDasharray="4 4" />
                      <line x1="200" y1="0" x2="200" y2="300" stroke="rgba(99, 102, 241, 0.2)" strokeDasharray="4 4" />

                      {/* Green Sine Wave */}
                      <path
                        d="M -40,150 Q 10,50 60,150 T 160,150 T 260,150 T 360,150 T 460,150"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        className={simulating ? 'sim-sine-wave' : ''}
                        style={{ filter: 'drop-shadow(0 0 6px #10b981)' }}
                      />
                      
                      {/* Indigo Secondary Wave */}
                      <path
                        d="M -40,150 Q 10,95 60,150 T 160,150 T 260,150 T 360,150 T 460,150"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="1.5"
                        opacity="0.6"
                        className={simulating ? 'sim-sine-wave' : ''}
                        style={{ filter: 'drop-shadow(0 0 3px #6366f1)', animationDelay: '-0.5s' }}
                      />
                    </svg>

                    <button 
                      onClick={() => {
                        setSimulating(!simulating)
                        addConsoleLog(`Simulation SPICE sweep ${!simulating ? 'RESUMED' : 'PAUSED'}.`, !simulating ? 'success' : 'warning')
                      }}
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        zIndex: 10,
                        padding: '6px 10px',
                        borderRadius: '6px',
                        border: '1px solid var(--border)',
                        background: 'rgba(9, 13, 25, 0.85)',
                        color: simulating ? '#10b981' : '#f59e0b',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '9px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      }}
                      className="magnetic"
                    >
                      {simulating ? 'PAUSE WAVE' : 'RUN WAVE'}
                    </button>
                  </>
                )}

                {/* Inspect Component Card HUD Overlay */}
                {activeComp && (
                  <div className="studio-inspect-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#a855f7', fontWeight: 'bold' }}>
                        {activeComp.name}
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveComp(null)
                        }} 
                        style={{ color: 'var(--fg-dim)', fontSize: '9px', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
                      >
                        [ESC]
                      </button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', fontSize: '9px', fontFamily: 'var(--font-body)', color: 'var(--fg-muted)' }}>
                      <div>Type: <span style={{ color: '#fff' }}>{activeComp.category}</span></div>
                      <div>Footprint: <span style={{ color: '#fff' }}>{activeComp.footprint}</span></div>
                      <div>Pins: <span style={{ color: '#fff' }}>{activeComp.pins}</span></div>
                      <div>DRC Status: <span style={{ color: '#10b981' }}>PASSED</span></div>
                    </div>
                    <div style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: '#f59e0b', marginTop: '6px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4px' }}>
                      {activeComp.status}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Panel: AI Co-Pilot Console Logs */}
              <div className="studio-panel-right">
                <div className="studio-panel-title">AI CO-PILOT LOGS</div>
                <div className="studio-console" ref={consoleRef}>
                  {logs.map((log, idx) => (
                    <div key={idx} className={`console-log ${log.type}`}>
                      {log.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
