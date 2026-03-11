import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
  {
    title: "SkillGuide AI",
    role: "Full Stack Developer",
    desc: "An AI-powered adaptive learning platform for rural and semi-urban colleges, offering personalized learning, offline support, and career-aligned upskilling paths.",
    tech: ["AI/ML", "TensorFlow Lite", "Mobile App", "Cloud Sync", "Offline-First"],
    details: "SkillGuide AI addresses the digital divide by providing AI-driven personalized learning that works even with limited internet connectivity. The platform adapts to individual learning patterns and provides career-aligned recommendations.",
  },
  {
    title: "AIDR",
    subtitle: "AI for Decision-Ready Climate Disaster Response",
    role: "Team Member — Team Cybernauts",
    desc: "An AI-driven disaster response system that converts multi-source climate data into clear, explainable rescue priorities for faster emergency decision-making.",
    tech: ["AI/ML", "Computer Vision", "NLP", "Explainable AI", "Weather Risk Modeling"],
    details: "AIDR leverages explainable AI to help emergency responders prioritize rescue efforts during climate disasters. The system fuses satellite imagery, weather data, and ground reports into actionable intelligence.",
  },
  {
    title: "DevConnect",
    role: "Full Stack Developer",
    desc: "A social networking platform for developers to share projects, collaborate on code, and find mentors in real-time.",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "REST API"],
    details: "DevConnect enables developers to build profiles, showcase repos, join discussion threads, and pair-program via live code editors. Built with real-time WebSocket communication and a scalable Node.js backend.",
  },
  {
    title: "SmartBudget",
    role: "Frontend Developer",
    desc: "A personal finance tracker with AI-powered spending insights, budget forecasting, and visual analytics dashboards.",
    tech: ["React.js", "Chart.js", "Python", "Flask", "MySQL"],
    details: "SmartBudget helps users track expenses, set savings goals, and receive AI-generated spending pattern analysis. Features interactive charts and automated monthly reports.",
  },
  {
    title: "CloudNotes",
    role: "Full Stack Developer",
    desc: "A secure, cloud-synced note-taking application with Markdown support, tagging, and offline-first architecture.",
    tech: ["React.js", "Node.js", "PostgreSQL", "JWT Auth", "PWA"],
    details: "CloudNotes offers a distraction-free writing experience with full Markdown rendering, nested folders, tags, and end-to-end encryption. Works offline as a Progressive Web App and syncs when connected.",
  },
  {
    title: "EcoTrack",
    role: "Backend Developer",
    desc: "An environmental monitoring dashboard that aggregates IoT sensor data to visualize air quality, water levels, and weather patterns.",
    tech: ["Python", "Django", "REST API", "IoT", "Data Visualization"],
    details: "EcoTrack collects real-time data from distributed IoT sensors, processes it through a Django backend, and presents actionable environmental insights through interactive dashboards and alert systems.",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-primary neon-text">&lt;</span> Projects{" "}
          <span className="text-primary neon-text">/&gt;</span>
        </h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-12 neon-glow" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              onClick={() => setSelected(p)}
              className="bg-card border border-primary/20 rounded-lg p-6 cursor-pointer hover:border-primary/50 transition-all hover:scale-[1.02] neon-border group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-3">
                <h3 className="font-display text-base sm:text-lg font-semibold text-primary">{p.title}</h3>
                <span className="font-mono text-[10px] sm:text-xs px-2 py-0.5 bg-accent/10 text-accent rounded shrink-0 self-start sm:self-auto">{p.role}</span>
              </div>
              {p.subtitle && <p className="font-mono text-xs text-muted-foreground mb-2">{p.subtitle}</p>}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
              <p className="font-mono text-xs text-primary/60 mt-4 group-hover:text-primary transition-colors">
                [ Click for details → ]
              </p>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="bg-card border-primary/30 max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-primary">{selected?.title}</DialogTitle>
            <DialogDescription className="font-mono text-accent text-xs">{selected?.role}</DialogDescription>
          </DialogHeader>
          <p className="text-muted-foreground text-sm leading-relaxed">{selected?.details}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {selected?.tech.map((t) => (
              <span key={t} className="font-mono text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                {t}
              </span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
