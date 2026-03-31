const educationItems = [
  {
    degree: 'Master of Computer Applications',
    school: 'Lourdes Matha College',
    period: 'Currently Pursuing',
    details:
      'Strengthening my knowledge in software development, programming, database concepts, and web technologies.',
  },
  {
    degree: 'BSc Physics',
    school: 'VTM NSS College',
    period: 'Completed',
    details:
      'Built strong analytical thinking, problem-solving ability, and academic discipline through scientific study.',
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="rounded-[1.8rem] border border-rose-100/80 bg-white/90 px-4 py-10 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.3)] sm:rounded-[2rem] sm:px-8 sm:py-12 md:px-10"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-rose-600">
        Education
      </p>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        The academic path behind my technical growth.
      </h2>

      <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
        {educationItems.map((item, index) => (
          <div key={item.degree} className="relative pl-8 sm:pl-14">
            {index !== educationItems.length - 1 && (
              <span className="absolute left-[9px] top-8 h-[calc(100%+1.25rem)] w-px bg-rose-100 sm:left-[15px] sm:h-[calc(100%+1.5rem)]" />
            )}
            <span className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-4 border-rose-100 bg-rose-600 shadow-sm sm:h-8 sm:w-8" />
            <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50/80 px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-white sm:rounded-[1.5rem] sm:px-5 sm:py-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-slate-800 sm:text-xl">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-rose-600">{item.period}</p>
              </div>
              <p className="mt-2 text-base font-medium text-slate-600">
                {item.school}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
