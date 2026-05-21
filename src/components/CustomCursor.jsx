'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    let mouseX = -100, mouseY = -100
    let cursorX = -100, cursorY = -100
    let trailX = -100, trailY = -100
    const cursor = cursorRef.current
    const trail = trailRef.current

    const onMouseMove = (e) => { mouseX = e.clientX; mouseY = e.clientY }
    document.addEventListener('mousemove', onMouseMove)

    const hoverTargets = 'a, button, .btn, .feature-card, .problem-card, .persona-card, .scene-card, .magnetic'
    const onOver = (e) => { if (e.target.closest(hoverTargets)) { cursor.classList.add('hover'); trail.classList.add('hover') } }
    const onOut = (e) => { if (e.target.closest(hoverTargets)) { cursor.classList.remove('hover'); trail.classList.remove('hover') } }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    let raf
    function animate() {
      cursorX += (mouseX - cursorX) * 0.2
      cursorY += (mouseY - cursorY) * 0.2
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
      trailX += (mouseX - trailX) * 0.08
      trailY += (mouseY - trailY) * 0.08
      trail.style.left = trailX + 'px'
      trail.style.top = trailY + 'px'
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-trail" ref={trailRef}></div>
    </>
  )
}
