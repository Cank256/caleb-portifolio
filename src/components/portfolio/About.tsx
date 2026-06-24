import calebPhoto from "../../assets/caleb.jpg";
import { skills } from "../../lib/portfolio-data";

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-tag reveal">
          <span className="num">01</span>
          <span className="label">About</span>
          <span className="line" />
        </div>
        <div className="about-grid">
          <div className="photo-card reveal-l">
            <span className="frame" aria-hidden="true" />
            <img
              className="photo"
              src={calebPhoto}
              alt="Caleb Nkunze, web developer and designer based in Kampala"
              loading="lazy"
            />
            <span className="tag">// caleb_nkunze.jpg</span>
          </div>
          <div className="reveal-r">
            <h2 className="section-heading">Code, design &amp; everything between.</h2>
            <p className="about-bio" style={{ marginTop: "22px" }}>
              I&apos;m a Kampala-based developer and designer with{" "}
              <strong>9+ years of experience</strong> building digital platforms, designing
              visual communications, and managing ICT systems. I specialise in web
              development, UI/UX design, and digital media — and I lead the media team at{" "}
              <strong>Bukoto Evangelical Church</strong> where I produce graphics, manage
              streams, and edit video.
            </p>
            <div className="stat-row">
              <div className="stat">
                <div className="n">9+</div>
                <div className="t">Years experience</div>
              </div>
              <div className="stat">
                <div className="n">40+</div>
                <div className="t">Projects shipped</div>
              </div>
              <div className="stat">
                <div className="n">4</div>
                <div className="t">Disciplines</div>
              </div>
            </div>
            <span className="label label--accent" style={{ display: "block", marginBottom: "14px" }}>
              Toolkit
            </span>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span className="pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
