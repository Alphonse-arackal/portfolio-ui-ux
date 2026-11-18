const skillGroups = [
  { number: "01", title: "UI / UX Design", skills: ["User-centered design", "Wireframing", "User flows", "Information architecture", "Usability principles"] },
  { number: "02", title: "Visual Design", skills: ["Typography", "Visual hierarchy", "Layout & grids", "Responsive design", "UI components"] },
  { number: "03", title: "Design Tools", skills: ["Figma", "Prototyping", "Design systems", "Interface exploration"] },
  { number: "04", title: "Development", skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git & GitHub"] },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <div><span className="section-number">03</span><h2>Skills</h2></div>
        <p>Design thinking, visual craft, and frontend skills for creating and building thoughtful digital experiences.</p>
      </div>
      <div className="skills-list">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.number}>
            <div className="skill-group-number">{group.number}</div>
            <h3>{group.title}</h3>
            <div className="skill-items">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
