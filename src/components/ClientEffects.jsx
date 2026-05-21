'use client'
import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // ── Scroll Reveal (IntersectionObserver) ─────────────────
    const reveals = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    reveals.forEach((el) => revealObserver.observe(el))

    // ── Hero initial reveal (staggered after loading screen) ──
    setTimeout(() => {
      const heroReveals = document.querySelectorAll('#hero .reveal')
      heroReveals.forEach((el, i) => {
        setTimeout(() => el.classList.add('revealed'), i * 120)
      })
    }, 2600)

    // ── Magnetic Button Effect ───────────────────────────────
    const magneticBtns = document.querySelectorAll('.magnetic')
    const magneticHandlers = []

    magneticBtns.forEach((btn) => {
      const onMove = (e) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
      }
      const onLeave = () => {
        btn.style.transform = 'translate(0, 0)'
        btn.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
        setTimeout(() => { btn.style.transition = '' }, 400)
      }
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
      magneticHandlers.push({ btn, onMove, onLeave })
    })

    // ── 3D Card Tilt Effect ──────────────────────────────────
    const tiltCards = document.querySelectorAll('.feature-card, .problem-card')
    const tiltHandlers = []

    tiltCards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        card.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 6}deg) rotateY(${(x - 0.5) * -6}deg) translateY(-6px)`
      }
      const onLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'
        card.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
        setTimeout(() => { card.style.transition = 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)' }, 500)
      }
      const onEnter = () => { card.style.transition = 'none' }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      card.addEventListener('mouseenter', onEnter)
      tiltHandlers.push({ card, onMove, onLeave, onEnter })
    })

    // ── Parallax Glow (Problem Cards) ────────────────────────
    const onGlowMove = (e) => {
      document.querySelectorAll('.problem-card-glow').forEach((glow) => {
        const card = glow.parentElement
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(16,185,129,0.08), transparent 70%)`
      })
    }
    document.addEventListener('mousemove', onGlowMove)

    // ── Smooth Scroll ────────────────────────────────────────
    const onAnchorClick = (e) => {
      const href = e.target.closest('a[href^="#"]')?.getAttribute('href')
      if (href) {
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.addEventListener('click', onAnchorClick)

    // ── Cleanup ──────────────────────────────────────────────
    return () => {
      revealObserver.disconnect()
      magneticHandlers.forEach(({ btn, onMove, onLeave }) => {
        btn.removeEventListener('mousemove', onMove)
        btn.removeEventListener('mouseleave', onLeave)
      })
      tiltHandlers.forEach(({ card, onMove, onLeave, onEnter }) => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
        card.removeEventListener('mouseenter', onEnter)
      })
      document.removeEventListener('mousemove', onGlowMove)
      document.removeEventListener('click', onAnchorClick)
    }
  }, [])

  return null
}
