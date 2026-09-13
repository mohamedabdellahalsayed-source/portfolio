function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 bg-[#0f0f14]">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Hi, I'm <span className="text-[#7F77DD]">Mohamed Abdellah</span>
      </h1>

      <p className="text-xl text-gray-400 max-w-xl mb-6">
        Aspiring Frontend Developer passionate about building clean,
        interactive web experiences with React and Tailwind CSS.
      </p>

      <div className="flex gap-4 mb-8">
        
        <a
          href="https://github.com/mohamedabdellahalsayed-source"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#1f2028] flex items-center justify-center hover:bg-[#7F77DD] transition"
        >
          <img src="/github-icon.svg" alt="GitHub" className="w-5 h-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/mohamed-abdellah-416925432"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#1f2028] flex items-center justify-center hover:bg-[#7F77DD] transition"
        >
          <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-5 h-5" />
        </a>

        <a
          href="https://www.facebook.com/share/19Mw9of6oh/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#1f2028] flex items-center justify-center hover:bg-[#7F77DD] transition"
        >
          <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5" />
        </a>
      </div>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-[#7F77DD] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#534AB7] transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-[#7F77DD] text-[#AFA9EC] px-6 py-3 rounded-lg font-medium hover:bg-[#7F77DD]/10 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero