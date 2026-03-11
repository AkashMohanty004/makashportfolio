import { useState, useEffect } from "react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Full Stack Developer", "React Developer", "Backend Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < currentRole.length) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center grid-bg scanline overflow-hidden">
      {/* HUD decorative lines */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-20 left-10 w-40 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute top-20 right-10 w-40 h-px bg-gradient-to-l from-accent/50 to-transparent" />
        <div className="absolute bottom-20 left-10 w-60 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute bottom-20 right-10 w-60 h-px bg-gradient-to-l from-accent/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 mt-16 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
        {/* Text */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <p className="font-mono text-primary text-xs sm:text-sm mb-2 tracking-widest">&gt; WELCOME TO MY WORLD</p>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight break-words">
            Hi, I'm{" "}
            <span className="text-primary neon-text">Akash Kumar</span>
          </h1>
          <div className="font-mono text-base sm:text-2xl text-accent mb-4 h-8">
            {text}
            <span className="typing-cursor text-primary">|</span>
          </div>
          <p className="font-mono text-xs text-muted-foreground mb-4 tracking-wider leading-relaxed">
            MCA Student · Full Stack Web Developer · 2+ Years Experience
          </p>
          <p className="text-xs sm:text-sm italic text-primary/80 mb-6 font-mono leading-relaxed">
            "Building the Future, One Line of Code at a Time"
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            An MCA student and Full Stack Web Developer proficient in React.js and Node.js,
            passionate about building responsive, high-performance web applications with
            clean code, secure architecture, and seamless user experiences.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 sm:gap-6 mb-8 justify-center lg:justify-start">
            {[
              { value: "10+", label: "Tech Stack" },
              { value: "5+", label: "Projects" },
              { value: "2+", label: "Years Exp" },
            ].map((s) => (
              <div key={s.label} className="text-center border border-primary/30 rounded-lg px-4 sm:px-5 py-2 sm:py-3 neon-border">
                <div className="font-display text-xl sm:text-2xl font-bold text-primary">{s.value}</div>
                <div className="font-mono text-[10px] sm:text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
            <a
              href="/projects"
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-primary text-primary-foreground font-display text-xs sm:text-sm font-semibold rounded neon-glow hover:scale-105 transition-transform"
            >
              View Projects
            </a>
            <a
              href="/Akash_Kumar_Resume.pdf"
              download
              className="px-4 sm:px-5 py-2 sm:py-2.5 border border-accent/50 text-accent font-display text-xs sm:text-sm font-semibold rounded hover:bg-accent/10 transition-colors neon-border"
            >
              Download Resume
            </a>
            <a
              href="/contact"
              className="px-4 sm:px-5 py-2 sm:py-2.5 border border-primary/50 text-primary font-display text-xs sm:text-sm font-semibold rounded hover:bg-primary/10 transition-colors neon-border"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-primary rounded-lg blur-md opacity-60 animate-pulse-neon" />
            <img
              src={profileImg}
              alt="Akash Kumar Mohanty"
              className="relative w-56 sm:w-72 lg:w-80 aspect-[3/4] rounded-lg object-cover object-top border-2 border-primary/50"
            />
            {/* HUD corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/60" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/60" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary/60" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
