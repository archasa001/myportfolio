import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

const navItems = ['About', 'Skills', 'Education', 'Projects', 'Contact'];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-rose-100/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8 lg:px-10">
        <header className="sticky top-3 z-30 mb-6 rounded-[1.6rem] border border-slate-200/80 bg-white/85 px-4 py-4 shadow-lg shadow-slate-200/50 backdrop-blur sm:mb-8 sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="text-base font-bold tracking-[0.25em] text-slate-900 sm:text-lg">
              ARCHA
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-rose-300 hover:text-rose-600 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>

            <nav className="hidden flex-wrap items-center gap-4 text-sm font-semibold text-slate-500 md:flex lg:gap-5">
              <a className="transition hover:text-rose-600" href="#home">
                Home
              </a>
              {navItems.map((item) => (
                <a
                  key={item}
                  className="transition hover:text-rose-600"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {isMenuOpen && (
            <nav className="mt-4 grid gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 md:hidden">
              <a
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-rose-600"
                href="#home"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              {navItems.map((item) => (
                <a
                  key={item}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-rose-600"
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          )}
        </header>

        <main className="space-y-6 sm:space-y-8">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
