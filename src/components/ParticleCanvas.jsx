'use client'
import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    const PARTICLE_COUNT = 60
    const CONNECTION_DISTANCE = 120
    let mouseX = -100, mouseY = -100
    let animId

    const onMouseMove = (e) => { mouseX = e.clientX; mouseY = e.clientY }
    document.addEventListener('mousemove', onMouseMove)

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight }

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.radius = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.3 + 0.1
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
        const dx = mouseX - this.x, dy = mouseY - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) { this.vx += dx * 0.00005; this.vy += dy * 0.00005 }
        this.vx *= 0.999; this.vy *= 0.999
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`
        ctx.fill()
      }
    }

    function init() { particles = []; for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle()) }
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(16, 185, 129, ${(1 - dist / CONNECTION_DISTANCE) * 0.15})`; ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      drawConnections()
      animId = requestAnimationFrame(animate)
    }

    resize(); init(); animate()
    const onResize = () => { resize(); init() }
    window.addEventListener('resize', onResize)

    return () => { cancelAnimationFrame(animId); document.removeEventListener('mousemove', onMouseMove); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas id="particles-canvas" ref={canvasRef} aria-hidden="true"></canvas>
}
