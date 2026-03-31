const strengths = [
  {
    title: 'Curious Learner',
    text: 'I enjoy exploring new tools, understanding how things work, and improving through consistent practice.',
  },
  {
    title: 'Problem Solver',
    text: 'My academic journey in Physics and MCA has strengthened my analytical thinking and structured approach.',
  },
  {
    title: 'Team Ready',
    text: 'I am looking forward to internship opportunities where I can contribute, collaborate, and grow with real projects.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="rounded-[1.8rem] border border-rose-100/80 bg-white/90 px-4 py-10 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.3)] backdrop-blur sm:rounded-[2rem] sm:px-8 sm:py-12 md:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-rose-600">
            About
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Building a meaningful tech career with focus, discipline, and creativity.
          </h2>
        </div>

        <div>
          <p className="text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8">
            I am an MCA student passionate about software development, web
            technologies, and problem solving. I completed my BSc in Physics and
            am currently building my technical skills while exploring front-end
            development, programming fundamentals, and project-based learning.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            I enjoy creating clean interfaces, learning modern technologies, and
            turning ideas into practical solutions. My goal is to grow into a
            confident software developer through hands-on experience and
            internship opportunities.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((item) => (
          <div
            key={item.title}
            className="group rounded-[1.6rem] border border-slate-200 bg-slate-50/80 p-5 transition duration-300 hover:-translate-y-2 hover:border-rose-200 hover:bg-white hover:shadow-lg"
          >
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 opacity-90 transition duration-300 group-hover:scale-110" />
            <h3 className="mt-4 text-xl font-semibold text-slate-800">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
