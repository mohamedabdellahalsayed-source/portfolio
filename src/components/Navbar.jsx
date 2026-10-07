import { useState, useEffect } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const handleDownload = () => {
    const cvPath = `${import.meta.env.BASE_URL}Mohamed_Abdellah_CV.pdf`
    window.open(cvPath, '_blank')
    const link = document.createElement('a')
    link.href = cvPath
    link.download = 'Mohamed_Abdellah_CV.pdf'
    link.click()
    link.remove()
  }

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Designs', href: '#designs' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f0f14]/90 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <a href="#" className="text-lg sm:text-2xl font-bold text-white cursor-pointer whitespace-nowrap">
          Mohamed <span className="text-[#7F77DD]">Abdellah</span>
        </a>

        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`transition relative pb-1 ${
                    isActive
                      ? 'text-[#AFA9EC] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#7F77DD] after:rounded-full'
                      : 'hover:text-[#AFA9EC]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="hidden sm:inline-block bg-[#7F77DD] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#534AB7] transition whitespace-nowrap"
          >
            Download CV
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0f0f14] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  isActive ? 'text-[#AFA9EC] font-semibold' : 'text-gray-300 hover:text-[#AFA9EC]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
          <button
            onClick={() => {
              handleDownload()
              setMenuOpen(false)
            }}
            className="bg-[#7F77DD] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#534AB7] transition mt-2"
          >
            Download CV
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
