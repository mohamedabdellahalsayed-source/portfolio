const certificates = [
  {
    title: 'JavaScript Course',
    issuer: 'Nouvil Platform',
    date: 'August 2026',
    image: `${import.meta.env.BASE_URL}javascript-course.jpg`,
  },
  {
    title: 'HTML and CSS Course',
    issuer: 'Nouvil Platform',
    date: 'August 2026',
    image: `${import.meta.env.BASE_URL}html-css-course.jpg`,
  },
]

function Certificates() {
  return (
    <section id="certificates" className="reveal py-24 px-6 max-w-4xl mx-auto scroll-mt-20 bg-[#0f0f14]">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        My <span className="text-[#7F77DD]">Certificates</span>
      </h2>
      <p className="text-gray-400 mb-12 text-center">
        Courses I've completed to strengthen my frontend fundamentals
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="bg-[#1a1b23] border border-white/10 rounded-xl overflow-hidden hover:border-[#7F77DD] hover:-translate-y-1 transition duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-56 object-cover object-top"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
              <p className="text-[#AFA9EC] text-xs">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates