function Contact() {
  return (
<section id="contact" className="reveal py-24 px-6 max-w-2xl mx-auto text-center scroll-mt-20 bg-[#0f0f14]">      <h2 className="text-3xl font-bold text-white mb-4">
        Get In <span className="text-[#7F77DD]">Touch</span>
      </h2>
      <p className="text-gray-400 mb-12">
        Have an opportunity or a question? Feel free to reach out — I'd love to hear from you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          href="mailto:mohamedabdellahalsayed@gmail.com"
          className="bg-[#1a1b23] border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-[#7F77DD] hover:-translate-y-1 transition duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-[#7F77DD]/15 flex items-center justify-center text-2xl">
            ✉️
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">Email</h3>
            <p className="text-gray-400 text-sm">mohamedabdellahalsayed@gmail.com</p>
          </div>
        </a>

        <a
          href="https://wa.me/201039092343"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1b23] border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-[#7F77DD] hover:-translate-y-1 transition duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-[#7F77DD]/15 flex items-center justify-center text-2xl">
            💬
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">WhatsApp</h3>
            <p className="text-gray-400 text-sm">01039092343</p>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Contact