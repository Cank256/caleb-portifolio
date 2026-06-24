import { experience } from "../../lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-tag reveal">
          <span className="num">02</span>
          <span className="label">Experience</span>
          <span className="line" />
        </div>
        <h2 className="section-heading reveal">Where I&apos;ve worked.</h2>
        <div className="timeline">
          {experience.map((item, i) => (
            <article
              key={i}
              className={`tl-item ${i % 2 === 0 ? "reveal-l" : "reveal-r"}`}
            >
              <div className="tl-role">{item.role}</div>
              <div className="tl-org">{item.org}</div>
              <div className="tl-date">{item.date}</div>
              <p className="tl-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
