import { useEffect, useRef, useState } from "react";
import { projects, type Project, type ProjectCategory } from "../../lib/portfolio-data";

const TABS: { label: string; filter: ProjectCategory }[] = [
  { label: "Graphics & Digital", filter: "graphics" },
  { label: "Websites", filter: "websites" },
  { label: "Web Apps", filter: "webapps" },
  { label: "Mobile Apps", filter: "mobile" },
];

const CAT_LABELS: Record<ProjectCategory, string> = {
  graphics: "Graphics & Digital",
  websites: "Website",
  webapps: "Web App",
  mobile: "Mobile App",
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("graphics");
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const visible = projects
    .filter((p) => p.cat === activeFilter)
    .map((p, i) => ({ ...p, num: String(i + 1).padStart(2, "0") }));

  function openModal(p: Project) {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setModalProject(p);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalProject(null);
    document.body.style.overflow = "";
    lastFocusedRef.current?.focus();
  }

  /* Focus the close button when modal opens */
  useEffect(() => {
    if (modalProject) closeButtonRef.current?.focus();
  }, [modalProject]);

  /* Escape key */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalProject) closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalProject]);

  return (
    <section id="work">
      <div className="wrap">
        <div className="section-tag reveal">
          <span className="num">03</span>
          <span className="label">Portfolio</span>
          <span className="line" />
        </div>
        <h2 className="section-heading reveal">Selected Work</h2>

        {/* Tabs */}
        <div className="work-tabs reveal" role="tablist" aria-label="Filter selected work by category">
          {TABS.map((tab) => (
            <button
              key={tab.filter}
              className="work-tab"
              role="tab"
              aria-selected={activeFilter === tab.filter}
              onClick={() => setActiveFilter(tab.filter)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid" id="work-grid" role="tabpanel">
          {visible.map((p, i) => (
            <article
              key={`${p.cat}-${i}`}
              className="pcard reveal"
              tabIndex={0}
              role="button"
              aria-label={`View project: ${p.title}`}
              onClick={() => openModal(p)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(p);
                }
              }}
            >
              <span className="pnum">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="pstack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="overlay">
                <span className="view">View Project</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div
        className={`pmodal${modalProject ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pmTitle"
        aria-hidden={!modalProject}
      >
        <div className="pmodal-backdrop" onClick={closeModal} />
        {modalProject && (
          <div className="pmodal-card" role="document">
            <button
              ref={closeButtonRef}
              className="pmodal-close"
              type="button"
              aria-label="Close project details"
              onClick={closeModal}
            >
              &times;
            </button>
            <span className="pmodal-cat">{CAT_LABELS[modalProject.cat]}</span>
            <h3 className="pmodal-title" id="pmTitle">
              {modalProject.title}
            </h3>
            <div className="pmodal-role">
              {modalProject.role} · {modalProject.year}
            </div>
            <p className="pmodal-body">{modalProject.description}</p>
            <div className="pmodal-section">
              <h4>The Challenge</h4>
              <p>{modalProject.challenge}</p>
            </div>
            <div className="pmodal-section">
              <h4>What I Did</h4>
              <p>{modalProject.solution}</p>
            </div>
            <div className="pmodal-stack">
              {modalProject.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
