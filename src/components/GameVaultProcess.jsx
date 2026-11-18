function GameVaultProcess() {
  const steps = [
    { number: "01", title: "Understand the users", text: "Consider what players need when exploring a large catalogue: quick discovery, useful details and a way to keep track of games." },
    { number: "02", title: "Organize discovery", text: "Structure the experience around search, genre and platform filters, game details, and personal collections." },
    { number: "03", title: "Shape the interface", text: "Use clear hierarchy, consistent cards and controls, and a responsive layout to make browsing feel straightforward." },
    { number: "04", title: "Build & refine", text: "Implement the interface and interactions, then review the experience across layouts and refine the flow." },
  ];

  return (
    <section className="gv-process-section" id="design-process">
      <div className="section-heading">
        <div>
          <span className="section-number">01</span>
          <h2>Design Process<br /><span>Spotlight.</span></h2>
        </div>
        <p>A retrospective look at the product thinking behind GameVault—from organizing game discovery to shaping a clear browsing experience.</p>
      </div>
      <div className="gv-process-layout">
        <a className="gv-process-image" href="/projects/project-01.png" target="_blank" rel="noreferrer">
          <img src="/projects/project-01.png" alt="GameVault application preview" loading="lazy" />
          <span>GAMEVAULT ↗</span>
        </a>
        <div className="gv-process-steps">
          {steps.map((step) => (
            <article className="gv-process-step" key={step.number}>
              <span>{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
            </article>
          ))}
        </div>
      </div>
      <p className="gv-process-note">This process overview is a retrospective framing of the project, not a claim of formal user research or usability testing.</p>
    </section>
  );
}

export default GameVaultProcess;
