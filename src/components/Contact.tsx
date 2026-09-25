function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <div className="contact-box">

          <div className="contact-content">

            <p className="section-label">
              05 — CONTACT
            </p>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p className="contact-description">
              I'm open to internships, job opportunities, freelance work,
              collaborations and interesting product ideas.
            </p>

            <a
              href="mailto:sohailaalam258@gmail.com"
              className="email-link"
            >
              sohailaalam258@gmail.com
              <span>↗</span>
            </a>

          </div>

          <div className="contact-actions">

            <a
              href="mailto:sohailaalam258@gmail.com"
              className="contact-button primary-contact"
            >
              Send me an email
              <span>↗</span>
            </a>

            <a
              href="https://github.com/sohailalam-tech"
              target="_blank"
              rel="noreferrer"
              className="contact-button secondary-contact"
            >
              GitHub
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sohail-alam-412711335/"
              target="_blank"
              rel="noreferrer"
              className="contact-button secondary-contact"
            >
              LinkedIn
              <span>↗</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;