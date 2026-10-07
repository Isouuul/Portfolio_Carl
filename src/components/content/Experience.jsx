import "./Experience.css";

// Edit these with your real roles, dates, and details.
const EXPERIENCES = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Thy Web Dev Inc.",
    type: "Internship",
    period: "2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "CSS", "JavaScript"],
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Client projects",
    type: "Freelance",
    period: "2025 – 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    tags: ["React", "Node.js", "Firebase"],
  },
];

export default function Experience() {
  return (
    <div className="exp-layout">
      <section className="exp-panel" aria-labelledby="exp-title">
        <header className="exp-header">
          <h2 id="exp-title" className="exp-title">
            Work experience
          </h2>
          <span className="exp-rule" aria-hidden="true" />
          <span className="exp-count" aria-label={`${EXPERIENCES.length} entries`}>
            {EXPERIENCES.length}
          </span>
        </header>

        <div className="exp-grid">
          {EXPERIENCES.map((item) => (
            <article key={item.id} className="exp-card">
              <div className="exp-card-top">
                <h3 className="exp-role">{item.role}</h3>
                <span className="exp-period">{item.period}</span>
              </div>
              <p className="exp-company">
                {item.company} · {item.type}
              </p>
              <p className="exp-desc">{item.description}</p>
              <ul className="exp-tags">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}