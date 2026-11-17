import { useLanguage } from '../context/useLanguage'

const projects = [
  {
    title: 'Movie & TV Explorer',
    description:
      'A movie and TV discovery app built with React and the TMDB API, featuring live search, trending titles, and a favorites system with localStorage persistence.',
    tech: ['React', 'Tailwind CSS', 'TMDB API', 'React Router'],
    image: `${import.meta.env.BASE_URL}projects/movie-explorer.png`,
    github: 'https://github.com/mohamedabdellahalsayed-source/movie-explorer',
    live: 'https://mohamedabdellahalsayed-source.github.io/movie-explorer/',
  },
  {
    title: 'Ecommerce Store',
    description:
      'An Arabic (RTL) e-commerce storefront with product search, category filtering, and a shopping cart with live item count.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: `${import.meta.env.BASE_URL}projects/ecommerce-store.png`,
    github: 'https://github.com/mohamedabdellahalsayed-source/ecommerce-store',
    live: 'https://mohamedabdellahalsayed-source.github.io/ecommerce-store/',
  },
  {
    title: 'Admin Dashboard',
    description:
      'A clean admin dashboard UI displaying user, post, and product stats alongside a detailed product table.',
    tech: ['HTML', 'CSS', 'Font Awesome'],
    image: `${import.meta.env.BASE_URL}projects/admin-dashboard.png`,
    github: 'https://github.com/mohamedabdellahalsayed-source/admin-dashboard',
    live: 'https://mohamedabdellahalsayed-source.github.io/admin-dashboard/',
  },
  {
    title: 'CRUD Product Management',
    description:
      'A product management system supporting full create, read, update, and delete operations with search by title or category.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: `${import.meta.env.BASE_URL}projects/crud-dashboard.png`,
    github: 'https://github.com/mohamedabdellahalsayed-source/crud-product-management',
    live: 'https://mohamedabdellahalsayed-source.github.io/crud-product-management/',
  },
  {
    title: 'Caffeine Cove',
    description:
      'A stylish landing page for a coffee shop, focused on clean layout and an inviting hero section.',
    tech: ['HTML', 'CSS'],
    image: `${import.meta.env.BASE_URL}projects/caffeine-cove.png`,
    github: 'https://github.com/mohamedabdellahalsayed-source/-caffeine-cove',
    live: 'https://mohamedabdellahalsayed-source.github.io/-caffeine-cove/',
  },
  {
    title: 'CodeCraft',
    description:
      'An Arabic (RTL) landing page for a professional software company, featuring a modern dark design with sections for services, portfolio, team, and contact.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: `${import.meta.env.BASE_URL}projects/codecraft-website.png`,
    github: 'https://github.com/mohamedabdellahalsayed-source/codecraft-website',
    live: 'https://mohamedabdellahalsayed-source.github.io/codecraft-website/',
  },
]

function Projects() {
  const { t } = useLanguage()
  return (
    <section id="projects" className="reveal py-24 px-6 max-w-6xl mx-auto scroll-mt-20 bg-[#0f0f14]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {t('My Projects')}
        </h2>
        <p className="text-gray-400">{t("A selection of things I've built while learning frontend development")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group bg-[#1a1b23] border border-white/10 rounded-2xl overflow-hidden hover:border-[#7F77DD] transition duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-52 object-cover object-top group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{t(project.description)}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-[#7F77DD]/15 text-[#AFA9EC] border border-[#7F77DD]/30 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white border border-white/20 px-4 py-2 rounded-lg hover:border-[#7F77DD] hover:text-[#AFA9EC] transition"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white bg-[#7F77DD] px-4 py-2 rounded-lg hover:bg-[#534AB7] transition"
                  >
                    {t('Live Demo')}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects