import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

function PageFrame({ children, showFooter = true }) {
  useScrollReveal()
  return (
    <>
      {children}
      {showFooter && <Footer />}
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <Cursor />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageFrame><Hero /></PageFrame>} />
        <Route path="/about" element={<PageFrame><About /></PageFrame>} />
        <Route path="/experience" element={<PageFrame><Experience /></PageFrame>} />
        <Route path="/projects" element={<PageFrame><Projects /></PageFrame>} />
        <Route path="/certifications" element={<PageFrame><Certifications /></PageFrame>} />
        <Route path="/achievements" element={<PageFrame><Achievements /></PageFrame>} />
        <Route path="/education" element={<PageFrame><Education /></PageFrame>} />
        <Route path="/contact" element={<PageFrame><Contact /></PageFrame>} />
        <Route path="/blog" element={<PageFrame showFooter={false}><BlogList /></PageFrame>} />
        <Route path="/blog/:slug" element={<PageFrame showFooter={false}><BlogPost /></PageFrame>} />
      </Routes>
    </ThemeProvider>
  )
}
