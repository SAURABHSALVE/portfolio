import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Small delay so the new route DOM is fully painted
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal:not(.visible)')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      )

      elements.forEach((el) => {
        // Immediate reveal for elements already fully in viewport
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible')
        } else {
          observer.observe(el)
        }
      })

      return () => observer.disconnect()
    }, 60)

    return () => clearTimeout(timer)
  }, [pathname])
}
