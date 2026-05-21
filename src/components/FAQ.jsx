'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: 'Can I import existing KiCad or Altium designs?',
    answer: 'Yes, absolutely. CADmint includes robust, enterprise-grade translators for KiCad (.kicad_pcb / .kicad_sch), Altium Designer, and Eagle XML files. The engine automatically maps nets, copper polygons, padstacks, and component footprints 1:1, allowing you to resume design routing instantly.'
  },
  {
    question: 'Is the SPICE simulation engine run locally or in the cloud?',
    answer: 'We deploy a high-performance hybrid architecture. Real-time transient, AC, and DC sweeps run directly in your browser utilizing optimized WebAssembly, giving you immediate feedback. Massive Monte Carlo sweeps, deep electromagnetic crosstalk modeling, and complex thermal distribution maps scale automatically to our secure cloud clusters.'
  },
  {
    question: 'How does supply chain procurement and BOM ordering work?',
    answer: 'CADmint is integrated natively with global parts networks (Mouser, DigiKey, Arrow, and LCSC) and rapid PCB fabrication partners. As you select components, the co-pilot audits stock levels, pricing, and lifecycle risk in real-time. When your layout passes all design rule checks (DRC), click a button to build, assemble, and drop-ship assembled test kits directly to your desk.'
  },
  {
    question: 'Is the AI design co-pilot secure and confidential?',
    answer: 'Your intellectual property is 100% secure. All schematic sheets, netlists, and copper layers are encrypted at rest and in transit. The CADmint AI co-pilot operates on isolated enterprise instances. None of your proprietary data, custom footprints, or routing strategies are ever saved, shared, or used to train public foundation models.'
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section reveal">
      <div className="faq-header">
        <div className="green-badge" style={{ margin: '0 auto 16px' }}>Common Questions</div>
        <h2 style={{ fontSize: '38px', color: '#fff', marginBottom: '16px' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ color: 'var(--fg-muted)', fontSize: '14px', lineHeight: '1.6' }}>
          Everything you need to know about CADmint\'s professional circuit editor, simulation engines, and enterprise security.
        </p>
      </div>

      <div className="faq-list">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = activeIndex === idx
          return (
            <div 
              key={idx} 
              className={`faq-item ${isOpen ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <svg 
                  className="faq-chevron" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="faq-answer">
                <p style={{ margin: 0, paddingBottom: '24px' }}>
                  {item.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
