const skillGroups = [
  {
    label: 'GenAI & LLMs',
    tags: ['LangChain', 'LangGraph', 'LangSmith', 'RAG Pipelines', 'OpenAI API', 'Hugging Face', 'Prompt Engineering', 'Multi-Agent Systems'],
  },
  {
    label: 'Deep Learning',
    tags: ['PyTorch', 'TensorFlow', 'CNNs', 'ResNet', 'Computer Vision', 'FAISS'],
  },
  {
    label: 'Backend & Cloud',
    tags: ['FastAPI', 'Flask', 'Django', 'Docker', 'AWS Lambda/EC2', 'GCP Vertex AI', 'CI/CD'],
  },
  {
    label: 'Frontend & Tools',
    tags: ['Python', 'Next.js', 'React.js', 'Streamlit', 'n8n', 'PostgreSQL', 'Git'],
  },
]

export default function About() {
  return (
    <section id="about" className="section-border">
      <div className="section-header reveal">
        <span className="section-num">01</span>
        <h2>About</h2>
        <div className="section-line" />
      </div>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            Aspiring <strong>AI &amp; ML Engineer</strong> with hands-on experience building,
            training, and deploying predictive models and generative AI applications. Currently
            pursuing B.Tech in Computer Science at Deogiri Institute of Engineering (Expected 2026).
          </p>
          <p>
            I specialize in <strong>LangChain, RAG Pipelines, Multi-Agent Systems</strong> and love
            bridging the gap between research prototypes and scalable cloud solutions. From building
            agentic image studios to EdTech SaaS — I ship real things.
          </p>
          <p>
            Based in <strong>Aurangabad, Maharashtra</strong> — open to remote, hybrid, and on-site
            roles.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            <a
              href="https://www.linkedin.com/in/saurabhsalve99/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              style={{ padding: '10px 20px', fontSize: '0.72rem' }}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/SAURABHSALVE"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              style={{ padding: '10px 20px', fontSize: '0.72rem' }}
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="skills-grid reveal">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="skill-group-label">{group.label}</div>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
