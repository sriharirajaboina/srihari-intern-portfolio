import { useEffect, useState } from 'react'
import './CursorFollower.css'

function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    // Detect hover on interactive elements
    const handleMouseEnter = (e) => {
      if (e.target.closest?.('a, button, .clickable, input, textarea')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      if (e.target.closest?.('a, button, .clickable, input, textarea')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      <div
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      <div
        className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
    </>
  )
}

export default CursorFollower
