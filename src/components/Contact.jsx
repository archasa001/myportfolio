const contacts = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-[1.8rem] border border-rose-100/40 bg-gradient-to-br from-slate-950 via-rose-950 to-orange-500 px-4 py-10 text-white shadow-[0_25px_70px_-40px_rgba(15,23,42,0.5)] sm:rounded-[2rem] sm:px-8 sm:py-12 md:px-10"
    >
      <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-12 bottom-10 h-40 w-40 rounded-full bg-rose-200/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-rose-200">
          Contact
        </p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s connect and build something meaningful together.
        </h2>
        <p className="mt-5 text-[15px] leading-7 text-rose-50 sm:text-base sm:leading-8">
          I&apos;m actively learning, building projects, and looking for
          internship opportunities where I can contribute and grow as a software
          developer. Feel free to reach out for collaborations or opportunities.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:archa@example.com"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-rose-100 sm:w-auto"
          >
            Email Me
          </a>
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-white/10 sm:w-auto"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
