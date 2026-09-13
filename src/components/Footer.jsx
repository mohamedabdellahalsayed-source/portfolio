function Footer() {
  return (
    <footer className="bg-[#0a0a0e] border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-white">
          Mohamed <span className="text-[#7F77DD]">Abdellah</span>
        </h2>

        <ul className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <li><a href="#about" className="hover:text-[#AFA9EC] transition">About</a></li>
          <li><a href="#skills" className="hover:text-[#AFA9EC] transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#AFA9EC] transition">Projects</a></li>
          <li><a href="#certificates" className="hover:text-[#AFA9EC] transition">Certificates</a></li>
          <li><a href="#contact" className="hover:text-[#AFA9EC] transition">Contact</a></li>
        </ul>

        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Mohamed Abdellah. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer