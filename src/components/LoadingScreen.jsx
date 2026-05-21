'use client'
import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loading-screen" className={hidden ? 'hidden' : ''}>
      <div className="loader-logo">CAD<span>mint</span></div>
      <div className="loader-bar-track"><div className="loader-bar"></div></div>
      <div className="loader-tagline">Initializing studio</div>
    </div>
  )
}
