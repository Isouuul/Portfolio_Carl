import "./TechTools.css";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiFirebase, SiGooglemaps } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Edit the groups and tools to match your real stack.
// Each tool needs a name and an icon component.
const GROUPS = [
  {
    key: "frontend",
    name: "Frontend",
    note: "What I use to build what people see and click.",
    tools: [
      { name: "React", Icon: FaReact },
      { name: "JavaScript", Icon: FaJs },
      { name: "HTML", Icon: FaHtml5 },
      { name: "CSS", Icon: FaCss3Alt },
    ],
  },
  {
    key: "backend",
    name: "Backend",
    note: "APIs and server logic behind the screens.",
    tools: [{ name: "Node.js", Icon: FaNodeJs }],
  },
  {
    key: "data",
    name: "Database & Cloud",
    note: "Where data lives and how it syncs.",
    tools: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Firebase", Icon: SiFirebase },
    ],
  },
  {
    key: "tools",
    name: "Tools & APIs",
    note: "Everyday tools and third-party services.",
    tools: [
      { name: "Git", Icon: FaGitAlt },
      { name: "GitHub", Icon: FaGithub },
      { name: "VS Code", Icon: VscVscode },
      { name: "Maps API", Icon: SiGooglemaps },
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
                    <Icon className="tech-tool-icon" aria-hidden="true" />
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