import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Linkedin, Github, Send, Layers, Monitor, Server, Globe } from "lucide-react";

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

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    try {
      await emailjs.sendForm("service_73gjo5g", "template_tr2o1gi", formRef.current, "IcgQW2-CQc3ojYdZ-");
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 5000);
    } catch {
      alert("Failed to send. Please try again.");
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services */}
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-primary neon-text">&lt;</span> Services{" "}
          <span className="text-primary neon-text">/&gt;</span>
        </h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-12 neon-glow" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-20">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-primary/20 rounded-lg p-3 sm:p-6 text-center hover:border-primary/50 transition-all hover:scale-105 group neon-border"
            >
              <div className="inline-flex p-2 sm:p-4 rounded-lg bg-primary/10 text-primary mb-2 sm:mb-4 group-hover:neon-glow transition-all">
                <s.icon size={20} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="font-display text-[10px] sm:text-sm font-semibold text-foreground mb-1 sm:mb-2 leading-tight">{s.title}</h3>
              <p className="text-muted-foreground text-[10px] sm:text-sm leading-relaxed hidden sm:block">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-primary neon-text">&lt;</span> Contact{" "}
          <span className="text-primary neon-text">/&gt;</span>
        </h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-12 neon-glow" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "user_name", label: "Name", type: "text" },
              { name: "user_email", label: "Email", type: "email" },
            ].map((f) => (
              <div key={f.name}>
                <label className="font-mono text-xs text-muted-foreground mb-1 block">{f.label}</label>
                <input
                  name={f.name}
                  type={f.type}
                  required
                  className="w-full bg-input border border-primary/20 rounded px-4 py-3 text-sm text-foreground font-mono focus:outline-none focus:border-primary focus:neon-border transition-all placeholder:text-muted-foreground"
                  placeholder={`Your ${f.label.toLowerCase()}`}
                />
              </div>
            ))}
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1 block">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-input border border-primary/20 rounded px-4 py-3 text-sm text-foreground font-mono focus:outline-none focus:border-primary focus:neon-border transition-all placeholder:text-muted-foreground resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 bg-primary text-primary-foreground font-display text-sm font-semibold rounded neon-glow hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {sending ? "Sending..." : sent ? "✓ Sent!" : <><Send size={16} /> Send Message</>}
            </button>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out.
              I'm always open to discussing new opportunities and ideas.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "mkumarakash070@gmail.com", href: "mailto:mkumarakash070@gmail.com" },
                { icon: Phone, label: "+91 9853316873", href: "tel:+919853316873" },
                { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/akash-kumar-mohanty-99a439285/" },
                { icon: Github, label: "mkumarakash070-oss", href: "https://github.com/mkumarakash070-oss" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded bg-primary/10 text-primary group-hover:neon-glow transition-all">
                    <c.icon size={18} />
                  </div>
                  <span className="font-mono text-sm break-all">{c.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
