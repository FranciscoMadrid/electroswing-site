import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-primary via-[#345554] to-[#213534] text-slate-300 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <h2 className="text-white text-4xl font-bold tracking-tight mb-4">
            FFMS PORTFOLIO
          </h2>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-xl uppercase tracking-wider">Navigation</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#information" className="hover:text-blue-400 transition-colors">Information</a></li>
            <li><a href="#genre" className="hover:text-blue-400 transition-colors">Genre</a></li>
            <li><a href="#timeline" className="hover:text-blue-400 transition-colors">Timeline</a></li>
            <li><a href="#artist" className="hover:text-blue-400 transition-colors">Artists</a></li>
          </ul>
        </div>

        {/* Social / Connect */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-xl uppercase tracking-wider">Get to Know me</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/FranciscoMadrid" className="p-2 bg-[#213534] rounded-lg hover:bg-[#7a9796] transition-all group">
              {/* GitHub Icon */}
              <span className="sr-only">GitHub</span>
              <svg className="w-8 h-8 fill-current group-hover:fill-[#213534]" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/francisco-madrid-1b177511a?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="p-2 bg-[#213534] rounded-lg hover:bg-[#7a9796] group transition-all">
              {/* LinkedIn Icon */}
              <span className="sr-only">LinkedIn</span>
              <svg className="w-8 h-8 fill-current group-hover:fill-[#213534]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/40 flex flex-col md:flex-row justify-between items-center text-sm text-white">
        <p>© 2026 Francisco Madrid. Built with React & Tailwind.</p>
      </div>
    </footer>
  )
}
