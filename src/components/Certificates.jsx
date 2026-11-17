import { useLanguage } from '../context/useLanguage'

const certificates = [
  {
    title: 'JavaScript Course',
    issuer: 'Nouvil Platform',
    date: 'July 2026',
    image: `${import.meta.env.BASE_URL}javascript-course.jpg`,
  },
  {
    title: 'HTML and CSS Course',
    issuer: 'Nouvil Platform',
    date: 'July 2026',
    image: `${import.meta.env.BASE_URL}html-css-course.jpg`,
  },
]

function Certificates() {
  const { t } = useLanguage()
  return (
    <section id="certificates" className="reveal py-24 px-6 max-w-4xl mx-auto scroll-mt-20 bg-[#0f0f14]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {t('My Certificates')}
        </h2>
        <p className="text-gray-400">{t("Courses I've completed to strengthen my frontend fundamentals")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="bg-[#1a1b23] border border-white/10 rounded-xl overflow-hidden hover:border-[#7F77DD] hover:-translate-y-1 transition duration-300"
          >
            <img
              src={cert.image}
              alt={t(cert.title)}
              className="w-full h-56 object-cover object-top"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">{t(cert.title)}</h3>
              <p className="text-gray-400 text-sm">{t(cert.issuer)}</p>
              <p className="text-[#AFA9EC] text-xs">{t(cert.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates