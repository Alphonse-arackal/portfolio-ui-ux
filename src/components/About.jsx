
function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-heading">
        <div>
          <span className="section-number">02</span>
          <h2>About Me</h2>
        </div>

        <p>
          A little about who I am, how I approach design,
          and what drives me to create digital experiences.
        </p>
      </div>

      <div className="about-grid">

        <div className="about-statement">
          <p>
            I'm a <strong>UI / UX Developer</strong> passionate
            about creating intuitive, visually engaging, and
            user-centered digital experiences.
          </p>

          <p>
            I enjoy understanding how people interact with
            digital products, translating ideas into thoughtful
            interfaces, and bringing those designs to life through
            frontend development. I focus on usability, visual
            clarity, and creating experiences that feel simple
            and purposeful.
          </p>
        </div>

        <div className="about-details">
          <div className="detail">
            <span>FOCUS</span>
            <p>UI / UX Design & Frontend Development</p>
          </div>

          <div className="detail">
            <span>APPROACH</span>
            <p>Intuitive · Accessible · User-focused</p>
          </div>

          <div className="detail">
            <span>BASED IN</span>
            <p>India</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;
