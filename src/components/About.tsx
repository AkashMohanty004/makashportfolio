const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Regional College of Management",
    year: "2025–2027",
    status: "Ongoing",
  },
  {
    degree: "B.Sc. Physics (Hons)",
    school: "Fakir Mohan University",
    year: "2022–2025",
    status: "Completed",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-primary neon-text">&lt;</span> About Me{" "}
          <span className="text-primary neon-text">/&gt;</span>
        </h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-12 neon-glow" />

        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          My journey into technology began with a deep curiosity about how things work — starting with a
          foundation in Physics, where I developed strong analytical and problem-solving skills. This scientific
          mindset naturally evolved into a passion for Computer Applications, AI, and web development. Now
          pursuing my MCA, I combine theoretical knowledge with practical development experience to build
          impactful digital solutions.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 hidden sm:block" />

          <div className="space-y-12">
            {education.map((item, i) => (
              <div key={i} className={`flex flex-col sm:flex-row items-center gap-6 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                  <div className="bg-card border border-primary/20 rounded-lg p-6 neon-border hud-corner hover:border-primary/50 transition-colors">
                    <span className="font-mono text-xs text-primary">{item.year}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">{item.degree}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.school}</p>
                    <span className={`inline-block mt-2 font-mono text-xs px-2 py-0.5 rounded ${item.status === "Ongoing" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden sm:flex w-4 h-4 rounded-full bg-primary neon-glow shrink-0" />

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
