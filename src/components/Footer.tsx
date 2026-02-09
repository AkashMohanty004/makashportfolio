import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg font-bold text-primary neon-text tracking-widest">AKM</p>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/mkumarakash070-oss" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/akash-kumar-mohanty-99a439285/" },
              { icon: Mail, href: "mailto:mkumarakash070@gmail.com" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors hover:neon-glow rounded"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 Akash Kumar Mohanty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
