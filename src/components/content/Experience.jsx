import "./Experience.css";
import {
  FaCode,
  FaEye,
  FaLayerGroup,
  FaMobileAlt,
  FaPaw,
  FaPlug,
  FaShopify,
} from "react-icons/fa";
import {
  SiDaisyui,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiShopify,
} from "react-icons/si";

const TAG_ICONS = {
  React: SiReact,
  "React Native": SiReact,
  JavaScript: SiJavascript,
  "REST APIs": FaPlug,
  Proctoring: FaEye,
  "UI Components": FaLayerGroup,
  Figma: SiFigma,
  DaisyUI: SiDaisyui,
  "UI Kitten": FaPaw,
  Shopify: SiShopify,
  Liquid: FaCode,
  HTML: SiHtml5,
  CSS: FaCode,
};

const EXPERIENCES = [
  {
    id: 1,
    icon: FaCode,
    role: "Full-stack Developer",
    company: "Thy Web Development Inc.",
    type: "Internship",
    period: "Jan 2026 – May 2026",
    description:
      "Developed reusable global UI components and secure proctoring modules for a technical examination platform, integrating features following QA and project manager approval. Built role-based dashboards for HR administrators and applicants, supporting automated candidate evaluation and tracking. Implemented automated media upload optimization using JavaScript Blob URLs with periodic cleanup to improve browser memory management and reduce unnecessary data exposure.",
    tags: [
      "React",
      "JavaScript",
      "REST APIs",
      "Proctoring",
      "UI Components",
    ],
  },
  {
    id: 2,
    icon: FaMobileAlt,
    role: "Full-Stack Mobile Developer",
    company: "Client Projects",
    type: "Freelance",
    period: "Feb 2023 – Jul 2025",
    description:
      "Delivered multiple client projects, including ERP systems, complaint-filing applications, and secure portals. Developed end-to-end web and mobile applications using React and React Native, translated Figma designs into responsive interfaces using Pure CSS, DaisyUI, and UI Kitten, and implemented role-based permissions and REST API integrations across projects.",
    tags: [
      "React",
      "React Native",
      "Figma",
      "REST APIs",
      "DaisyUI",
      "UI Kitten",
    ],
  },
  {
    id: 3,
    icon: FaShopify,
    role: "Contract Shopify Developer",
    company: "Remote / Outsourced",
    type: "Contract",
    period: "Feb 2026 – Jun 2026",
    description:
      "Developed four production Shopify storefront projects, including custom storefront development, feature enhancements, and a B2B migration from BigCommerce to Shopify. Built reusable Shopify sections and interactive features such as tabbed content switchers, multistep lead-generation forms, custom search interfaces, and video integrations. Refactored duplicated code into reusable components to improve maintainability, consistency, and scalability while collaborating with designers and stakeholders to deliver responsive storefronts based on Figma designs.",
    tags: [
      "Shopify",
      "Liquid",
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
    ],
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

          <span
            className="exp-count"
            aria-label={`${EXPERIENCES.length} entries`}
          >
            {EXPERIENCES.length}
          </span>
        </header>

        <div className="exp-grid">
          {EXPERIENCES.map((item) => {
            const ExperienceIcon = item.icon;

            return (
              <article key={item.id} className="exp-card">
                <div className="exp-card-top">
                  <div className="exp-role-group">
                    <span className="exp-icon" aria-hidden="true">
                      <ExperienceIcon />
                    </span>

                    <h3 className="exp-role">{item.role}</h3>
                  </div>

                  <span className="exp-period">{item.period}</span>
                </div>

                <p className="exp-company">
                  {item.company} · {item.type}
                </p>

                <p className="exp-desc">{item.description}</p>

                <ul className="exp-tags">
                  {item.tags.map((tag) => {
                    const TagIcon = TAG_ICONS[tag] ?? FaCode;

                    return (
                      <li key={tag}>
                        <TagIcon className="exp-tag-icon" aria-hidden="true" />
                        {tag}
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

