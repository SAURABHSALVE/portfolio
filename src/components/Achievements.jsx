const achievements = [
  {
    icon: '🏆',
    title: 'National Finalist — GenAI Exchange Hackathon',
    desc: 'Top 5% of participants nationwide. Recognized for innovative generative AI application in the Google-backed hackathon hosted by Hack2Skill.',
  },
  {
    icon: '🎯',
    title: 'OpenAI Buildathon — Project Selected',
    desc: 'Project selected for the OpenAI Buildathon hosted by Next Wave, competing among the best AI builders across India.',
  },
  {
    icon: '⚡',
    title: 'GenAI Artisans — Hackathon Finalist',
    desc: 'Recognized for innovative use of Agentic AI workflows. Built and demoed a full multi-agent system under live hackathon conditions.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section-border">
      <div className="section-header reveal">
        <span className="section-num">05</span>
        <h2>Achievements</h2>
        <div className="section-line" />
      </div>
      <div className="achieve-grid">
        {achievements.map((a) => (
          <div className="achieve-card reveal" key={a.title}>
            <div className="achieve-icon">{a.icon}</div>
            <div className="achieve-title">{a.title}</div>
            <div className="achieve-desc">{a.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
