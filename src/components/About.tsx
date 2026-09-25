import ScrollReveal from "./ScrollReveal";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">01 — ABOUT ME</p>

          <h2>
            More than just a
            <span> developer.</span>
          </h2>
        </div>

        <ScrollReveal className="about-grid">

          {/* About Text */}
          <div className="about-text">

            <p className="about-lead">
              I'm a Computer Science student who enjoys turning ideas into
              real, usable digital products.
            </p>

            <p>
              My focus is web development, full-stack applications and
              solving practical problems through technology. I enjoy working
              across the frontend, backend and database layers of a product.
            </p>

            <p>
              Alongside development, I've also worked on my own product,
              <strong> GroomGo</strong> — a wedding and luxury car rental
              platform designed around real local business requirements.
            </p>

            <p>
              I'm continuously learning, experimenting with new technologies
              and looking for opportunities where I can build meaningful
              products while growing as a developer.
            </p>

          </div>

          {/* Stats */}
          <div className="about-stats">

            <div className="stat-card">
              <span className="stat-number">03+</span>

              <span className="stat-title">
                Major Projects
              </span>

              <span className="stat-description">
                From web platforms to AI-based applications.
              </span>
            </div>

            <div className="stat-card">
              <span className="stat-number">01</span>

              <span className="stat-title">
                Product Built
              </span>

              <span className="stat-description">
                GroomGo — a real-world rental platform.
              </span>
            </div>

            <div className="stat-card">
              <span className="stat-number">∞</span>

              <span className="stat-title">
                Curiosity
              </span>

              <span className="stat-description">
                Always learning and building something new.
              </span>
            </div>

            <div className="stat-card accent-card">
              <span className="stat-number">2027</span>

              <span className="stat-title">
                Graduation
              </span>

              <span className="stat-description">
                B.Tech Computer Science & Engineering.
              </span>
            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}

export default About;