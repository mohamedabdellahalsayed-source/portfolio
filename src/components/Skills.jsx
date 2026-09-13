const skills = [
  { name: 'HTML', icon: 'html5' },
  { name: 'CSS', icon: 'css' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React', icon: 'react' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Git & GitHub', icon: 'git' },
]

function Skills() {
  return (
<section id="skills" className="reveal py-24 px-6 max-w-5xl mx-auto text-center scroll-mt-20 bg-[#0f0f14]">      <h2 className="text-3xl font-bold text-white mb-4">
        My <span className="text-[#7F77DD]">Skills</span>
      </h2>
      <p className="text-gray-400 mb-12">
        Technologies and tools I use to bring ideas to life
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#1a1b23] border border-white/10 rounded-xl py-8 px-4 flex flex-col items-center gap-3 hover:border-[#7F77DD] hover:-translate-y-1 transition duration-300"
          >
            <img
              src={`https://cdn.simpleicons.org/${skill.icon}/AFA9EC`}
              alt={skill.name}
              className="w-10 h-10"
            />
            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills