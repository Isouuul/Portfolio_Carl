import "./Techtools.css";
import { createElement } from "react";
import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLayerGroup,
  FaMousePointer,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const GROUPS = [
  {
    key: "frontend",
    name: "Frontend",
    note: "Core languages and styling for responsive interfaces.",
    tools: [
      { name: "HTML5", Icon: FaHtml5 },
      { name: "CSS3", Icon: FaCss3Alt },
      { name: "JavaScript", Icon: FaJs },
    ],
  },
  {
    key: "frameworks",
    name: "Frameworks",
    note: "Libraries and frameworks for modern applications.",
    tools: [
      { name: "React", Icon: FaReact },
      { name: "React Native", Icon: FaReact },
      { name: "Next.js", Icon: FaCode },
    ],
  },
  {
    key: "backend",
    name: "Backend",
    note: "Server-side tools and API development.",
    tools: [
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Express", Icon: FaCode },
      { name: "PostgreSQL", Icon: FaDatabase },
    ],
  },
  {
    key: "database",
    name: "Database",
    note: "Data storage and real-time services.",
    tools: [
      { name: "Firebase", Icon: SiFirebase },
      { name: "MySQL", Icon: FaDatabase },
    ],
  },
  {
    key: "principles",
    name: "Principles",
    note: "Practices for maintainable, scalable software.",
    tools: [
      { name: "System Design", Icon: FaLayerGroup },
      { name: "Clean Architecture", Icon: FaLayerGroup },
    ],
  },
  {
    key: "tools",
    name: "Tools",
    note: "Version control and everyday development tools.",
    tools: [
      { name: "Git", Icon: FaGitAlt },
      { name: "GitHub", Icon: FaGithub },
      { name: "VS Code", Icon: VscVscode },
      { name: "Cursor", Icon: FaMousePointer },
    ],
  },
];

const TOTAL = GROUPS.reduce((sum, g) => sum + g.tools.length, 0);

export default function TechTools() {
  return (
    <div className="tech-layout">
      <section className="tech-panel" aria-labelledby="tech-title">
        <header className="tech-header">
          <h2 id="tech-title" className="tech-title">
            Tech tools
          </h2>

          <span className="tech-rule" aria-hidden="true" />

          <span className="tech-count" aria-label={`${TOTAL} tools`}>
            {TOTAL}
          </span>
        </header>

        <div className="tech-grid">
          {GROUPS.map((group) => (
            <article key={group.key} className="tech-card">
              <h3 className="tech-card-name">{group.name}</h3>

              <p className="tech-card-note">{group.note}</p>

              <ul className="tech-tools">
                {group.tools.map(({ name, Icon }) => (
                  <li key={name} className="tech-tool">
                    {createElement(Icon, {
                      className: "tech-tool-icon",
                      "aria-hidden": true,
                    })}

                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}