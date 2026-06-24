import { useEffect, useRef, useState } from "react";

const ROLES = ["Web Developer", "Graphic Designer", "Digital Communicator", "IT Specialist"];
const NAME_WORDS = ["CALEB", "NKUNZE"];

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const letterRefs = useRef<HTMLSpanElement[][]>([]);

  /* ---------- Typewriter ---------- */
  useEffect(() => {
    let rIdx = 0, cIdx = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function loop() {
      const cur = ROLES[rIdx];
      if (!deleting) {
        cIdx++;
        setTypedText(cur.slice(0, cIdx));
        if (cIdx === cur.length) {
          deleting = true;
          timer = setTimeout(loop, 1500);
        } else {
          timer = setTimeout(loop, 70);
        }
      } else {
        cIdx--;
        setTypedText(cur.slice(0, cIdx));
        if (cIdx === 0) {
          deleting = false;
          rIdx = (rIdx + 1) % ROLES.length;
          timer = setTimeout(loop, 300);
        } else {
          timer = setTimeout(loop, 38);
        }
      }
    }
    timer = setTimeout(loop, 400);
    return () => clearTimeout(timer);
  }, []);

  /* ---------- Letter hover wave on name hover ---------- */
  function handleNameMouseEnter() {
    const all = letterRefs.current.flat();
    all.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("lift");
        setTimeout(() => el.classList.remove("lift"), 260);
      }, i * 35);
    });
  }

  /* ---------- Particle canvas ---------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const gap = 38;
    const mouse = { x: -999, y: -999 };
    type Dot = { x: number; y: number; ox: number; oy: number };
    let dots: Dot[] = [];
    let rafId: number;

    function resize() {
      canvas!.width = canvas!.offsetWidth * dpr;
      canvas!.height = canvas!.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function build() {
      dots = [];
      const w = canvas!.offsetWidth, h = canvas!.offsetHeight;
      for (let x = gap; x < w; x += gap)
        for (let y = gap; y < h; y += gap)
          dots.push({ x, y, ox: x, oy: y });
    }

    const parent = canvas.parentElement!;
    const onMouseMove = (e: MouseEvent) => {
      const r = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onMouseLeave = () => { mouse.x = -999; mouse.y = -999; };
    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);

    function draw() {
      const w = canvas!.offsetWidth, h = canvas!.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        const dx = d.x - mouse.x, dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < 130;
        if (near) {
          const force = (130 - dist) / 130;
          d.x += (dx / (dist || 1)) * force * 2.4;
          d.y += (dy / (dist || 1)) * force * 2.4;
        }
        d.x += (d.ox - d.x) * 0.08;
        d.y += (d.oy - d.y) * 0.08;
        ctx.beginPath();
        ctx.arc(d.x, d.y, near ? 2 : 1.2, 0, Math.PI * 2);
        ctx.fillStyle = near
          ? `rgba(0,229,160,${0.3 + 0.5 * ((130 - dist) / 130)})`
          : "rgba(255,255,255,0.10)";
        ctx.fill();
      });
      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <header className="hero" id="hero">
      <canvas ref={canvasRef} id="hero-canvas" aria-hidden="true" />
      <div className="wrap">
        <span className="hero-label label">Based in Kampala, Uganda 🇺🇬</span>
        <h1
          className="hero-name"
          aria-label="Caleb Nkunze"
          onMouseEnter={handleNameMouseEnter}
        >
          {NAME_WORDS.map((word, wi) => (
            <span className="word" key={wi}>
              {word.split("").map((ch, ci) => (
                <span
                  key={ci}
                  className="ltr"
                  ref={(el) => {
                    if (!letterRefs.current[wi]) letterRefs.current[wi] = [];
                    if (el) letterRefs.current[wi][ci] = el;
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.classList.add("lift");
                    setTimeout(() => el.classList.remove("lift"), 280 + (ci % 3) * 40);
                  }}
                >
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="roles" aria-live="polite">
          <span className="typed">{typedText}</span>
          <span className="caret">|</span>
        </p>
        <p className="hero-tagline">
          I build things that <strong>look good</strong> and{" "}
          <strong>work perfectly.</strong>
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn btn--solid">
            View My Work
          </a>
          <a href="#contact" className="btn btn--outline">
            Download CV
          </a>
        </div>
      </div>
      <a href="#about" className="scroll-ind" aria-label="Scroll to about">
        <span className="label">Scroll</span>
        <span className="arrow" aria-hidden="true" />
      </a>
    </header>
  );
}
