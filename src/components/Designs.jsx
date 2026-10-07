import { useState } from 'react'

const designs = [
  {
    title: 'Social Media Design 1',
    image: `${import.meta.env.BASE_URL}designs/design-1.png`,
  },
  {
    title: 'Social Media Design 2',
    image: `${import.meta.env.BASE_URL}designs/design-2.jpeg`,
  },
  {
    title: 'Burger Instagram Post',
    image: `${import.meta.env.BASE_URL}designs/design-3.png`,
  },
  {
    title: 'Maraya Yogurt Ad 1',
    image: `${import.meta.env.BASE_URL}designs/design-4.png`,
  },
  {
    title: 'Maraya Yogurt Ad 2',
    image: `${import.meta.env.BASE_URL}designs/design-5.png`,
  },
  {
    title: 'Restaurant Burger Ad',
    image: `${import.meta.env.BASE_URL}designs/design-6.png`,
  },
  {
    title: 'Pizza Instagram Post',
    image: `${import.meta.env.BASE_URL}designs/design-7.png`,
  },
  {
    title: 'Hot Burger Post',
    image: `${import.meta.env.BASE_URL}designs/design-8.png`,
  },
  {
    title: 'Creative Design',
    image: `${import.meta.env.BASE_URL}designs/design-9.png`,
  },
]

function Designs() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="designs" className="reveal py-24 px-6 max-w-6xl mx-auto scroll-mt-20 bg-[#0f0f14]">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        My <span className="text-[#7F77DD]">Designs</span>
      </h2>
      <p className="text-gray-400 mb-12 text-center">
        A selection of my graphic design and social media work
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {designs.map((design, index) => (
          <div
            key={index}
            onClick={() => setSelected(design)}
            className="bg-[#1a1b23] border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-[#7F77DD] hover:-translate-y-1 transition duration-300 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium bg-[#7F77DD] px-4 py-2 rounded-lg">
                  View
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-medium text-sm">{design.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-[#AFA9EC] transition"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center text-white mt-4 font-medium">{selected.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Designs
