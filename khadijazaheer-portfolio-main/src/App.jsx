import "./App.css";

export default function App() {
  return (
    <div className="app">

      <section className="hero">
        <div className="hero-content">
          <p className="tag">PORTFOLIO WEBSITE</p>

          <h1>
            Khadija <span>Zahir Gill</span>
          </h1>

          <p className="subtitle">
            Software Engineering Graduate • Frontend Developer • UI/UX Designer
          </p>

          <div className="buttons">
            <a href="#projects">View Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>About Me</h2>

        <p>
          Passionate Software Engineering graduate from The University of Faisalabad.
        </p>

        <p>
          Completed internships at Sadaqat Limited and FESCO.
        </p>
      </section>

      <section className="section dark">
        <h2>Skills</h2>

        <div className="skills">
          <div className="card">React</div>
          <div className="card">JavaScript</div>
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">UI/UX Design</div>
          <div className="card">Figma</div>
          <div className="card">Python</div>
          <div className="card">Responsive Design</div>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="projects">

          <div className="project">
            <h3>E-Commerce Website</h3>
            <p>Modern shopping website UI built using React.</p>
            <a href="https://github.com/" target="_blank">View Project</a>
          </div>

          <div className="project">
            <h3>Food Delivery App UI</h3>
            <p>Creative mobile application interface design.</p>
            <a href="https://www.figma.com/" target="_blank">View Design</a>
          </div>

          <div className="project">
            <h3>Student Portal System</h3>
            <p>Responsive dashboard for educational management.</p>
            <a href="https://github.com/" target="_blank">View Project</a>
          </div>

        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Me</h2>

        <p>📧 Khadijazaheer995@gmail.com</p>
        <p>📱 03321659677</p>

        <a href="mailto:Khadijazaheer995@gmail.com">
          Send Email
        </a>
      </section>

    </div>
  );
}
