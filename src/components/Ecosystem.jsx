export default function Ecosystem() {
  const partners = [
    "Altium Designer",
    "GitHub",
    "DigiKey",
    "Mouser Electronics",
    "JLCPCB",
    "Autodesk Fusion 360",
    "KiCad",
    "SolidWorks"
  ]

  // Duplicate the array to create a seamless looping effect
  const marqueeItems = [...partners, ...partners]

  return (
    <section id="ecosystem" className="section" style={{ padding: '20px 0 60px', overflow: 'hidden' }}>
      <div className="ecosystem-header reveal reveal-visible" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <p className="section-label" style={{ fontSize: '10px', color: 'var(--fg-dim)' }}>Native Integrations</p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeItems.map((partner, i) => (
            <div key={i} className="marquee-item">
              <span className="marquee-text">{partner}</span>
              {/* Optional delimiter dot */}
              <div className="marquee-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
