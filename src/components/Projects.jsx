const projects = [
  {
    title: 'Student Task Manager',
    description:
      'A clean productivity web app concept for students to manage assignments, study goals, reminders, and daily priorities in one dashboard.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    accent: 'from-rose-500 to-orange-400',
  },
  {
    title: 'Portfolio Blog UI',
    description:
      'A personal blog and portfolio interface designed to present projects, achievements, and technical learning updates in a professional way.',
    tech: ['HTML', 'CSS', 'GitHub'],
    accent: 'from-orange-400 to-rose-500',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="space-y-6 sm:space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-rose-600">
          Projects
        </p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Practice projects that bring my ideas to life.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-[1.8rem] border border-rose-100/80 bg-white/90 p-5 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-2 hover:border-rose-200 sm:rounded-[2rem] sm:p-6"
          >
            <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${project.accent}`} />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-rose-50 transition duration-500 group-hover:scale-125" />

            <div className="relative flex h-full flex-col">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
                  Featured Project
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-800 sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-rose-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition duration-300 group-hover:border-rose-500 group-hover:text-rose-600 hover:-translate-y-1"
              >
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
