const programmingSkills = [
  { name: 'Python', level: 90 },
  { name: 'Java', level: 82 },
  { name: 'C++', level: 72 },
  { name: 'JavaScript', level: 78 },
];

const webSkills = [
  'HTML',
  'CSS',
  'Responsive Design',
  'Tailwind CSS',
  'React Basics',
];

const tools = ['Git', 'GitHub', 'VS Code', 'Canva', 'Figma Basics'];

const Skills = () => {
  return (
    <section id="skills" className="space-y-6 sm:space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-rose-600">
          Skills
        </p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Technologies and tools shaping my development journey.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.8rem] border border-rose-100/80 bg-white/90 p-5 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-2 sm:rounded-[2rem] sm:p-6">
          <h3 className="text-xl font-semibold text-slate-800">Programming</h3>
          <div className="mt-6 space-y-5">
            {programmingSkills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-rose-50">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-1">
          <div className="rounded-[1.8rem] border border-rose-100/80 bg-white/90 p-5 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-2 sm:rounded-[2rem] sm:p-6">
            <h3 className="text-xl font-semibold text-slate-800">
              Web Development
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {webSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition duration-300 hover:-translate-y-1 hover:border-rose-300 hover:bg-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-rose-100/80 bg-gradient-to-br from-slate-900 via-rose-900 to-orange-500 p-5 text-white shadow-[0_25px_70px_-40px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-2 sm:rounded-[2rem] sm:p-6">
            <h3 className="text-xl font-semibold">Tools & Workflow</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-rose-50">
              I focus on learning by building, refining interfaces, and improving
              my coding confidence through hands-on projects and regular practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
