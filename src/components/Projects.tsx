import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    number: "01",
    status: "LIVE",
    featured: true,
    category: "STARTUP / FULL-STACK",
    title: "GroomGo",
    description:
      "A real-world wedding and luxury car rental platform focused on wedding transportation, luxury groom cars, fleets and local travel services.",
    features: [
      "Luxury & Groom Cars",
      "Wedding Fleet Booking",
      "Dynamic Pricing",
      "Local Rides",
      "Booking Management",
      "Responsive UI",
    ],
    stack: [
      "HTML",
      "JavaScript",
      "React.js",
      "Vite",
      "Supabase",
    ],
    link: "https://groomgo.in",
  },

  {
    number: "02",
    status: "IN PROGRESS",
    featured: false,
    category: "FULL-STACK / UNIVERSITY",
    title: "CAMPUS",
    description:
      "A university-focused student platform currently under development for sharing confessions, events, help requests and lost & found posts.",
    features: [
      "University Authentication",
      "Anonymous Confessions",
      "Events",
      "Help",
      "Lost & Found",
      "Post Reporting",
    ],
    stack: [
      "React",
      "JavaScript",
      "Supabase",
      "Vite",
    ],
    link: "#",
  },

  {
    number: "03",
    status: "IN PROGRESS",
    featured: false,
    category: "AI / MACHINE LEARNING",
    title: "XAI Disease Prediction",
    description:
      "An ongoing final-year project focused on disease prediction using machine learning and Explainable AI techniques to make predictions easier to understand.",
    features: [
      "Disease Prediction",
      "Machine Learning",
      "Explainable AI",
      "Feature Analysis",
      "Model Interpretation",
    ],
    stack: [
      "Python",
      "Machine Learning",
      "XAI",
    ],
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">03 — PROJECTS</p>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p className="section-subtitle">
            A selection of projects where I've worked on real-world
            problems, products and technical challenges.
          </p>
        </div>

        <ScrollReveal className="projects-list">

          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured
                  ? "featured-project"
                  : ""
              }`}
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">

                <div className="project-meta">

                  <p className="project-category">
                    {project.category}
                  </p>

                  <div
                    className={`project-status ${
                      project.status === "LIVE"
                        ? "status-live"
                        : "status-progress"
                    }`}
                  >
                    <span></span>
                    {project.status}
                  </div>

                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-features">
                  {project.features.map((feature) => (
                    <span key={feature}>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="project-bottom">

                  <div className="project-stack">
                    {project.stack.map((tech, index) => (
                      <span key={tech}>
                        {tech}
                        {index !== project.stack.length - 1 && (
                          <span className="stack-separator">
                            {" / "}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  {project.status === "LIVE" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      View Project
                      <span>↗</span>
                    </a>
                  ) : (
                    <span className="project-link project-link-disabled">
                      Coming Soon
                    </span>
                  )}

                </div>

              </div>

            </article>
          ))}

        </ScrollReveal>

      </div>
    </section>
  );
}

export default Projects;