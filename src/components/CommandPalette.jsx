'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

const COMMANDS = [
  { id: 'hero', label: 'Go to Hero', section: '#hero', icon: '⚡', category: 'Navigate' },
  { id: 'features', label: 'Go to Features', section: '#features', icon: '✦', category: 'Navigate' },
  { id: 'pricing', label: 'Go to Pricing', section: '#pricing', icon: '💎', category: 'Navigate' },
  { id: 'timeline', label: 'Go to Timeline', section: '#timeline', icon: '🔄', category: 'Navigate' },
  { id: 'faq', label: 'Go to FAQ', section: '#faq', icon: '❓', category: 'Navigate' },
  { id: 'testimonials', label: 'Go to Testimonials', section: '#testimonials', icon: '💬', category: 'Navigate' },
  { id: 'cta', label: 'Get Early Access', section: '#cta', icon: '🚀', category: 'Action' },
  { id: 'github', label: 'Open GitHub', url: 'https://github.com', icon: '🔗', category: 'External' },
  { id: 'hardjunc', label: 'Visit HardJunc', url: 'https://hardjunc.dev', icon: '🌐', category: 'External' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)

  const filtered = COMMANDS.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  )

  // Keyboard shortcut to open
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setSelectedIndex(0)
    }
  }, [open])

  const executeCommand = useCallback((cmd) => {
    setOpen(false)
    if (cmd.url) {
      window.open(cmd.url, '_blank')
    } else if (cmd.section) {
      const el = document.querySelector(cmd.section)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      executeCommand(filtered[selectedIndex])
    }
  }

  if (!open) return null

  return (
    <div className="cmd-overlay" onClick={() => setOpen(false)}>
      <div className="cmd-palette" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-search-wrapper">
          <svg className="cmd-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="cmd-search-input"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0) }}
            onKeyDown={handleKeyDown}
          />
          <kbd className="cmd-kbd">ESC</kbd>
        </div>
        <div className="cmd-results">
          {filtered.length === 0 && (
            <div className="cmd-empty">No results found</div>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.id}
              className={`cmd-item ${i === selectedIndex ? 'selected' : ''}`}
              onClick={() => executeCommand(cmd)}
              onMouseEnter={() => setSelectedIndex(i)}
            >
              <span className="cmd-item-icon">{cmd.icon}</span>
              <span className="cmd-item-label">{cmd.label}</span>
              <span className="cmd-item-category">{cmd.category}</span>
            </button>
          ))}
        </div>
        <div className="cmd-footer">
          <span><kbd>↑↓</kbd> Navigate</span>
          <span><kbd>↵</kbd> Select</span>
          <span><kbd>esc</kbd> Close</span>
        </div>
      </div>
    </div>
  )
}
