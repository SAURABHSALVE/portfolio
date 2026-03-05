const experiences = [
  {
    date: 'Summer 2024',
    company: 'IBM SkillsBuild',
    role: 'Data Science Intern',
    points: [
      <>Optimized customer retention models via EDA on <strong>100K+ records</strong>, improving churn accuracy from 68% to <strong>83%</strong>.</>,
      <>Automated business reporting with interactive Streamlit dashboards, cutting manual analysis time by <strong>40%</strong>.</>,
      'Collaborated cross-functionally to document ML findings clearly for non-technical stakeholders.',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Predictive Modeling'],
    accentColor: 'cyan',
  },
  {
    date: 'Summer 2023',
    company: 'Amazon Web Services',
    role: 'Cloud Computing Intern',
    points: [
      <>Architected containerized deployment using <strong>Docker on EC2</strong> with auto-scaling, reducing latency by <strong>30%</strong>.</>,
      <>Built a serverless ETL pipeline with <strong>AWS Lambda</strong> + CodePipeline processing <strong>10K+ daily events</strong>.</>,
      'Implemented automated data processing pipelines ensuring accuracy and high availability.',
    ],
    tech: ['AWS EC2', 'AWS Lambda', 'Docker', 'CI/CD', 'Python'],
    accentColor: 'orange',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-border">
      <div className="section-header reveal">
        <span className="section-num">02</span>
        <h2>Experience</h2>
        <div className="section-line" />
      </div>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div className={`exp-item exp-item--${exp.accentColor} reveal`} key={exp.role}>
            <div className="exp-left">
              <div className="exp-index">EXP_0{i + 1}</div>
              <div className="exp-date">{exp.date}</div>
              <div className="exp-company">{exp.company}</div>
            </div>
            <div className="exp-right">
              <div className="exp-role">{exp.role}</div>
              <ul className="exp-points">
                {exp.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
              <div className="exp-tech">
                {exp.tech.map((t) => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
