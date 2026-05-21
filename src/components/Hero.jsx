export default function Hero() {
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
            <a href="#cta" className="btn btn-primary magnetic">
              Get started now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="#timeline" className="btn btn-secondary magnetic">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/></svg>
              See how it works
            </a>
          </div>

          <div className="hero-tags reveal reveal-delay-4">
            <span className="hero-tag"><span className="hero-tag-dot green"></span>Built for students, makers, and teams</span>
            <span className="hero-tag"><span className="hero-tag-dot white"></span>Your first project starts with a story</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual reveal reveal-delay-2 float">
          <div className="hero-visual-glow"></div>
          <div className="hero-visual-grid"></div>
          <div className="hero-visual-circuit">
            <svg className="circuit-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 150 H150" stroke="#10b981" strokeWidth="1" opacity="0.4">
                <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="3s" repeatCount="indefinite"/>
              </path>
              <path d="M150 150 V80 H250" stroke="#10b981" strokeWidth="1" opacity="0.4">
                <animate attributeName="stroke-dasharray" values="0,250;250,0" dur="3.5s" repeatCount="indefinite"/>
              </path>
              <path d="M150 150 V220 H300" stroke="#10b981" strokeWidth="1" opacity="0.3">
                <animate attributeName="stroke-dasharray" values="0,280;280,0" dur="4s" repeatCount="indefinite"/>
              </path>
              <path d="M250 80 H350" stroke="#10b981" strokeWidth="1" opacity="0.4">
                <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" repeatCount="indefinite"/>
              </path>
              <path d="M250 80 V150 H320 V220" stroke="#10b981" strokeWidth="1" opacity="0.3">
                <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="4.5s" repeatCount="indefinite"/>
              </path>
              <rect x="120" y="120" width="60" height="60" rx="4" stroke="#10b981" strokeWidth="1.5" fill="rgba(16,185,129,0.05)">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
              </rect>
              <line x1="130" y1="120" x2="130" y2="110" stroke="#10b981" strokeWidth="1" opacity="0.5"/>
              <line x1="150" y1="120" x2="150" y2="110" stroke="#10b981" strokeWidth="1" opacity="0.5"/>
              <line x1="170" y1="120" x2="170" y2="110" stroke="#10b981" strokeWidth="1" opacity="0.5"/>
              <line x1="130" y1="180" x2="130" y2="190" stroke="#10b981" strokeWidth="1" opacity="0.5"/>
              <line x1="150" y1="180" x2="150" y2="190" stroke="#10b981" strokeWidth="1" opacity="0.5"/>
              <line x1="170" y1="180" x2="170" y2="190" stroke="#10b981" strokeWidth="1" opacity="0.5"/>
              <circle cx="50" cy="150" r="4" fill="#10b981" opacity="0.6">
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="250" cy="80" r="4" fill="#10b981" opacity="0.6">
                <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="350" cy="80" r="4" fill="#10b981" opacity="0.6">
                <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite"/>
              </circle>
              <circle cx="300" cy="220" r="4" fill="#10b981" opacity="0.6">
                <animate attributeName="r" values="3;5;3" dur="2.2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="320" cy="220" r="4" fill="#10b981" opacity="0.6">
                <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite"/>
              </circle>
              <path d="M220 80 L225 70 L230 90 L235 70 L240 90 L245 80 L250 80" stroke="#34d399" strokeWidth="1" fill="none" opacity="0.5"/>
              <line x1="290" y1="210" x2="290" y2="230" stroke="#34d399" strokeWidth="2" opacity="0.4"/>
              <line x1="300" y1="210" x2="300" y2="230" stroke="#34d399" strokeWidth="2" opacity="0.4"/>
              <circle cx="350" cy="80" r="12" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.2">
                <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>

          <div className="hero-visual-overlay">
            <p className="overlay-step">Step one</p>
            <p className="overlay-title">Tell CADmint what you want to build.</p>
            <p className="overlay-desc">Write a single line about the gadget in your head. The studio turns that sentence into a starting point.</p>
            <div className="overlay-footer">
              <a href="#cta" className="btn btn-primary btn-sm magnetic">Get started</a>
              <span className="overlay-hint">Just your idea and a browser.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
