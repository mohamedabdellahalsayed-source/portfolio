import { useLanguage } from '../context/useLanguage'

function Footer() {
  const { t } = useLanguage()
  const socials = [
    { label: 'GitHub', href: 'https://github.com/mohamedabdellahalsayed-source' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-abdellah-416925432' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/19Mw9of6oh/' },
  ]

  return (
    <footer className="bg-[#0a0a0e] border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-white">
            Mohamed <span className="text-[#7F77DD]">Abdellah</span>
          </h2>
          <p className="text-gray-500 text-xs mt-1">{t('Frontend Developer & Designer')}</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <li><a href="#about" className="hover:text-[#AFA9EC] transition">{t('About')}</a></li>
          <li><a href="#skills" className="hover:text-[#AFA9EC] transition">{t('Skills')}</a></li>
          <li><a href="#projects" className="hover:text-[#AFA9EC] transition">{t('Projects')}</a></li>
          <li><a href="#designs" className="hover:text-[#AFA9EC] transition">{t('Designs')}</a></li>
          <li><a href="#certificates" className="hover:text-[#AFA9EC] transition">{t('Certificates')}</a></li>
          <li><a href="#contact" className="hover:text-[#AFA9EC] transition">{t('Contact')}</a></li>
        </ul>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#AFA9EC] text-xs transition"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Mohamed Abdellah. {t('All rights reserved.')}
        </p>
      </div>
    </footer>
  )
}

export default Footer