function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="status-dot"></span>
          AVAILABLE FOR WORK
        </div>

        <h1>
          UI / UX
          <br />
          <span>Developer.</span>
        </h1>

        <p className="hero-description">
          I create thoughtful, user-focused interfaces and bring them to life
          through frontend development—with a focus on clarity, usability,
          and purposeful design.
        </p>

        <div className="hero-actions">
          <a href="#work" className="button button-primary">
            View my work
            <span>↗</span>
          </a>

          <a href="#contact" className="button button-secondary">
            Let's talk
          </a>
        </div>
      </div>

      <div className="hero-meta">
        <span>BASED IN INDIA</span>
        <span>UI / UX + FRONTEND</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

export default Hero;