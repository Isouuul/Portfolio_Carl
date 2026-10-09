import './Certificates.css';

const CERTIFICATES = [
  {
    title: 'Diploma in Information Technology',
    issuer: 'STI West Negros University',
    year: '2025',
    description:
      'Completed a Bachelor of Science in Information Technology program, building a strong foundation in software development, systems, and digital technology.',
  },
  {
    title: 'Certificate of Completion',
    issuer: 'Thy Web Dev Inc. OJT',
    year: '2025',
    description:
      'Successfully completed an on-the-job training program in web development, gaining hands-on experience in real-world project work and frontend implementation.',
  },
];

export default function Certificates() {
  return (
    <div className="cert-layout">
      <section className="cert-panel" aria-labelledby="cert-title">
        <header className="cert-header">
          <h2 id="cert-title" className="cert-title">
            Certificates
          </h2>
          <span className="cert-rule" aria-hidden="true" />
          <span className="cert-count" aria-label={`${CERTIFICATES.length} certificates`}>
            {CERTIFICATES.length}
          </span>
        </header>

        <div className="cert-grid">
          {CERTIFICATES.map((item) => (
            <article key={item.title} className="cert-card">
              <span className="cert-year">{item.year}</span>
              <h3 className="cert-name">{item.title}</h3>
              <p className="cert-issuer">{item.issuer}</p>
              <p className="cert-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
