import { useEffect, useRef } from "react";

export function SectionDivider() {
  const fillRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    const wrap = wrapRef.current;
    if (!fill || !wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fill.style.transition = "width 1.1s cubic-bezier(0.16,1,0.3,1)";
          fill.style.width = "100%";
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="wrap">
      <div
        ref={wrapRef}
        style={{ position: "relative", height: "1px", margin: "0" }}
      >
        <span
          ref={fillRef}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "1px",
            width: "0%",
            background:
              "linear-gradient(90deg, transparent, var(--accent), var(--accent-2), transparent)",
          }}
        />
      </div>
    </div>
  );
}
