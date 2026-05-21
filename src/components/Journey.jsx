export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="journey-card reveal">
        <div className="journey-grid">
          <div>
            <p className="section-label">The journey inside CADmint</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>From &ldquo;what if&rdquo; to &ldquo;look what I made&rdquo;</h2>
          </div>
          <div className="journey-right">
            <p>Many builders lose energy in the gap between dreaming and doing. CADmint makes the first screen you see feel like a place to tell a story, not an empty grid.</p>
            <p>The platform remembers your experiments like chapters. You can rewind to a moment that felt right, share that moment with a mentor, and continue from there together.</p>
          </div>
        </div>
      </div>

      <div className="persona-cards">
        <div className="persona-card reveal reveal-delay-1">
          <span className="persona-badge learner">For the learner</span>
          <h4>You finally see progress instead of just theory</h4>
          <p>CADmint gives you a space where each experiment stays visible. You see the story of how you reached an answer, not just a final slide.</p>
          <p>When you get stuck, you do not have to start over. You invite help into the moment where things broke and move forward from there.</p>
        </div>

        <div className="persona-card reveal reveal-delay-2">
          <span className="persona-badge maker">For the maker</span>
          <h4>Your ideas do not die in spreadsheets</h4>
          <p>Every project carries its own kit list, notes, and links. Logistics stay attached to the story instead of getting lost in separate files.</p>
          <p>Whether you are making one piece for yourself or a batch for your community, CADmint keeps the creative part of the work feeling playful.</p>
        </div>
      </div>
    </section>
  )
}
