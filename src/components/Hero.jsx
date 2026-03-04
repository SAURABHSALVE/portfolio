import { Link } from 'react-router-dom'

const stats = [
  { num: '98%', label: 'Model Accuracy' },
  { num: '10x', label: 'Faster Inference' },
  { num: 'Top 5%', label: 'GenAI Hackathon' },
  { num: '1.2K+', label: 'LinkedIn Followers' },
]

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-noise" />
      <div className="hero-content">
        <div className="hero-tag">
          <span className="avail-dot" />&nbsp;Available for opportunities
        </div>
        <h1 className="hero-h1">
          <span>Saurabh</span>
          <span className="name-outline">Salve</span>
        </h1>
        <p className="hero-desc">
          <strong>AI &amp; ML Engineer</strong> specializing in Generative AI, LLMs &amp; Agentic
          Workflows. Building production-ready systems with{' '}
          <strong>RAG pipelines, multi-agent architectures,</strong> and scalable cloud
          infrastructure.<span className="cursor-blink">_</span>
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/contact" className="btn-ghost">Get In Touch</Link>
          <Link to="/blog" className="btn-ghost btn-ghost-green">Read Blog →</Link>
        </div>
      </div>
      <div className="hero-stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
