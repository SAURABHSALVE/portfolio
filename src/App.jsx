import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { ThemeProvider } from './context/ThemeContext'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './pages/Skills'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

/* Home page — Hero + Experience + Certifications + Achievements + Education */
function HomePage() {
  useScrollReveal()
  return (
    <>
      <Hero />
      <Experience />
      <Certifications />
      <Achievements />
      <Education />
      <Footer />
    </>
  )
}

function PageFrame({ children, showFooter = true }) {
  useScrollReveal()
  return (
    <>
      {children}
      {showFooter && <Footer />}
    </>
  )
}

/* Only scroll to top on path changes, not hash-only changes */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(pathname)

  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname
      if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <Cursor />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/"           element={<HomePage />} />
        <Route path="/about"      element={<PageFrame><div className="page-top-pad"><About /></div></PageFrame>} />
        <Route path="/projects"   element={<PageFrame><div className="page-top-pad"><Projects /></div></PageFrame>} />
        <Route path="/contact"    element={<PageFrame><div className="page-top-pad"><Contact /></div></PageFrame>} />
        <Route path="/skills"     element={<PageFrame><Skills /></PageFrame>} />
        <Route path="/blog"       element={<PageFrame showFooter={false}><BlogList /></PageFrame>} />
        <Route path="/blog/:slug" element={<PageFrame showFooter={false}><BlogPost /></PageFrame>} />
      </Routes>
    </ThemeProvider>
  )
}
