const projects = [
  {
    title: 'Movie & TV Explorer',
    description:
      'A movie and TV discovery app built with React and the TMDB API, featuring live search, trending titles, and a favorites system with localStorage persistence.',
    tech: 'React, Tailwind CSS, TMDB API, React Router',
    image: `${import.meta.env.BASE_URL}projects/movie-explorer.png`,
    github: 'https://github.com/mohamedabdellahalsayed-source/movie-explorer',
    live: 'https://mohamedabdellahalsayed-source.github.io/movie-explorer/',
  },
  {
    title: 'Ecommerce Store',
    description:
      'An Arabic (RTL) e-commerce storefront with product search, category filtering, and a shopping cart with live item count.',
    tech: 'HTML, CSS, JavaScript',
    image: `${import.meta.env.BASE_URL}projects/ecommerce-store.png`,
    github: 'https://github.com/mohamedabdellahalsayed-source/ecommerce-store',
    live: 'https://mohamedabdellahalsayed-source.github.io/ecommerce-store/',
  },
  {
    title: 'Admin Dashboard',
    description:
      'A clean admin dashboard UI displaying user, post, and product stats alongside a detailed product table.',
    tech: 'HTML, CSS, JavaScript, Font Awesome',
    image: `${import.meta.env.BASE_URL}projects/admin-dashboard.png`,
    github: 'https://github.com/mohamedabdellahalsayed-source/admin-dashboard',
    live: 'https://mohamedabdellahalsayed-source.github.io/admin-dashboard/',
  },
  {
    title: 'CRUD Product Management',
    description:
      'A product management system supporting full create, read, update, and delete operations with search by title or category.',
    tech: 'HTML, CSS, JavaScript',
    image: `${import.meta.env.BASE_URL}projects/crud-dashboard.png`,
    github: 'https://github.com/mohamedabdellahalsayed-source/crud-product-management',
    live: 'https://mohamedabdellahalsayed-source.github.io/crud-product-management/',
  },
  {
    title: 'Caffeine Cove',
    description:
      'A stylish landing page for a coffee shop, focused on clean layout and an inviting hero section.',
    tech: 'HTML, CSS, JavaScript',
    image: `${import.meta.env.BASE_URL}projects/caffeine-cove.png`,
    github: 'https://github.com/mohamedabdellahalsayed-source/-caffeine-cove',
    live: 'https://mohamedabdellahalsayed-source.github.io/-caffeine-cove/',
  },
]

function Projects() {
  return (
    <section id="projects" className="reveal py-24 px-6 max-w-6xl mx-auto scroll-mt-20 bg-[#0f0f14]">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        My <span className="text-[#7F77DD]">Projects</span>
      </h2>
      <p className="text-gray-400 mb-12 text-center">
        A selection of things I've built while learning frontend development
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#1a1b23] border border-white/10 rounded-xl overflow-hidden hover:border-[#7F77DD] hover:-translate-y-1 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover object-top"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>
              <p className="text-[#AFA9EC] text-xs mb-4">{project.tech}</p>

              <div className="flex gap-4">
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
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects