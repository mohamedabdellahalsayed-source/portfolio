import { useLanguage } from '../context/useLanguage'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'html5', level: 90 },
      { name: 'CSS', icon: 'css', level: 85 },
      { name: 'JavaScript', icon: 'javascript', level: 80 },
      { name: 'React', icon: 'react', level: 75 },
      { name: 'Tailwind CSS', icon: 'tailwindcss', level: 85 },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub', icon: 'git', level: 75 },
      { name: 'Vite', icon: 'vite', level: 70 },
      { name: 'Figma', icon: 'figma', level: 65 },
    ],
  },
]

function Skills() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="reveal py-24 px-6 max-w-5xl mx-auto scroll-mt-20 bg-[#0f0f14]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {t('My Skills')}
        </h2>
        <p className="text-gray-400">{t('Technologies and tools I use to bring ideas to life')}</p>
      </div>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-5">{t(group.title)}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[#1a1b23] border border-white/10 rounded-xl p-5 hover:border-[#7F77DD] transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={`https://cdn.simpleicons.org/${skill.icon}/AFA9EC`}
                      alt={skill.name}
                      className="w-7 h-7"
                      loading="lazy"
                    />
                    <span className="text-gray-200 font-medium">{skill.name}</span>
                    <span className="ml-auto text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#7F77DD] to-[#AFA9EC] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills