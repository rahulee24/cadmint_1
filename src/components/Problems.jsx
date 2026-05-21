export default function Problems() {
  return (
    <section id="problems" className="section">
      <div className="problems-header reveal">
        <p className="section-label">The problem we solve</p>
        <h2 className="section-title">Great ideas deserve better tools</h2>
        <p className="section-subtitle">Hardware creators lose momentum juggling disconnected tools, steep learning curves, and the gap between simulation and reality.</p>
      </div>

      <div className="problems-grid">
        <div className="problem-card reveal reveal-delay-1">
          <div className="problem-card-glow"></div>
          <p className="problem-card-number">01</p>
          <div className="problem-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </div>
          <h3>High barrier to entry</h3>
          <p>Industrial-grade CAD software demands weeks of training before a student can place their first component. The learning curve kills curiosity.</p>
        </div>

        <div className="problem-card reveal reveal-delay-2">
          <div className="problem-card-glow"></div>
          <p className="problem-card-number">02</p>
          <div className="problem-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8M12 17v4"/>
              <path d="M7 8h2M7 12h4"/>
            </svg>
          </div>
          <h3>Software overload</h3>
          <p>Schematic editor, simulator, PCB layout, BOM manager, vendor portal — five apps open at once means five chances for work to get lost.</p>
        </div>

        <div className="problem-card reveal reveal-delay-3">
          <div className="problem-card-glow"></div>
          <p className="problem-card-number">03</p>
          <div className="problem-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 4a2 2 0 0 1 2 2v6l-3-3"/>
              <path d="M4 14a2 2 0 0 0 2 2h6l-3-3"/>
              <path d="M20 10a2 2 0 0 0-2-2h-2"/>
              <path d="M10 20a2 2 0 0 0 2-2v-2"/>
            </svg>
          </div>
          <h3>Fragmented workflows</h3>
          <p>Design lives in one app, simulation in another, procurement in a spreadsheet. The creative momentum you built in the morning is gone by lunch.</p>
        </div>
      </div>
    </section>
  )
}
