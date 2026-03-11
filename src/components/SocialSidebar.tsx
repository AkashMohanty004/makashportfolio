import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/mkumarakash070-oss", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akash-kumar-mohanty-99a439285/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mkumarakash070@gmail.com", label: "Email" },
];

const SocialSidebar = () => (
  <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="p-2.5 rounded-lg bg-card border border-primary/20 text-muted-foreground hover:text-primary hover:neon-glow hover:border-primary/50 transition-all"
      >
        <s.icon size={18} />
      </a>
    ))}
    <div className="w-px h-16 bg-primary/30 mx-auto" />
  </div>
);

export default SocialSidebar;
