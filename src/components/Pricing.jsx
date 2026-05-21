'use client'
import { useState } from 'react'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true)

  const plans = [
    {
      name: 'Student',
      priceMonthly: 0,
      priceYearly: 0,
      desc: 'Everything you need to learn electronics and build your first prototypes.',
      features: ['Unlimited public projects', 'Cloud SPICE simulation (Standard)', 'Basic auto-routing', 'Community support'],
      btnText: 'Start for free',
      highlight: false
    },
    {
      name: 'Professional',
      priceMonthly: 29,
      priceYearly: 24, // $288/yr
      desc: 'For independent hardware engineers and startup founding teams.',
      features: ['Unlimited private projects', 'Advanced SPICE (Transient/AC sweeps)', 'Live Multiplayer editing', 'BOM stock alerts', 'Priority email support'],
      btnText: 'Start free trial',
      highlight: true
    },
    {
      name: 'Enterprise',
      priceMonthly: 'Custom',
      priceYearly: 'Custom',
      desc: 'For large teams needing on-premise sync, SSO, and dedicated success managers.',
      features: ['On-premise deployment option', 'SSO & Advanced Security', 'Custom ERP/PLM integrations', 'Dedicated hardware mentor', 'SLA guarantees'],
      btnText: 'Contact sales',
      highlight: false
    }
  ]

  return (
    <section id="pricing" className="section" style={{ padding: '80px 0' }}>
      <div className="pricing-header reveal reveal-visible" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p className="section-label">Transparent pricing</p>
        <h2 className="section-title">Scale from dorm room to mass production</h2>
        
        {/* Toggle Switch */}
        <div className="pricing-toggle-wrapper">
          <span className={!isYearly ? 'active' : ''}>Monthly</span>
          <button 
            className={`pricing-toggle ${isYearly ? 'yearly' : 'monthly'}`} 
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Toggle yearly billing"
          >
            <div className="toggle-knob"></div>
          </button>
          <span className={isYearly ? 'active' : ''}>Yearly <span className="discount-badge">Save 17%</span></span>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div key={i} className={`pricing-card bento-card reveal reveal-visible ${plan.highlight ? 'highlight' : ''}`}>
            {plan.highlight && <div className="bento-glow"></div>}
            
            <div className="pricing-card-header">
              <h3>{plan.name}</h3>
              <p className="pricing-desc">{plan.desc}</p>
              <div className="pricing-price">
                {plan.priceMonthly === 'Custom' ? (
                  <span className="amount">Custom</span>
                ) : (
                  <>
                    <span className="currency">$</span>
                    <span className="amount">{isYearly ? plan.priceYearly : plan.priceMonthly}</span>
                    <span className="period">/mo</span>
                  </>
                )}
              </div>
              {isYearly && plan.priceMonthly !== 'Custom' && plan.priceYearly > 0 && (
                <div className="pricing-billed-yearly">Billed ${plan.priceYearly * 12} annually</div>
              )}
            </div>

            <button className={`pricing-btn ${plan.highlight ? 'primary' : 'secondary'} magnetic`}>
              {plan.btnText}
            </button>

            <ul className="pricing-features">
              {plan.features.map((feat, idx) => (
                <li key={idx}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
