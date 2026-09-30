import React from 'react';

const Contact = () => {
  return (
    <div className="tab-section">
      <h2 className="section-title">CONTACT</h2>
      <p className="section-text">
        Feel free to reach out for collaborations or inquiries at:{' '}
        <a href="mailto:your.email@example.com" className="content-link">
          your.email@example.com
        </a>
      </p>
    </div>
  );
};

export default Contact;