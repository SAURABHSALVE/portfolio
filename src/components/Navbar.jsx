import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

/* Home-page sections accessible via hash scroll */
const HOME_SECTIONS = [
  { hash: 'experience',     label: 'Experience' },
  { hash: 'certifications', label: 'Certs' },
  { hash: 'achievements',   label: 'Achievements' },
  { hash: 'education',      label: 'Education' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]           = useState(false)
  const [scrolled, setScrolled]           = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location   = useLocation()
  const navigate   = useNavigate()
  const isHome     = location.pathname === '/'
  const isAbout    = location.pathname === '/about'
  const isProjects = location.pathname === '/projects'
  const isContact  = location.pathname === '/contact'
  const isSkills   = location.pathname === '/skills'
  const isBlog     = location.pathname.startsWith('/blog')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Track which section is in viewport on home page */
  useEffect(() => {
    if (!isHome) { setActiveSection(''); return }
    const observers = HOME_SECTIONS.map(({ hash }) => {
      const el = document.getElementById(hash)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(hash) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    }).filter(Boolean)
    return () => observers.forEach((o) => o.disconnect())
  }, [isHome, location.pathname])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* Scroll to section — works from any page */
  const scrollToSection = useCallback((hash) => {
    setMenuOpen(false)
    if (isHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    }
  }, [isHome, navigate])

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        <Link to="/" className="nav-logo">
          SS<span>_</span>
          <span className="nav-logo-sub">AI_ENG</span>
        </Link>

        <ul className="nav-links nav-desktop">
          <li>
            <Link to="/about" className={isAbout ? 'active' : ''}>About</Link>
          </li>
          {HOME_SECTIONS.map(({ hash, label }) => (
            <li key={hash} className={hash !== 'experience' ? 'hide-mob' : ''}>
              <button
                className={`nav-hash-btn${isHome && activeSection === hash ? ' active' : ''}`}
                onClick={() => scrollToSection(hash)}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <Link to="/projects" className={isProjects ? 'active' : ''}>Projects</Link>
          </li>
          <li>
            <Link to="/skills" className={isSkills ? 'active' : ''}>Skills</Link>
          </li>
          <li>
            <Link to="/contact" className={isContact ? 'active' : ''}>Contact</Link>
          </li>
          <li>
            <Link to="/blog" className={`nav-blog${isBlog ? ' active' : ''}`}>Blog</Link>
          </li>
        </ul>

        <div className="nav-right">
          <ThemeToggle compact />
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link to="/about"    className={isAbout    ? 'active' : ''}>About</Link></li>
          {HOME_SECTIONS.map(({ hash, label }) => (
            <li key={hash}>
              <button
                className={`mobile-hash-btn${isHome && activeSection === hash ? ' active' : ''}`}
                onClick={() => scrollToSection(hash)}
              >
                {label}
              </button>
            </li>
          ))}
          <li><Link to="/projects" className={isProjects ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/skills"   className={isSkills   ? 'active' : ''}>Skills</Link></li>
          <li><Link to="/contact"  className={isContact  ? 'active' : ''}>Contact</Link></li>
          <li><Link to="/blog"     className={isBlog     ? 'active' : ''}>Blog</Link></li>
        </ul>
        <div className="mobile-menu-footer">
          <span>Saurabh Salve · AI &amp; ML Engineer</span>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  )
}
