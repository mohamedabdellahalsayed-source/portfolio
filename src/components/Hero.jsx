import { useLanguage } from '../context/useLanguage'

const portrait = `${import.meta.env.BASE_URL}WhatsApp%20Image%202026-11-17%20at%202.21.06%20PM.png`

const marqueeWords = [
  'Frontend Developer',
  'Creative Designer',
  'Social Media Design',
  'Media Buying',
  'Media Buyer',
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/mohamedabdellahalsayed-source',
    icon: 'github-icon.svg',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed-abdellah-416925432',
    icon: 'linkedin-icon.svg',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/19Mw9of6oh/',
    icon: 'facebook-icon.svg',
  },
]

function MarqueeTrack({ t }) {
  return (
    <div className="hero-marquee-track" aria-hidden="true">
      {[0, 1].map((copy) => (
        <span key={copy} className="hero-marquee-copy">
          {marqueeWords.map((word) => (
            <span key={word} className="hero-marquee-word">
              <span>{t(word)}</span>
              <span className="text-white/60">✦</span>
            </span>
          ))}
        </span>
      ))}
    </div>
  )
}

function SocialLinks() {
  return (
    <div className="hero-social-links">
      {socialLinks.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="hero-social-link"
        >
          <img src={`${import.meta.env.BASE_URL}${icon}`} alt={label} />
        </a>
      ))}
    </div>
  )
}

function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero-section">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="hero-glow" />

      <h1 className="hero-name" aria-label="Mohamed Abdellah">
        Mohamed Abdellah
      </h1>

      <div className="hero-stage">
        <div className="hero-portrait">
          <div className="hero-portrait-glow" />
          <img src={portrait} alt="Mohamed Abdellah" />
        </div>

        <div className="hero-intro hero-intro-left">
          <h2 className="hero-heading">{t('I BUILD, DESIGN & ADVERTISE')}</h2>
          <span className="hero-availability">
            <span className="hero-availability-dot" />
            {t('Available for opportunities')}
          </span>
        </div>

        <div className="hero-intro hero-intro-right">
          <h2 className="hero-heading">
            {t('SO YOUR')} <span className="text-[#AFA9EC]">{t('BRAND')}</span>
            <br />
            {t('GETS SEEN.')}
          </h2>
          <div className="hero-about">
            <h3>{t('About me')}</h3>
            <p>
              {t(
                "I'm Mohamed Abdellah, a frontend developer, social media designer and media buyer. I build fast, clean websites, design eye-catching content, and run Meta ads that reach the right audience."
              )}
            </p>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="hero-button hero-button-primary">
            {t('View My Work')}
          </a>
          <a href="#contact" className="hero-button hero-button-secondary">
            {t('Contact Me')}
          </a>
        </div>
      </div>

      <div className="hero-social-rail">
        <SocialLinks />
      </div>

      <div className="hero-marquee hero-marquee-upper">
        <MarqueeTrack t={t} />
      </div>
      <div className="hero-marquee hero-marquee-lower">
        <MarqueeTrack t={t} />
      </div>
    </section>
  )
}

export default Hero
