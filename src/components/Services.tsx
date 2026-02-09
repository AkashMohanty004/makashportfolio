import { Layers, Monitor, Server, Globe } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full Stack Web Development",
    desc: "End-to-end web application development with scalable architecture and modern tech stacks.",
  },
  {
    icon: Monitor,
    title: "Frontend Development (React)",
    desc: "Responsive, interactive, and high-performance UI development with React.js ecosystem.",
  },
  {
    icon: Server,
    title: "Backend / API Development",
    desc: "Secure and efficient server-side logic, RESTful APIs, and database integration.",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    desc: "Custom, fast, and SEO-friendly WordPress websites tailored to business needs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-primary neon-text">&lt;</span> Services{" "}
          <span className="text-primary neon-text">/&gt;</span>
        </h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-12 neon-glow" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-primary/20 rounded-lg p-6 text-center hover:border-primary/50 transition-all hover:scale-105 group neon-border"
            >
              <div className="inline-flex p-4 rounded-lg bg-primary/10 text-primary mb-4 group-hover:neon-glow transition-all">
                <s.icon size={28} />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
