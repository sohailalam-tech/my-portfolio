function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <div className="availability">
            <span></span>
            Available for opportunities
          </div>

          <p className="hero-intro">HELLO, I'M</p>

          <h1>
            Sohail <span>Alam.</span>
          </h1>

          <h2>
            I build <span>digital products</span> that solve real problems.
          </h2>

          <p className="hero-description">
            Computer Science student and developer focused on building
            modern web applications, full-stack products and real-world
            digital solutions.
          </p>

          <div className="hero-buttons">
  <a href="#projects" className="primary-btn">
    View My Work
    <span>↗</span>
  </a>

  <a
    href="/resume.pdf"
    className="secondary-btn"
    download="Sohail Alam (Resume).pdf"
  >
    Download Resume
    <span>↓</span>
  </a>
</div>

          <div className="hero-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Node.js</span>
            <span>Supabase</span>
          </div>

        </div>

        <div className="hero-visual">

          <div className="red-glow"></div>

          <div className="code-card">

            <div className="code-top">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>developer.ts</p>
            </div>

            <div className="code-content">
              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                name: <span className="green">"Sohail Alam"</span>,
              </p>

              <p className="indent">
                role: <span className="green">"Developer"</span>,
              </p>

              <p className="indent">
                focus: <span className="green">"Building Products"</span>,
              </p>

              <p className="indent">
                stack: <span className="green">"React + Node"</span>
              </p>

              <p>{"}"}</p>

              <br />

              <p>
                <span className="red-text">→</span>{" "}
                <span className="white-text">
                  Let's build something great.
                </span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;