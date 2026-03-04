// simpleicons CDN: https://cdn.simpleicons.org/{slug}/{hex}
const si = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex}`

export const SKILL_CATEGORIES = [
  {
    key: 'ai',
    label: 'AI & GenAI',
    color: 'var(--accent)',
    skills: [
      { name: 'Python',         icon: si('python',       '3776AB') },
      { name: 'PyTorch',        icon: si('pytorch',      'EE4C2C') },
      { name: 'TensorFlow',     icon: si('tensorflow',   'FF6F00') },
      { name: 'OpenAI',         icon: si('openai',       '412991') },
      { name: 'LangChain',      icon: si('langchain',    '1C3C3C'), darkIcon: si('langchain', 'ffffff') },
      { name: 'Hugging Face',   icon: si('huggingface',  'FFD21E') },
      { name: 'Scikit-learn',   icon: si('scikitlearn',  'F7931E') },
      { name: 'Pandas',         icon: si('pandas',       '150458'), darkIcon: si('pandas', 'ffffff') },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    color: 'var(--accent2)',
    skills: [
      { name: 'FastAPI',        icon: si('fastapi',      '009688') },
      { name: 'Flask',          icon: si('flask',        '000000'), darkIcon: si('flask', 'ffffff') },
      { name: 'Django',         icon: si('django',       '092E20'), darkIcon: si('django', 'ffffff') },
      { name: 'Docker',         icon: si('docker',       '2496ED') },
      { name: 'PostgreSQL',     icon: si('postgresql',   '4169E1') },
      { name: 'n8n',            icon: si('n8n',          'EA4B71') },
    ],
  },
  {
    key: 'cloud',
    label: 'Cloud',
    color: 'var(--accent3)',
    skills: [
      { name: 'AWS',            icon: si('amazonaws',    'FF9900') },
      { name: 'Google Cloud',   icon: si('googlecloud',  '4285F4') },
      { name: 'AWS Lambda',     icon: si('awslambda',    'FF9900') },
      { name: 'Streamlit',      icon: si('streamlit',    'FF4B4B') },
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend & Tools',
    color: 'var(--accent4)',
    skills: [
      { name: 'React',          icon: si('react',        '61DAFB') },
      { name: 'Next.js',        icon: si('nextdotjs',    '000000'), darkIcon: si('nextdotjs', 'ffffff') },
      { name: 'Git',            icon: si('git',          'F05032') },
      { name: 'GitHub',         icon: si('github',       '181717'), darkIcon: si('github', 'ffffff') },
      { name: 'VS Code',        icon: si('visualstudiocode', '007ACC') },
      { name: 'Jupyter',        icon: si('jupyter',      'F37626') },
    ],
  },
]

export const PROFICIENCY = [
  { skill: 'LangChain / RAG Pipelines',   level: 95 },
  { skill: 'PyTorch / Deep Learning',      level: 88 },
  { skill: 'Python',                       level: 92 },
  { skill: 'FastAPI / Flask',             level: 85 },
  { skill: 'AWS / GCP',                    level: 78 },
  { skill: 'React / Next.js',             level: 75 },
  { skill: 'Docker / CI-CD',              level: 80 },
  { skill: 'TensorFlow / Keras',          level: 82 },
]
