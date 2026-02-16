import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: logo + quick links + socials */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between mb-6">
          <div>
            <Link to="/" className="font-display text-lg font-bold text-primary neon-text tracking-widest">
              &lt;AKASH&gt;
            </Link>
            <p className="font-mono text-xs text-muted-foreground mt-2 max-w-xs">
              Full Stack Developer crafting high-performance web experiences.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Social / Contact icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/mkumarakash070-oss", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/akash-kumar-mohanty-99a439285/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:mkumarakash070@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+919853316873", label: "Phone" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded bg-primary/10 text-muted-foreground hover:text-primary hover:neon-glow transition-all"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary/20 mb-4" />

        <p className="font-mono text-xs text-muted-foreground text-center">
          © 2026 Akash Kumar Mohanty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
