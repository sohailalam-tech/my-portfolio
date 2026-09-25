function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <span>S</span>OHAIL
          </a>

          <p>
            Building products, learning constantly.
          </p>

        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Sohail Alam. All rights reserved.
          </p>

          <p>
            Designed & built by <span>Sohail Alam</span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;