import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certs' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isBlog = location.pathname.startsWith('/blog')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        <Link to="/" className="nav-logo">SS<span>_</span></Link>

        <ul className="nav-links nav-desktop">
          {navItems.map((item) => (
            <li key={item.to} className={item.to === '/achievements' || item.to === '/education' ? 'hide-mob' : ''}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
          {isBlog ? (
            <li><Link to="/" className="nav-back-link">Portfolio</Link></li>
          ) : (
            <li><Link to="/blog" className="nav-blog">Blog</Link></li>
          )}
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
          ))}
          <li><Link to="/blog" className="mobile-blog-link">Blog</Link></li>
        </ul>
        <div className="mobile-menu-footer">
          <span>Saurabh Salve | AI &amp; ML Engineer</span>
        </div>
      </div>

      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
