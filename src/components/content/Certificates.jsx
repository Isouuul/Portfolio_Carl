import './Certificates.css';
import diplomaImage from '../../assets/Diploma.jpg';
import completionImage from '../../assets/Completion-OJT.jpg';

const CERTIFICATES = [
  {
    image: diplomaImage,
    alt: 'Bachelor of Science in Information Technology diploma',
  },
  {
    image: completionImage,
    alt: 'Thy Web Development Inc. on-the-job training certificate of completion',
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
            <article key={item.image} className="cert-card">
              <img className="cert-image" src={item.image} alt={item.alt} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
