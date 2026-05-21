export default function Problems() {
  const painPoints = [
    {
      num: '01',
      title: 'High entry barrier',
      desc: 'Industrial-grade CAD software demands weeks of training before a student can place their first component. The steep learning curve kills curiosity.'
    },
    {
      num: '02',
      title: 'Software overload',
      desc: 'Schematic editor, simulator, PCB layout, BOM manager, vendor portal — five apps open at once means five chances for work to get lost.'
    },
    {
      num: '03',
      title: 'Fragmented workflows',
      desc: 'Design lives in one app, simulation in another, procurement in a spreadsheet. The creative momentum you built in the morning is gone by lunch.'
    }
  ]

  const solutions = [
    {
      num: '01',
      title: 'Zero-Install Editor',
      desc: 'Start designing instantly in the browser. A sleek drag-and-drop interface lets students and experts go from idea to active canvas in under 10 seconds.'
    },
    {
      num: '02',
      title: 'All-in-One Twin',
      desc: 'No more window switching. Schematic drawing, real-time SPICE sweeps, automated DRC rules, and inventory portals are united in a single tab.'
    },
    {
      num: '03',
      title: 'Connected Digital Twin',
      desc: 'We bind your schematic, 3D model, simulation waves, and live component inventory into a single reactive entity. What you simulate is what you build.'
    }
  ]

  return (
    <section id="problems" className="section">
      <div className="problems-header reveal reveal-visible">
        <p className="section-label">Legacy CAD vs. CADmint</p>
        <h2 className="section-title">Great ideas deserve better tools</h2>
        <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto 50px' }}>
          Traditional electronics engineering forces creators to juggle complex disconnected tools. We unified the process to protect your creative momentum.
        </p>
      </div>

      <div className="compare-grid">
        {/* Pain Column */}
        <div className="compare-column">
          <h3 className="section-subtitle" style={{ textAlign: 'left', fontWeight: '500', color: '#f87171', margin: '0 0 10px 10px', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            The Pain of Legacy CAD
          </h3>
          {painPoints.map((pain, i) => (
            <div key={i} className="compare-card pain reveal reveal-visible">
              <span className="compare-badge pain">Legacy bottleneck</span>
              <div className="compare-icon-indicator pain">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#fca5a5', marginBottom: '12px', fontWeight: '400' }}>
                {pain.title}
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--fg-muted)', lineHeight: '1.6' }}>
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Solution Column */}
        <div className="compare-column">
          <h3 className="section-subtitle" style={{ textAlign: 'left', fontWeight: '500', color: '#34d399', margin: '0 0 10px 10px', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            The CADmint Solution
          </h3>
          {solutions.map((sol, i) => (
            <div key={i} className="compare-card solution reveal reveal-visible">
              <span className="compare-badge solution">Modern Twin</span>
              <div className="compare-icon-indicator solution">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#a7f3d0', marginBottom: '12px', fontWeight: '400' }}>
                {sol.title}
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--fg-muted)', lineHeight: '1.6' }}>
                {sol.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

