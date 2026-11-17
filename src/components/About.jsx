import { useLanguage } from '../context/useLanguage'

function About() {
  const { t } = useLanguage()
  const stats = [
    { label: t('Years Learning'), value: '2+' },
    { label: t('Projects Shipped'), value: '6' },
    { label: t('Designs Created'), value: '9' },
    { label: t('Certificates'), value: '2' },
  ]

  return (
    <section
      id="about"
      className="reveal py-24 px-6 max-w-5xl mx-auto scroll-mt-20 bg-[#0f0f14]"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {t('About Me')}
        </h2>
        <p className="text-gray-500 text-sm uppercase tracking-widest">{t('Who I am')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-[#1a1b23] border border-white/10 rounded-2xl p-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7F77DD] to-[#534AB7] flex items-center justify-center text-white text-2xl font-bold mb-6">
            MA
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Mohamed Abdellah</h3>
          <p className="text-[#AFA9EC] text-sm mb-4">{t('Frontend Developer & Designer')}</p>
          <p className="text-gray-400 leading-relaxed">
            {t("Student at the Faculty of Science, Al-Azhar University, with a strong passion for frontend development and visual design. I enjoy turning ideas into real, working projects and I'm always looking for opportunities to learn and grow.")}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            {t("I've built a solid foundation in HTML, CSS, and JavaScript, and I'm now focused on React and Tailwind CSS to create clean, modern, and interactive web experiences — from small UI components to complete applications. Alongside coding, I design social media content and brand visuals.")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#1a1b23] border border-white/10 rounded-xl p-4 text-center hover:border-[#7F77DD] transition"
              >
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About