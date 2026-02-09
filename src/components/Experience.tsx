import { Briefcase, Trophy } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-primary neon-text">&lt;</span> Experience & Achievements{" "}
          <span className="text-primary neon-text">/&gt;</span>
        </h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-12 neon-glow" />

        {/* Work */}
        <div className="mb-12">
          <div className="bg-card border border-primary/20 rounded-lg p-6 neon-border hud-corner hover:border-primary/50 transition-all hover:scale-[1.01]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded bg-primary/10 text-primary shrink-0">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Business Analyst</h3>
                <p className="text-primary font-mono text-sm">Sandhiya Travel Agency</p>
                <p className="text-muted-foreground font-mono text-xs mt-1">2021 – Present · 2+ Years</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Involved in business analysis, digital insights, and operational support.
                  Streamlined workflows and contributed to data-driven decision making.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hackathons */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Trophy size={20} className="text-primary" /> Hackathons & Events
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "BPUT Hackathon",
              project: "SkillGuide AI",
              desc: "AI-powered adaptive learning platform for rural and semi-urban colleges.",
            },
            {
              title: "Global Entrepreneurship Summit 2026",
              project: "AIDR",
              desc: "AI disaster response system — qualified for final level.",
              badge: "Finalist",
            },
          ].map((h) => (
            <div
              key={h.title}
              className="bg-card border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all hover:scale-[1.02] group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-sm font-semibold text-accent">{h.title}</h4>
                {h.badge && (
                  <span className="font-mono text-xs px-2 py-0.5 bg-accent/10 text-accent rounded">{h.badge}</span>
                )}
              </div>
              <p className="font-mono text-primary text-sm mb-2">{h.project}</p>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
