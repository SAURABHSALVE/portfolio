import { useState, useEffect, useRef } from 'react'
import { SKILL_CATEGORIES, PROFICIENCY } from '../data/skillsData'

const TABS = [{ key: 'all', label: 'All' }, ...SKILL_CATEGORIES.map((c) => ({ key: c.key, label: c.label }))]

function SkillCard({ skill, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`skill-card${visible ? ' skill-card--visible' : ''}`}
      style={{ transitionDelay: `${(index % 8) * 60}ms` }}
    >
      <div className="skill-card-inner">
        <div className="skill-logo-wrap">
          <img
            src={skill.icon}
            alt={skill.name}
            className="skill-logo"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.opacity = '0.3' }}
          />
          <div className="skill-logo-glow" />
        </div>
        <div className="skill-name">{skill.name}</div>
      </div>
    </div>
  )
}

function ProficiencyBar({ skill: { skill, level }, index }) {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="prof-bar-row" style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="prof-bar-header">
        <span className="prof-bar-skill">{skill}</span>
        <span className="prof-bar-pct">{level}%</span>
      </div>
      <div className="prof-bar-track">
        <div
          className="prof-bar-fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
        <div
          className="prof-bar-fill-glow"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')
  const [mounted, setMounted]     = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const visibleCategories = activeTab === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.key === activeTab)

  return (
    <section id="skills" className="skills-page section-border">
      {/* Header */}
      <div className="section-header reveal">
        <span className="section-num">00</span>
        <h2>Skills</h2>
        <div className="section-line" />
      </div>

      <p className="skills-page-sub reveal">
        Technologies I work with daily — from model training to production deployment.
      </p>

      {/* Category tabs */}
      <div className="skills-tabs reveal">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`skills-tab${activeTab === tab.key ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills grid per category */}
      <div className="skills-categories">
        {visibleCategories.map((cat) => (
          <div key={cat.key} className="skills-cat-block">
            <div className="skills-cat-label" style={{ color: cat.color }}>
              <span className="skills-cat-line" style={{ background: cat.color }} />
              {cat.label}
            </div>
            <div className="skills-icon-grid">
              {cat.skills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency bars */}
      {activeTab === 'all' && (
        <div className="prof-section">
          <div className="section-header reveal" style={{ marginBottom: '32px' }}>
            <span className="section-num" style={{ fontSize: '0.6rem' }}>PROF</span>
            <h3 className="prof-section-title">Proficiency</h3>
            <div className="section-line" />
          </div>
          <div className="prof-bars-grid">
            {PROFICIENCY.map((item, i) => (
              <ProficiencyBar key={item.skill} skill={item} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
