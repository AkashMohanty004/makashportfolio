import { Code2, Database, Globe, Users } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Languages",
    skills: [
      { name: "C", level: 70 },
      { name: "Java", level: 75 },
      { name: "Python", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Frameworks & Tools",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "Git & GitHub", level: 80 },
    ],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: [
      { name: "Full Stack Dev", level: 85 },
      { name: "WordPress", level: 70 },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: 90 },
      { name: "Time Management", level: 85 },
      { name: "Problem Solving", level: 90 },
    ],
  },
];

const marqueeSkills = [
  "React.js", "Node.js", "Python", "Java", "C", "MySQL",
  "REST APIs", "Git", "GitHub", "WordPress", "Full Stack",
  "TensorFlow", "AI/ML", "TypeScript",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-primary neon-text">&lt;</span> Skills{" "}
          <span className="text-primary neon-text">/&gt;</span>
        </h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-12 neon-glow" />

        {/* Marquee */}
        <div className="overflow-hidden mb-10 sm:mb-16 border-y border-primary/10 py-3 sm:py-4">
          <div className="flex animate-marquee">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <div
                key={i}
                className="shrink-0 mx-2 sm:mx-4 px-3 sm:px-5 py-1.5 sm:py-2 rounded border border-primary/30 text-primary font-mono text-[10px] sm:text-sm neon-border whitespace-nowrap"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card border border-primary/20 rounded-lg p-6 neon-border hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <cat.icon className="text-primary" size={20} />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  <span className="font-mono text-primary text-sm">$ </span>{cat.title}
                </h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-sm text-muted-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
