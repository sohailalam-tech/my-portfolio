import ScrollReveal from "./ScrollReveal";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive and modern interfaces for web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Vite"],
  },
  {
    number: "02",
    title: "Programming",
    description:
      "Using programming to solve problems and build practical solutions.",
    skills: ["Python", "JavaScript"],
  },
  {
    number: "03",
    title: "Database",
    description:
      "Working with application data, backend services and authentication.",
    skills: ["Supabase"],
  },
  {
    number: "04",
    title: "Development",
    description:
      "Turning ideas into functional products and real-world applications.",
    skills: ["React.js", "Vite", "JavaScript", "HTML"],
  },
  {
    number: "05",
    title: "Tools",
    description:
      "Tools I use throughout my development and project workflow.",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">02 — SKILLS</p>

          <h2>
            Tools I use to
            <span> build.</span>
          </h2>

          <p className="section-subtitle">
            A practical set of technologies I use to develop websites,
            applications and real-world digital products.
          </p>
        </div>

        <ScrollReveal className="skills-grid">

          {skillGroups.map((group) => (
            <div className="skill-card" key={group.number}>

              <div className="skill-card-top">
                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </ScrollReveal>

      </div>
    </section>
  );
}

export default Skills;