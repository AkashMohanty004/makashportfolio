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
    tech: ["AI/ML", "Computer Vision", "NLP", "Explainable AI", "Weather Risk Modeling", "Data Fusion"],
    details: "AIDR leverages explainable AI to help emergency responders prioritize rescue efforts during climate disasters. The system fuses satellite imagery, weather data, and ground reports into actionable intelligence.",
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              onClick={() => setSelected(p)}
              className="bg-card border border-primary/20 rounded-lg p-6 cursor-pointer hover:border-primary/50 transition-all hover:scale-[1.02] neon-border group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-lg font-semibold text-primary">{p.title}</h3>
                <span className="font-mono text-xs px-2 py-0.5 bg-accent/10 text-accent rounded">{p.role}</span>
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
