import { useState } from "react";

const blogs = [
  {
    title: "Why React.js is the Future of Frontend",
    date: "Jan 2026",
    excerpt: "React continues to dominate the frontend landscape with its component-based architecture and thriving ecosystem.",
    content: "React.js has revolutionized how we build user interfaces. With features like concurrent rendering, server components, and a massive ecosystem of tools and libraries, React remains the go-to choice for developers building modern web applications. Its component-based architecture promotes reusability and maintainability, making it ideal for both small projects and large-scale enterprise applications.",
  },
  {
    title: "Getting Started with Node.js Backend",
    date: "Dec 2025",
    excerpt: "A beginner's guide to building scalable server-side applications with Node.js and Express.",
    content: "Node.js enables JavaScript developers to build powerful backend services. With its event-driven, non-blocking I/O model, Node.js is perfect for real-time applications, API services, and microservices. Combined with Express.js, you can quickly set up RESTful APIs, handle middleware, and connect to databases like MongoDB or PostgreSQL.",
  },
  {
    title: "AI in Web Development: 2026 Trends",
    date: "Feb 2026",
    excerpt: "How artificial intelligence is transforming the way we build and interact with web applications.",
    content: "AI is reshaping web development in profound ways — from AI-powered code assistants and automated testing to intelligent user interfaces that adapt to user behavior. In 2026, we're seeing the rise of AI-driven personalization, natural language interfaces, and smart content generation that make web experiences more intuitive and engaging.",
  },
  {
    title: "Building Scalable REST APIs",
    date: "Nov 2025",
    excerpt: "Best practices for designing APIs that can handle millions of requests with consistent performance.",
    content: "Scalable APIs require thoughtful design from the start. Key principles include proper resource naming, versioning, pagination, rate limiting, and caching strategies. Using tools like Redis for caching, implementing proper error handling, and designing with microservices in mind ensures your API can grow with your user base.",
  },
  {
    title: "My Journey: From Physics to Code",
    date: "Oct 2025",
    excerpt: "How a Physics background provided the perfect foundation for a career in software development.",
    content: "Transitioning from Physics to Computer Science taught me that the analytical thinking and problem-solving skills I developed studying quantum mechanics and thermodynamics translate perfectly to software engineering. Physics trained me to break complex problems into smaller, solvable parts — exactly what coding demands. My journey from equations to algorithms has been challenging but incredibly rewarding.",
  },
  {
    title: "WordPress vs Custom Development",
    date: "Sep 2025",
    excerpt: "Choosing the right approach for your web project — when to go custom and when WordPress wins.",
    content: "WordPress powers over 40% of the web, but it's not always the right choice. For content-heavy sites, blogs, and small business websites, WordPress offers speed and cost-efficiency. For complex applications requiring custom logic, real-time features, or unique UX, custom development with frameworks like React provides the flexibility and performance you need.",
  },
  {
    title: "Git Workflow Best Practices",
    date: "Aug 2025",
    excerpt: "Master version control with efficient branching strategies and collaborative workflows.",
    content: "A solid Git workflow is essential for team productivity. Adopt a branching strategy like Git Flow or trunk-based development. Write meaningful commit messages, use pull requests for code reviews, and leverage CI/CD pipelines for automated testing. Proper Git hygiene prevents merge conflicts and makes project history navigable.",
  },
  {
    title: "The Power of Full Stack Development",
    date: "Jul 2025",
    excerpt: "Why being a full stack developer gives you a unique advantage in the modern tech landscape.",
    content: "Full stack developers understand both the frontend and backend, enabling them to architect complete solutions. This holistic view helps in making better technical decisions, debugging across the stack, and communicating effectively with specialized team members. In startups and small teams, full stack skills are invaluable.",
  },
];

const Blog = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="blog" className="py-24 relative bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-primary neon-text">&lt;</span> Blog{" "}
          <span className="text-primary neon-text">/&gt;</span>
        </h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-12 neon-glow" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all group"
            >
              <span className="font-mono text-xs text-primary/60">{blog.date}</span>
              <h3 className="font-display text-sm font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {expanded === i ? blog.content : blog.excerpt}
              </p>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="font-mono text-xs text-primary hover:text-accent transition-colors"
              >
                {expanded === i ? "[ Show Less ]" : "[ Read More → ]"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
