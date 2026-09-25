import ScrollReveal from "./ScrollReveal";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">04 — EXPERIENCE</p>

          <h2>
            Where I've
            <span> worked & built.</span>
          </h2>
        </div>

        <ScrollReveal className="experience-layout">

          {/* EXPERIENCE */}

          <div className="experience-column">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <div className="timeline-top">

                  <span className="timeline-date">
                    2025 — Present
                  </span>

                  <span className="timeline-type">
                    STARTUP / PRODUCT
                  </span>

                </div>

                <h3>
                  Founder & Developer
                </h3>

                <h4>
                  GroomGo
                </h4>

                <p>
                  Founded and developed GroomGo, a local car rental
                  platform focused on wedding transportation, luxury
                  groom cars, fleets and local travel services.
                </p>

                <ul>

                  <li>
                    Founded and developed the GroomGo platform
                    from the initial idea to product development.
                  </li>

                  <li>
                    Developed and managed the website and digital
                    presence using React.js, Vite, JavaScript,
                    HTML and Supabase.
                  </li>

                  <li>
                    Designed user-focused booking and rental
                    workflows for wedding transportation.
                  </li>

                  <li>
                    Worked on business strategy, customer
                    understanding and service management.
                  </li>

                  <li>
                    Worked on digital marketing and improving
                    GroomGo's local online presence.
                  </li>

                </ul>

                <div className="experience-stack">

                  <span>React.js</span>
                  <span>Vite</span>
                  <span>JavaScript</span>
                  <span>Supabase</span>
                  <span>HTML</span>

                </div>

              </div>

            </div>

          </div>

          {/* EDUCATION */}

          <div className="education-column">

            <p className="education-label">
              EDUCATION
            </p>

            <div className="education-card">

              <span className="education-year">
                2023 — 2027
              </span>

              <h3>
                B.Tech — Computer Science & Engineering
              </h3>

              <h4>
                Integral University, Lucknow
              </h4>

              <p>
                Currently pursuing a Bachelor's degree in Computer
                Science and Engineering with a focus on software
                development, web technologies and practical
                project building.
              </p>

              <div className="education-tags">

                <span>
                  Computer Science
                </span>

                <span>
                  Software Development
                </span>

                <span>
                  Web Technologies
                </span>

              </div>

            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}

export default Experience;