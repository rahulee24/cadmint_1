export default function CTA() {
  return (
    <section id="cta" className="section">
      <div className="cta-card reveal">
        <div className="cta-glow"></div>
        <div className="cta-content">
          <p className="section-label">Ready when you are</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>Start the project your future self will thank you for</h2>
          <p className="section-subtitle">CADmint removes the boring parts of bringing ideas to life so you can spend your energy on the story you are trying to tell with hardware.</p>
        </div>
        <div className="cta-actions">
          <a href="#" className="btn btn-primary magnetic" style={{ padding: '16px 36px', fontSize: '12px' }}>
            Get early access
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <p className="cta-hint">You will be guided through onboarding before your first project.</p>
        </div>
      </div>
    </section>
  )
}
