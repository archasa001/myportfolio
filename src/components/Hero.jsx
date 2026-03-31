const heroHighlights = [
  'MCA Student',
  'Python',
  'Java',
  'Web Development',
  'Open to Internships',
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[1.8rem] border border-rose-100/80 bg-white/90 px-4 py-10 shadow-[0_35px_90px_-45px_rgba(15,23,42,0.3)] backdrop-blur sm:rounded-[2rem] sm:px-6 sm:py-12 md:px-10 lg:px-14 lg:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.13),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(251,113,133,0.12),_transparent_30%)]" />
      <div className="pointer-events-none absolute -left-12 top-10 h-32 w-32 rounded-full bg-rose-100 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 bottom-6 h-36 w-36 rounded-full bg-orange-100 blur-3xl" />

      <div className="relative grid items-center gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-rose-300" />
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              Hello
            </p>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            I&apos;m <span className="text-rose-600">Archa S A</span>
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-800 sm:mt-4 sm:text-3xl">
            Aspiring Software Developer
          </h2>

          <p className="mt-3 text-base font-medium leading-7 text-slate-500 sm:text-lg">
            MCA Student | Python | Java | Web Development
          </p>

          <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8">
            I am an MCA student passionate about software development, web
            technologies, and problem solving. With a background in Physics and
            a growing foundation in programming, I am building practical skills
            and looking for internship opportunities where I can learn, create,
            and contribute.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5 sm:gap-3">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-rose-100 bg-rose-50 px-3.5 py-2 text-xs font-semibold text-rose-700 transition duration-300 hover:-translate-y-1 hover:border-rose-300 hover:bg-white hover:shadow-md sm:px-4 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-rose-600 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-200 sm:w-auto sm:px-7"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-rose-400 hover:text-rose-600 hover:shadow-md sm:w-auto sm:px-7"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-white">
              <p className="text-2xl font-bold text-slate-900">2025</p>
              <p className="mt-1 text-sm text-slate-500">Started MCA journey</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-white">
              <p className="text-2xl font-bold text-slate-900">5+</p>
              <p className="mt-1 text-sm text-slate-500">Core skills in focus</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-white">
              <p className="text-2xl font-bold text-slate-900">Ready</p>
              <p className="mt-1 text-sm text-slate-500">For internships</p>
            </div>
          </div>
        </div>

        <div className="relative order-first mx-auto w-full max-w-[17rem] sm:max-w-sm md:max-w-md lg:order-none lg:max-w-lg">
          <div className="absolute inset-5 rounded-[2.5rem] bg-gradient-to-br from-rose-200/40 via-transparent to-orange-100/40 blur-3xl" />
          <div className="group relative overflow-hidden rounded-[1.8rem] border border-rose-100/80 bg-white p-2 shadow-[0_24px_60px_-28px_rgba(225,29,72,0.28)] transition duration-500 hover:-translate-y-2 sm:rounded-[2rem]">
            <div className="image-shimmer absolute -left-full top-0 h-full w-1/3 rotate-12 bg-white/20 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-rose-50/40 sm:rounded-[1.6rem]">
              <img
                src="/assets/archa.jpg"
                alt="Archa S A"
                className="h-full w-full rounded-[1.4rem] object-cover object-top transition duration-700 group-hover:scale-[1.03] sm:rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
