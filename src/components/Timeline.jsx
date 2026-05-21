'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

const sceneData = [
  {
    text: 'A calm space where your idea, your code, and your experiments live side by side without distractions.',
    beats: ['Sketch concepts', 'Play with behaviour', 'Save versions as chapters'],
  },
  {
    text: 'Describe what you want and let the system suggest paths, catch mistakes, and keep you moving forward.',
    beats: ['Chat with the AI co-pilot', 'Review suggested circuits', 'Iterate until it feels right'],
  },
  {
    text: 'Turn your digital prototype into a physical kit without hunting across ten vendor sites.',
    beats: ['Generate your BOM', 'Compare vendor pricing', 'Order with one click'],
  },
]

export default function Timeline() {
  const [activeScene, setActiveScene] = useState(0)
  const [beatVisible, setBeatVisible] = useState([true, true, true])
  const intervalRef = useRef(null)
  const sectionRef = useRef(null)

  const switchScene = useCallback((index) => {
    setActiveScene(index)
    setBeatVisible([false, false, false])
    setTimeout(() => setBeatVisible([true, false, false]), 80)
    setTimeout(() => setBeatVisible([true, true, false]), 160)
    setTimeout(() => setBeatVisible([true, true, true]), 240)
  }, [])

  // Auto-cycle
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intervalRef.current = setInterval(() => {
              setActiveScene((prev) => {
                const next = (prev + 1) % 3
                switchScene(next)
                return next
              })
            }, 5000)
          } else {
            clearInterval(intervalRef.current)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => { observer.disconnect(); clearInterval(intervalRef.current) }
  }, [switchScene])

  function handleCardClick(index) {
    clearInterval(intervalRef.current)
    switchScene(index)
    // Restart auto-cycle after 10s
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setActiveScene((prev) => {
          const next = (prev + 1) % 3
          switchScene(next)
          return next
        })
      }, 5000)
    }, 10000)
  }

  const sceneIcons = [
    <svg key="0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
    <svg key="1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/></svg>,
    <svg key="2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>,
  ]

  const sceneNames = ['Create', 'Think together', 'The Foundry']

  return (
    <section id="timeline" className="section" ref={sectionRef}>
      <div className="timeline-header reveal">
        <div>
          <p className="section-label">How a CADmint project feels</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>A three-scene timeline instead of ten disconnected tools</h2>
        </div>
        <div className="timeline-header-right">
          <p>Slide through the three scenes. Each one has a different mood, but the same canvas underneath so your project never feels fragmented.</p>
        </div>
      </div>

      <div className="timeline-container reveal reveal-delay-1">
        <div className="timeline-glow"></div>
        <div className="timeline-glow-2"></div>

        <div className="timeline-progress">
          <span className="timeline-progress-label">Slide through</span>
          <div className="timeline-progress-track">
            <div className="timeline-progress-bar" style={{ width: `${((activeScene + 1) / 3) * 100}%` }}></div>
          </div>
        </div>

        <div className="timeline-scenes">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={`scene-card${activeScene === i ? ' active' : ''}`}
              data-scene={i}
              type="button"
              onClick={() => handleCardClick(i)}
            >
              <div className="scene-card-header">
                <div className="scene-card-left">
                  <span className="scene-icon">{sceneIcons[i]}</span>
                  <span className="scene-card-name">{sceneNames[i]}</span>
                </div>
                <span className="scene-card-number">Scene 0{i + 1}</span>
              </div>
              <p className="scene-card-desc">{sceneData[i].text}</p>
              <div className="scene-card-footer">
                <span className="scene-card-status">
                  <span className="scene-card-status-dot"></span>
                  {activeScene === i ? 'Current focus' : 'Tap to jump here'}
                </span>
                <span>3 beats</span>
              </div>
            </button>
          ))}
        </div>

        <div className="scene-detail" id="scene-detail">
          <div>
            <p className="scene-detail-label">Inside this scene</p>
            <p className="scene-detail-text">{sceneData[activeScene].text}</p>
          </div>
          <div className="scene-detail-beats">
            {sceneData[activeScene].beats.map((beat, i) => (
              <div key={`${activeScene}-${i}`} className={`scene-beat${beatVisible[i] ? ' visible' : ''}`}>
                <span className="scene-beat-num">0{i + 1}</span>
                <span className="scene-beat-text">{beat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
