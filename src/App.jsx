import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Designs from './components/Designs'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'
import { LanguageProvider } from './context/LanguageContext.jsx'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <LanguageProvider>
      <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Designs />
        <Certificates />
        <Contact />
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </>
    </LanguageProvider>
  )
}

export default App