import { Code, Rocket, Shield, Terminal, Cpu, Globe, Zap, Server } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const techStack = [
  "React.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL",
  "Express.js", "Tailwind CSS", "Docker", "Git", "REST APIs",
];

const terminalLines = [
  { prompt: "~$", cmd: "deploy --production", delay: 0 },
  { prompt: "", cmd: "✓ Build optimized for production", delay: 400 },
  { prompt: "", cmd: "✓ Security audit passed — 0 vulnerabilities", delay: 800 },
  { prompt: "", cmd: "✓ Deployed to cloud in 3.2s", delay: 1200 },
  { prompt: "~$", cmd: "status", delay: 1800 },
  { prompt: "", cmd: "● All systems operational", delay: 2200 },
];

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = "01アイウエオカキクケコサシスセソ<>/{}[];=+";
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(8, 12, 20, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "hsl(190, 100%, 50%)";
      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.globalAlpha = Math.random() * 0.4 + 0.1;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      ctx.globalAlpha = 1;
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />;
};

const TerminalBlock = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          terminalLines.forEach((_, i) => {
            setTimeout(() => setVisibleLines(i + 1), terminalLines[i].delay);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-background/80 border border-border rounded-lg overflow-hidden max-w-2xl mx-auto">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/30">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-neon-green/40" />
        <div className="w-3 h-3 rounded-full bg-primary/40" />
        <span className="font-mono text-xs text-muted-foreground ml-2">terminal — deploy.sh</span>
      </div>
      <div className="p-4 font-mono text-xs sm:text-sm space-y-1 min-h-[160px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.prompt && <span className="text-primary">{line.prompt}</span>}
            <span className={line.prompt ? "text-foreground" : "text-muted-foreground"}>{line.cmd}</span>
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="text-primary typing-cursor">▊</span>
        )}
      </div>
    </div>
  );
};

const pillars = [
  { icon: Shield, title: "Secure by Default", desc: "Every endpoint hardened, every input validated." },
  { icon: Rocket, title: "Deploy-Ready Code", desc: "CI/CD pipelines, Docker, cloud-native builds." },
  { icon: Cpu, title: "Optimized Performance", desc: "Lazy loading, caching, and efficient queries." },
  { icon: Globe, title: "Scalable Architecture", desc: "Microservices-ready, horizontally scalable." },
];

const HomeContent = () => (
  <div className="relative">
    {/* Tech Stack Marquee */}
    <section className="py-8 sm:py-12 border-y border-border/50 overflow-hidden relative">
      <p className="font-mono text-[10px] sm:text-xs text-muted-foreground text-center mb-4 sm:mb-6 tracking-widest">
        &gt; TECH_STACK.map()
      </p>
      <div className="flex overflow-hidden">
        <div className="flex gap-3 sm:gap-6 animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((t, i) => (
            <span
              key={i}
              className="px-3 sm:px-4 py-1.5 sm:py-2 border border-primary/20 rounded text-primary font-mono text-[10px] sm:text-sm neon-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Engineering Pillars */}
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <p className="font-mono text-[10px] sm:text-xs text-primary text-center mb-2 tracking-widest">&gt; CORE_PRINCIPLES</p>
      <h2 className="font-display text-xl sm:text-3xl font-bold text-foreground text-center mb-6 sm:mb-10">
        Engineering Philosophy
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="group border border-border/50 rounded-lg p-3 sm:p-5 hover:border-primary/50 transition-colors bg-card/50 hud-corner"
          >
            <p.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3 group-hover:drop-shadow-[0_0_8px_hsl(190,100%,50%)] transition-all" />
            <h3 className="font-display text-xs sm:text-sm font-semibold text-foreground mb-1">{p.title}</h3>
            <p className="font-mono text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Deploy Terminal */}
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <MatrixRain />
      </div>
      <div className="relative z-10">
        <p className="font-mono text-xs text-primary text-center mb-2 tracking-widest">&gt; DEPLOY_LOG</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Production Ready
        </h2>
        <TerminalBlock />
      </div>
    </section>

    {/* Quick Notes */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <p className="font-mono text-xs text-primary text-center mb-2 tracking-widest">&gt; TECH_NOTES</p>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
        Technical Notes
      </h2>
      <div className="grid sm:grid-cols-3 gap-5">
        {[
          { icon: Terminal, title: "Clean Code", note: "Readable, maintainable, well-documented. Every function has a purpose." },
          { icon: Server, title: "API Design", note: "RESTful patterns, proper status codes, versioned endpoints, rate limiting." },
          { icon: Zap, title: "Fast Iteration", note: "Agile sprints, rapid prototyping, CI/CD for instant feedback loops." },
        ].map((n) => (
          <div key={n.title} className="border border-border/50 rounded-lg p-5 bg-card/30">
            <n.icon className="w-6 h-6 text-accent mb-3" />
            <h3 className="font-display text-sm font-semibold text-foreground mb-2">{n.title}</h3>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">{n.note}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default HomeContent;
