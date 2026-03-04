import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = `${mx - 6}px`
      cursor.style.top = `${my - 6}px`
    }

    const animate = () => {
      rx += (mx - rx - 18) * 0.15
      ry += (my - ry - 18) * 0.15
      ring.style.left = `${rx}px`
      ring.style.top = `${ry}px`
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      cursor.style.transform = 'scale(2)'
      ring.style.transform = 'scale(1.5)'
    }
    const onLeave = () => {
      cursor.style.transform = 'scale(1)'
      ring.style.transform = 'scale(1)'
    }

    document.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)

    const addListeners = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    // Run after DOM settles
    const timer = setTimeout(addListeners, 500)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      clearTimeout(timer)
    }
  }, [])

  return { cursorRef, ringRef }
}
