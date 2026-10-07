import { useState } from "react";
import "./Contact.css";

const CONTACT_INFO = [
  {
    label: "Email",
    value: "carlbryan123099@gmail.com",
    href: "mailto:carlbryan123099@gmail.com",
  },
  {
    label: "Phone",
    value: "+639369010809",
    href: "tel:+639369010809",
  },
  {
    label: "Location",
    value: "Purok Magayon, Brgy. R.S.B., La Carlota City, Negros Occidental",
  },
];

// Replace the "#" links with your real profile URLs
const SOCIALS = [
  { name: "GitHub", href: "https://github.com/Isouuul" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/carl-bryan-sacudit-9b1597404" },
  { name: "Facebook", href: "https://www.facebook.com/hesoyam123099" },
  { name: "Instagram", href: "https://www.instagram.com/_hue_forya/" },
];

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (sent) setSent(false);
  };

  // Opens the visitor's email app with the message filled in.
  // Swap this for EmailJS / Formspree / your own API when you want
  // messages delivered without leaving the site.
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    const mailto = `mailto:${CONTACT_INFO[0].value}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setForm(EMPTY_FORM);
  };

  return (
    <div className="contact-layout">
      <section className="contact-panel" aria-labelledby="contact-title">
        <header className="contact-header">
          <h2 id="contact-title" className="contact-title">
            Get in touch
          </h2>
          <span className="contact-rule" aria-hidden="true" />
        </header>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                autoComplete="name"
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Your email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project collaboration"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <div className="contact-actions">
            <button type="submit" className="contact-send">
              Send message
            </button>
            <p className="contact-status" role="status" aria-live="polite">
              {sent ? "Your email app should open with the message ready to send." : ""}
            </p>
          </div>
        </form>
      </section>

      <aside className="contact-panel contact-side" aria-labelledby="contact-info-title">
        <h2 id="contact-info-title" className="contact-side-title">
          Contact details
        </h2>

        <ul className="contact-info">
          {CONTACT_INFO.map((item) => (
            <li key={item.label} className="contact-info-item">
              <span className="contact-info-label">{item.label}</span>
              {item.href ? (
                <a className="contact-info-value" href={item.href}>
                  {item.value}
                </a>
              ) : (
                <span className="contact-info-value">{item.value}</span>
              )}
            </li>
          ))}
        </ul>

        <h3 className="contact-social-title">Find me online</h3>
        <div className="contact-socials">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              className="contact-social"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.name}
            </a>
          ))}
        </div>
      </aside>
    </div>
  );
}