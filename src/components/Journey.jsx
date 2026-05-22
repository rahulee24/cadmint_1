'use client'
import { useState } from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Sketch your idea',
    subtitle: 'From concept to canvas',
    desc: 'A calm space where your idea, your code, and your experiments live side by side. CADmint makes the first screen you see feel like a place to tell a story, not an empty grid.',
    details: ['Drag-and-drop component library', 'Infinite canvas with smart zoom', 'Auto-save version history'],
    accentColor: '#6366f1'
  },
  {
    number: '02',
    title: 'Simulate & iterate',
    subtitle: 'Think together with AI',
    desc: 'Describe what you want and let the co-pilot suggest paths, catch mistakes, and keep you moving forward. The platform remembers your experiments like chapters.',
    details: ['Cloud SPICE simulation engine', 'AI design rule checking (DRC)', 'Real-time waveform analysis'],
    accentColor: '#a855f7'
  },
  {
    number: '03',
    title: 'Manufacture & ship',
    subtitle: 'The last mile, handled',
    desc: 'Turn your digital prototype into a physical kit without hunting across ten vendor sites. One click from schematic to shipped PCB.',
    details: ['Automated BOM generation', 'Multi-vendor price comparison', 'One-click PCB ordering'],
    accentColor: '#10b981'
  }
]

export default function Journey() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="journey" className="section">
      <div className="journey-header reveal">
        <p className="section-label">The journey inside CADmint</p>
        <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>From &ldquo;what if&rdquo; to &ldquo;look what I made&rdquo;</h2>
      </div>

      <div className="journey-steps-container reveal">
        {/* Progress trace line */}
        <div className="journey-trace-line">
          <div className="journey-trace-progress" style={{ height: `${((activeStep + 1) / STEPS.length) * 100}%` }}></div>
        </div>

        <div className="journey-steps">
          {STEPS.map((step, i) => (
            <button
              key={i}
              className={`journey-step ${i === activeStep ? 'active' : ''} ${i < activeStep ? 'completed' : ''}`}
              onClick={() => setActiveStep(i)}
            >
              <div className="journey-step-indicator">
                <div className="journey-step-dot" style={{ borderColor: step.accentColor, boxShadow: i === activeStep ? `0 0 12px ${step.accentColor}40` : 'none' }}>
                  {i < activeStep ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={step.accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  ) : (
                    <span className="journey-step-number" style={{ color: i === activeStep ? step.accentColor : undefined }}>{step.number}</span>
                  )}
                </div>
              </div>
              <div className="journey-step-content">
                <div className="journey-step-subtitle">{step.subtitle}</div>
                <h3 className="journey-step-title">{step.title}</h3>
                <div className={`journey-step-expandable ${i === activeStep ? 'expanded' : ''}`}>
                  <p className="journey-step-desc">{step.desc}</p>
                  <ul className="journey-step-details">
                    {step.details.map((d, idx) => (
                      <li key={idx}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={step.accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="persona-cards reveal">
        <div className="persona-card reveal reveal-delay-1">
          <span className="persona-badge learner">For the learner</span>
          <h4>You finally see progress instead of just theory</h4>
          <p>CADmint gives you a space where each experiment stays visible. You see the story of how you reached an answer, not just a final slide.</p>
        </div>
        <div className="persona-card reveal reveal-delay-2">
          <span className="persona-badge maker">For the maker</span>
          <h4>Your ideas do not die in spreadsheets</h4>
          <p>Every project carries its own kit list, notes, and links. Whether you are making one piece or a batch for your community, CADmint keeps it playful.</p>
        </div>
      </div>
    </section>
  )
}
