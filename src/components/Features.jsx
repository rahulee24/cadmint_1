export default function Features() {
  const features = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3z"/><circle cx="17.5" cy="17.5" r="3.5"/></svg>,
      title: 'Circuit Design',
      desc: 'Drag-and-drop schematic editor with intelligent auto-routing and a library of 10,000+ components. Design feels like sketching.',
      delay: 1,
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>,
      title: 'SPICE Simulation',
      desc: 'Run real-time SPICE simulations in the browser. See voltage, current, and timing diagrams update as you tweak your design.',
      delay: 2,
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>,
      title: 'PCB Layout',
      desc: 'Go from schematic to PCB in seconds. Multi-layer support, DRC checks, and Gerber export — all without leaving your browser.',
      delay: 3,
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/></svg>,
      title: 'Supply Chain',
      desc: 'Automated BOM generation with live pricing and stock from major distributors. Order components with one click from your design.',
      delay: 1,
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: 'Team Collaboration',
      desc: 'Real-time multiplayer editing. Share your canvas, get live feedback from mentors, and build together without version conflicts.',
      delay: 2,
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v6"/><circle cx="12" cy="12" r="3"/><path d="M12 15v6"/><path d="M3 12h6"/><path d="M15 12h6"/></svg>,
      title: 'AI Co-pilot',
      desc: 'Describe what you want in plain English. The AI suggests circuits, catches mistakes, and generates starter code tailored to your project.',
      delay: 3,
    },
  ]

  return (
    <section id="features" className="section">
      <div className="features-header reveal">
        <p className="section-label">What powers the studio</p>
        <h2 className="section-title">Everything you need, nothing you don&apos;t</h2>
        <p className="section-subtitle">Six pillars that turn CADmint from a tool into a creative partner for your next hardware project.</p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className={`feature-card reveal reveal-delay-${f.delay}`}>
            <div className="feature-card-glow"></div>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
